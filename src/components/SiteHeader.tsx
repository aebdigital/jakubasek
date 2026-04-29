import Image from "next/image";
import Link from "next/link";

type NavLink = { href: string; label: string };

type Props = {
  navLinks: NavLink[];
  homeHref?: string;
};

export default function SiteHeader({ navLinks, homeHref = "#top" }: Props) {
  const isInternal = (href: string) => href.startsWith("/") && !href.startsWith("//");

  return (
    <header
      id="site-header"
      className="site-header fixed top-0 left-0 right-0 z-50"
    >
      <div className="mx-auto w-[90vw] md:w-[95vw] flex items-center justify-between h-16 md:h-20 px-0 md:px-10 gap-6">
        {isInternal(homeHref) ? (
          <Link href={homeHref} className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Jakubasek"
              width={520}
              height={210}
              priority
              className="h-9 md:h-12 w-auto"
            />
          </Link>
        ) : (
          <a href={homeHref} className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="Jakubasek"
              width={520}
              height={210}
              priority
              className="h-9 md:h-12 w-auto"
            />
          </a>
        )}

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks
            .filter((l) => !l.href.endsWith("#kontakt"))
            .map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="group text-black hover:text-primary text-xs font-bold tracking-[0.2em] uppercase transition-colors"
              >
                <span className="hover-split-text">
                  <span
                    className="hover-split-text-inner"
                    data-text={l.label}
                  >
                    {l.label}
                  </span>
                </span>
              </a>
            ))}
        </nav>

        <a
          href="tel:+421948300988"
          className="group inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-5 py-2.5 md:px-6 md:py-3 text-xs md:text-sm font-black tracking-[0.15em] uppercase transition-colors shrink-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4"
            aria-hidden="true"
          >
            <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a13.535 13.535 0 0 1-6.213-6.213l1.293-.97a1.125 1.125 0 0 0 .417-1.173L8.473 3.102A1.125 1.125 0 0 0 7.382 2.25H6.01a2.25 2.25 0 0 0-2.25 2.25z" />
          </svg>
          <span className="hover-split-text">
            <span className="hover-split-text-inner" data-text="Zavolať">
              +421 948 300 988
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}
