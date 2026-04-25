"use client";

import { useCallback, useEffect, useState } from "react";

type Prefs = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "jakubasek-cookies-v1";
const OPEN_EVENT = "open-cookie-settings";

const defaultPrefs: Prefs = {
  necessary: true,
  analytics: false,
  marketing: false,
};

function readPrefs(): Prefs | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<Prefs>;
    return { ...defaultPrefs, ...parsed, necessary: true };
  } catch {
    return null;
  }
}

function persist(prefs: Prefs) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
  } catch {
    /* ignore */
  }
}

export default function CookieBanner() {
  const [hydrated, setHydrated] = useState(false);
  const [bannerOpen, setBannerOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(defaultPrefs);

  useEffect(() => {
    const stored = readPrefs();
    if (stored) setPrefs(stored);
    else setBannerOpen(true);
    setHydrated(true);

    const open = () => {
      const current = readPrefs();
      if (current) setPrefs(current);
      setSettingsOpen(true);
    };
    window.addEventListener(OPEN_EVENT, open);
    return () => window.removeEventListener(OPEN_EVENT, open);
  }, []);

  const acceptAll = useCallback(() => {
    const all: Prefs = { necessary: true, analytics: true, marketing: true };
    setPrefs(all);
    persist(all);
    setBannerOpen(false);
    setSettingsOpen(false);
  }, []);

  const rejectAll = useCallback(() => {
    const none: Prefs = { necessary: true, analytics: false, marketing: false };
    setPrefs(none);
    persist(none);
    setBannerOpen(false);
    setSettingsOpen(false);
  }, []);

  const saveCustom = useCallback(() => {
    persist(prefs);
    setBannerOpen(false);
    setSettingsOpen(false);
  }, [prefs]);

  if (!hydrated) return null;

  return (
    <>
      {bannerOpen && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Súhlas s cookies"
          className="fixed inset-x-0 bottom-0 z-[80] p-4 md:p-6"
        >
          <div className="mx-auto max-w-5xl bg-secondary text-white shadow-2xl border border-white/10 backdrop-blur-md">
            <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:items-center">
              <div>
                <p className="text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-3">
                  Cookies
                </p>
                <h2 className="text-2xl font-black uppercase italic tracking-tight mb-2">
                  Vážime si vaše súkromie
                </h2>
                <p className="text-white/70 font-light text-sm leading-relaxed">
                  Tento web používa cookies pre základnú funkcionalitu, analytiku
                  a marketing. Kliknutím na „Prijať všetky" súhlasíte s
                  používaním všetkých cookies. V{" "}
                  <button
                    type="button"
                    onClick={() => setSettingsOpen(true)}
                    className="underline hover:text-primary transition-colors font-semibold"
                  >
                    Nastaveniach
                  </button>{" "}
                  si môžete vybrať, ktoré kategórie povolíte.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:flex-col md:items-stretch">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="group inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white text-xs font-black tracking-[0.15em] uppercase transition-colors"
                >
                  <span className="hover-split-text">
                    <span
                      className="hover-split-text-inner"
                      data-text="Prijať všetky"
                    >
                      Prijať všetky
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className="group inline-flex items-center justify-center px-6 py-3 border border-white/20 hover:border-white/60 text-white text-xs font-black tracking-[0.15em] uppercase transition-colors"
                >
                  <span className="hover-split-text">
                    <span
                      className="hover-split-text-inner"
                      data-text="Odmietnuť"
                    >
                      Odmietnuť
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setSettingsOpen(true)}
                  className="group inline-flex items-center justify-center px-6 py-3 text-white/70 hover:text-white text-xs font-black tracking-[0.15em] uppercase transition-colors"
                >
                  <span className="hover-split-text">
                    <span
                      className="hover-split-text-inner"
                      data-text="Nastavenia"
                    >
                      Nastavenia
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Nastavenia cookies"
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-8"
        >
          <button
            type="button"
            aria-label="Zavrieť"
            onClick={() => setSettingsOpen(false)}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default"
          />
          <div className="relative w-full max-w-xl bg-white text-secondary shadow-2xl">
            <div className="p-8 md:p-12 max-h-[85vh] overflow-y-auto">
              <p className="text-primary text-[10px] font-black tracking-[0.3em] uppercase mb-3">
                Nastavenia cookies
              </p>
              <h3 className="text-3xl md:text-4xl font-black uppercase italic tracking-tight mb-6">
                Vyberte si<span className="text-primary">.</span>
              </h3>
              <p className="text-secondary/70 font-light text-sm leading-relaxed mb-8">
                Niektoré cookies sú nevyhnutné pre fungovanie webu a nedajú sa
                vypnúť. Ostatné kategórie môžete kedykoľvek zapnúť alebo
                vypnúť.
              </p>

              <Toggle
                title="Nevyhnutné"
                description="Zaisťujú základnú funkcionalitu webu, navigáciu a bezpečnosť. Bez nich web nefunguje správne."
                checked
                disabled
              />
              <Toggle
                title="Analytické"
                description="Pomáhajú nám pochopiť, ako návštevníci používajú web, aby sme ho mohli zlepšovať."
                checked={prefs.analytics}
                onChange={(v) =>
                  setPrefs((p) => ({ ...p, analytics: v }))
                }
              />
              <Toggle
                title="Marketingové"
                description="Slúžia na zobrazovanie relevantných reklám a meranie ich účinnosti."
                checked={prefs.marketing}
                onChange={(v) =>
                  setPrefs((p) => ({ ...p, marketing: v }))
                }
              />

              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={saveCustom}
                  className="group inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-primary-dark text-white text-xs font-black tracking-[0.15em] uppercase transition-colors flex-1"
                >
                  <span className="hover-split-text">
                    <span
                      className="hover-split-text-inner"
                      data-text="Uložiť výber"
                    >
                      Uložiť výber
                    </span>
                  </span>
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="group inline-flex items-center justify-center px-6 py-3 border border-secondary/15 hover:border-secondary text-secondary text-xs font-black tracking-[0.15em] uppercase transition-colors"
                >
                  <span className="hover-split-text">
                    <span
                      className="hover-split-text-inner"
                      data-text="Prijať všetky"
                    >
                      Prijať všetky
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Toggle({
  title,
  description,
  checked,
  onChange,
  disabled,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange?: (value: boolean) => void;
  disabled?: boolean;
}) {
  return (
    <div className="flex items-start justify-between gap-4 py-5 border-t border-secondary/10 first:border-t-0">
      <div className="min-w-0">
        <p className="text-base font-black uppercase italic tracking-tight">
          {title}
        </p>
        <p className="text-secondary/60 font-light text-sm leading-relaxed mt-1">
          {description}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onChange?.(!checked)}
        className={`relative shrink-0 w-12 h-6 transition-colors ${
          checked ? "bg-primary" : "bg-secondary/20"
        } ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white shadow transition-transform ${
            checked ? "translate-x-6" : "translate-x-0"
          }`}
        />
      </button>
    </div>
  );
}

export function openCookieSettings() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_EVENT));
  }
}
