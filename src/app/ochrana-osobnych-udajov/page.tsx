import type { Metadata } from "next";
import Link from "next/link";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description:
    "Informácie o spracúvaní osobných údajov spoločnosti Jakubasek (Jaroslav Jakubašek) podľa Nariadenia GDPR.",
  alternates: { canonical: "/ochrana-osobnych-udajov" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <SiteChrome />

      <main className="bg-light text-secondary pt-32 md:pt-40 pb-24 md:pb-32 min-h-screen">
        <div className="mx-auto w-[95vw] max-w-4xl px-6 md:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-black tracking-[0.3em] uppercase text-primary hover:text-primary-dark transition-colors mb-10"
          >
            ← Späť na úvod
          </Link>

          <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-6">
            Ochrana osobných údajov
            <span className="text-primary">.</span>
          </h1>
          <p className="text-secondary/60 font-light text-base md:text-lg leading-relaxed mb-12">
            Tento dokument popisuje, ako spracúvame osobné údaje pri prevádzke
            webu jakubasek.eu a pri poskytovaní našich služieb v zmysle
            Nariadenia Európskeho parlamentu a Rady (EÚ) 2016/679 (GDPR) a
            zákona č. 18/2018 Z. z. o ochrane osobných údajov.
          </p>

          <div className="space-y-12 text-base md:text-lg font-light leading-relaxed">
            <section>
              <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-4">
                1. Prevádzkovateľ
              </h2>
              <div className="bg-white border border-secondary/10 p-6 md:p-8 shadow-sm">
                <p className="text-xl font-black mb-2">Jaroslav Jakubašek</p>
                <p className="text-secondary/70">Rovná 8, Dlhá Lúka</p>
                <p className="text-secondary/70 mb-3">085 01 Bardejov</p>
                <p className="text-secondary/70">
                  E-mail:{" "}
                  <a
                    href="mailto:jaroslavjakubasek@gmail.com"
                    className="text-primary hover:text-primary-dark"
                  >
                    jaroslavjakubasek@gmail.com
                  </a>
                </p>
                <p className="text-secondary/70">
                  Telefón:{" "}
                  <a
                    href="tel:+421948300988"
                    className="text-primary hover:text-primary-dark"
                  >
                    +421 948 300 988
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-4">
                2. Aké údaje spracúvame
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-secondary/80">
                <li>
                  <strong>Kontaktné údaje</strong> – meno, e-mail, telefón,
                  ktoré nám poskytnete prostredníctvom kontaktného formulára
                  alebo telefonicky.
                </li>
                <li>
                  <strong>Obsah správy</strong> – informácie, ktoré nám
                  poskytnete v rámci dopytu alebo objednávky.
                </li>
                <li>
                  <strong>Technické údaje</strong> – IP adresa, typ prehliadača
                  a operačného systému, údaje o návštevnosti, ktoré sa môžu
                  získavať prostredníctvom cookies a serverových logov.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-4">
                3. Účel a právny základ spracúvania
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-secondary/80">
                <li>
                  <strong>Vybavenie dopytu / objednávky</strong> – článok 6 ods.
                  1 písm. b) GDPR (plnenie zmluvy alebo predzmluvných opatrení).
                </li>
                <li>
                  <strong>Plnenie právnych povinností</strong> (účtovníctvo,
                  daňové predpisy) – článok 6 ods. 1 písm. c) GDPR.
                </li>
                <li>
                  <strong>Oprávnený záujem</strong> na zabezpečení prevádzky,
                  bezpečnosti a zlepšovaní webu – článok 6 ods. 1 písm. f) GDPR.
                </li>
                <li>
                  <strong>Súhlas</strong> v prípade marketingových a
                  analytických cookies – článok 6 ods. 1 písm. a) GDPR.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-4">
                4. Doba uchovávania
              </h2>
              <p className="text-secondary/80">
                Osobné údaje uchovávame iba na nevyhnutne potrebnú dobu –
                spravidla po dobu trvania zmluvného vzťahu a následne po dobu
                vyžadovanú právnymi predpismi (napr. účtovné doklady 10 rokov).
                Údaje z kontaktného formulára uchovávame najviac 24 mesiacov,
                pokiaľ neuzatvoríme zmluvný vzťah.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-4">
                5. Príjemcovia údajov
              </h2>
              <p className="text-secondary/80">
                Osobné údaje neposkytujeme tretím stranám okrem prípadov, keď
                to vyžaduje zákon alebo plnenie zmluvy. Sprostredkovateľmi sú
                najmä poskytovatelia hostingu, e-mailových a IT služieb (napr.
                SMTP2GO pre doručovanie e-mailov, Netlify pre hosting), ktorí
                údaje spracúvajú výlučne podľa našich pokynov.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-4">
                6. Vaše práva
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-secondary/80">
                <li>právo na prístup k osobným údajom,</li>
                <li>právo na opravu nepresných údajov,</li>
                <li>právo na výmaz („právo byť zabudnutý"),</li>
                <li>právo na obmedzenie spracúvania,</li>
                <li>právo na prenosnosť údajov,</li>
                <li>právo namietať proti spracúvaniu,</li>
                <li>
                  právo kedykoľvek odvolať udelený súhlas (bez vplyvu na
                  zákonnosť spracúvania pred jeho odvolaním),
                </li>
                <li>
                  právo podať sťažnosť na Úrad na ochranu osobných údajov SR.
                </li>
              </ul>
              <p className="text-secondary/80 mt-4">
                Svoje práva si môžete uplatniť e-mailom na{" "}
                <a
                  href="mailto:jaroslavjakubasek@gmail.com"
                  className="text-primary hover:text-primary-dark"
                >
                  jaroslavjakubasek@gmail.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-4">
                7. Cookies
              </h2>
              <p className="text-secondary/80">
                Web používa nevyhnutné cookies pre svoju základnú funkcionalitu
                a po vašom súhlase aj analytické a marketingové cookies. Súhlas
                môžete kedykoľvek upraviť kliknutím na odkaz „Cookies"
                v pätičke webu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-black uppercase italic tracking-tight mb-4">
                8. Zmeny zásad
              </h2>
              <p className="text-secondary/80">
                Tieto zásady môžeme priebežne aktualizovať. Aktuálna verzia je
                vždy zverejnená na tejto stránke s uvedením dátumu poslednej
                úpravy.
              </p>
              <p className="text-secondary/50 mt-6 text-sm">
                Posledná aktualizácia: {new Date().toLocaleDateString("sk-SK")}
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
