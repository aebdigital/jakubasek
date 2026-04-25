"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("meno") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("sprava") || "").trim(),
      // honeypot
      website: String(data.get("website") || ""),
    };

    if (payload.website) {
      // bot — silently succeed
      setStatus("success");
      setMessage("Ďakujeme, ozveme sa.");
      form.reset();
      return;
    }

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      setMessage("Prosím vyplňte všetky polia.");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.error || "Nepodarilo sa odoslať správu.");
      }

      setStatus("success");
      setMessage("Ďakujeme! Vašu správu sme prijali a čoskoro sa ozveme.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "Niečo sa pokazilo. Skúste to prosím znova."
      );
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="flex flex-col gap-6 w-full"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          name="meno"
          placeholder="Meno *"
          required
          autoComplete="name"
          className="bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail *"
          required
          autoComplete="email"
          className="bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
        />
      </div>
      <textarea
        name="sprava"
        placeholder="..napíšte nám *"
        rows={3}
        required
        className="bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors resize-none"
      />

      {/* honeypot */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] opacity-0 w-px h-px"
      />

      {message && (
        <p
          role="status"
          className={`text-sm font-medium ${
            status === "error" ? "text-red-400" : "text-primary"
          }`}
        >
          {message}
        </p>
      )}

      <div className="mt-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center justify-center px-10 py-4 bg-primary text-white text-sm font-black hover:bg-primary-dark transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          <span className="hover-split-text">
            <span
              className="hover-split-text-inner"
              data-text={status === "loading" ? "Posielam..." : "Poslať"}
            >
              {status === "loading" ? "Posielam..." : "Poslať"}
            </span>
          </span>
        </button>
      </div>
    </form>
  );
}
