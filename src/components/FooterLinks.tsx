"use client";

import { openCookieSettings } from "@/components/CookieBanner";

export default function FooterLinks() {
  return (
    <div className="flex flex-wrap gap-x-6 gap-y-2 items-center">
      <a href="/#onas" className="hover:text-primary transition-colors">
        O nás
      </a>
      <a href="/#sluzby" className="hover:text-primary transition-colors">
        Naše služby
      </a>
      <a href="/#referencie" className="hover:text-primary transition-colors">
        Referencie
      </a>
      <a
        href="/ochrana-osobnych-udajov"
        className="hover:text-primary transition-colors"
      >
        Ochrana osobných údajov
      </a>
      <button
        type="button"
        onClick={openCookieSettings}
        className="hover:text-primary transition-colors uppercase tracking-widest cursor-pointer"
      >
        Cookies
      </button>
      <a
        href="https://aebdigital.sk"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary transition-colors"
      >
        Tvorba webu — AEB Digital
      </a>
    </div>
  );
}
