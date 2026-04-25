import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";

const services = [
  {
    n: "01",
    title: "Štrk a Kamenivo",
    text: "Zabezpečujeme prepravu a dovoz štrkov, pieskov, kameniva a okrasného kameniva. Neváhajte nás kontaktovať.",
  },
  {
    n: "02",
    title: "Betónové potery",
    text: "Rovný poter Vám ušetrí ďalšie peniaze. Zabezpečujeme potery na tej najlepšej úrovni. Neváhajte nás kontaktovať.",
  },
  {
    n: "03",
    title: "Pancierové podlahy",
    text: "Sú vysokopevnostné liaté, leštené betónové povrchy v hrúbke 12–15 cm. Vhodné do garáží, dielní a hál.",
  },
  {
    n: "04",
    title: "Špedícia & Logistika",
    text: "Vnútroštátna a medzinárodná preprava sypkých materiálov. Prepravu ponúkame s 25t vyklopnými návesmi.",
  },
  {
    n: "05",
    title: "Gabiónové ploty",
    text: "Ponúkame realizáciu gabiónových plotov a múrov. Sú vyrobené z pevných sietí a napĺňané prírodným kameňom.",
  },
  {
    n: "06",
    title: "Strojové omietky",
    text: "Zabezpečujeme realizáciu stabilných a profesionálnych strojových omietok, ktoré vyrovnajú každú nerovnosť.",
  },
];

const videos = [
  { id: "-m2FrJ2u0Vc", title: "Realizácia 1" },
  { id: "ZfEOEntV4z8", title: "Realizácia 2" },
  { id: "MCkNeStCbyU", title: "Realizácia 3" },
];

const navLinks = [
  { href: "#top", label: "Úvod" },
  { href: "#onas", label: "O nás" },
  { href: "#sluzby", label: "Naše služby" },
  { href: "#referencie", label: "Referencie" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Home() {
  return (
    <>
      <SiteChrome />

      {/* SITE HEADER */}
      <header
        id="site-header"
        className="site-header fixed top-0 left-0 right-0 z-50 bg-transparent"
      >
        <div className="mx-auto w-[95vw] flex items-center justify-between h-16 md:h-24 px-6 md:px-10 gap-6">
          <a href="#top" className="flex items-center shrink-0">
            <span className="text-xl md:text-3xl font-black tracking-tighter text-white uppercase italic">
              JAKUB<span className="text-primary">ASEK</span>
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks
              .filter((l) => l.href !== "#kontakt")
              .map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group text-white/80 hover:text-white text-xs font-bold tracking-[0.2em] uppercase transition-colors"
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
            <span className="hidden sm:inline">+421 948 300 988</span>
            <span className="sm:hidden">Zavolať</span>
          </a>
        </div>
      </header>

      {/* MAIN */}
      <main>
        {/* HERO */}
        <section
          id="top"
          className="sticky top-0 h-screen w-full flex items-center overflow-hidden z-0"
        >
          <div className="parallax-container absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="parallax-target hero-parallax relative w-full h-full scale-110"
              data-speed="0.1"
            >
              <Image
                src="/hero.webp"
                alt="Štrk a kamenivo Jakubasek"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent" />

          <div className="relative z-10 w-[95vw] mx-auto px-6 md:px-10">
            <div className="max-w-5xl">
              <p className="fade-up text-primary text-sm font-black tracking-[0.4em] uppercase mb-8">
                Kamenivo · Potery · Profesionálne omietky
              </p>
              <h1 className="fade-up fade-up-1 text-7xl md:text-10xl lg:text-11xl font-black text-white leading-[0.85] tracking-tighter uppercase italic font-heading pr-4">
                Staviame na <br />
                <span className="fill-text-animation">Kvalite.</span>
              </h1>
              <p className="fade-up fade-up-2 mt-12 text-lg md:text-2xl text-white/70 font-light max-w-3xl leading-relaxed">
                Zabezpečujeme predaj a dovoz štrku a kameniva, profesionálne
                strojové potery, pancierové podlahy, omietky a gabiónové ploty s
                viac ako dvomi dekádami skúseností na trhu.
              </p>
              <div className="fade-up fade-up-3 mt-16 flex flex-col sm:flex-row gap-6">
                <a
                  href="#kontakt"
                  className="group inline-flex items-center justify-center px-12 py-5 bg-primary text-white text-sm font-black hover:bg-primary-dark transition-all duration-300"
                >
                  <span className="hover-split-text">
                    <span
                      className="hover-split-text-inner"
                      data-text="Kontaktovať nás"
                    >
                      Kontaktovať nás
                    </span>
                  </span>
                </a>
                <a
                  href="#sluzby"
                  className="group inline-flex items-center justify-center px-12 py-5 border-2 border-white/20 text-white text-sm font-bold hover:bg-white/10 transition-all duration-300"
                >
                  <span className="hover-split-text">
                    <span
                      className="hover-split-text-inner"
                      data-text="Naše služby"
                    >
                      Naše služby
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <div className="relative z-10 bg-white">
          {/* ABOUT */}
          <section
            id="onas"
            className="py-28 md:py-36 bg-light relative overflow-hidden text-secondary"
          >
            <div className="mx-auto w-[95vw] px-6 md:px-10 max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center border border-black/5 bg-white p-10 md:p-20 shadow-xl">
                <div className="reveal-on-scroll">
                  <p className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-6">
                    O nás
                  </p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary tracking-tighter uppercase italic mb-8">
                    Od roku 2003<span className="text-primary">.</span>
                  </h2>
                  <div className="space-y-6 text-lg text-secondary/70 font-light leading-relaxed">
                    <p>
                      Na trhu pôsobíme od roku 2003. Sme spoločnosť zaoberajúca
                      sa predajom štrku, kameniva, piesku a okrasného kameňa.
                    </p>
                    <p>
                      Ďalšie naše činnosti, ktoré zabezpečujeme našim klientom,
                      sú strojové betónové potery, polystyrén betón či spádové
                      potery, strojové omietky sadrové a vápenno-cementové.
                    </p>
                    <p>
                      Realizujeme tiež gabiónové ploty a múry. Veríme, že s
                      našou prácou budete spokojní.
                    </p>
                  </div>
                </div>
                <div className="reveal-on-scroll relative">
                  <div className="image-reveal-wrapper aspect-square shadow-lg relative">
                    <div className="image-reveal-shutter" />
                    <Image
                      src="/about.webp"
                      alt="Jaroslav Jakubasek pri práci"
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="image-reveal-img object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SERVICES */}
          <section
            id="sluzby"
            className="py-28 md:py-36 bg-secondary relative overflow-hidden text-white"
          >
            <div className="absolute inset-0 z-0 bg-secondary flex items-center justify-center">
              <div className="absolute inset-0 bg-primary/10" />
            </div>

            <div className="relative z-10 mx-auto w-[95vw] px-6 md:px-10">
              <div className="reveal-on-scroll mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <p className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-6">
                    Naše služby
                  </p>
                  <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
                    Čo ponúkame<span className="text-primary">.</span>
                  </h2>
                </div>
                <p className="text-white/60 font-light max-w-md">
                  Od predaja štrku, cez realizáciu kvalitných poterov, až po
                  unikátne gabiónové ploty.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s, i) => (
                  <div
                    key={s.n}
                    className="reveal-on-scroll relative min-h-[400px] flex flex-col justify-end p-10 overflow-hidden group bg-white/5 border border-white/10 hover:border-primary/50 transition-colors"
                    style={{ transitionDelay: `${(i % 3) * 100}ms` }}
                  >
                    <div className="relative z-10">
                      <span className="text-primary text-[10px] font-black tracking-widest uppercase mb-4 block">
                        {s.n}
                      </span>
                      <h3 className="text-3xl font-black text-white uppercase italic mb-6 leading-none tracking-tighter">
                        {s.title}
                      </h3>
                      <p className="text-white/70 font-medium text-sm tracking-wide leading-relaxed">
                        {s.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WORK / REFERENCIE */}
          <section
            id="referencie"
            className="py-28 md:py-36 bg-white overflow-hidden text-secondary"
          >
            <div className="mx-auto w-[95vw] px-6 md:px-10">
              <div className="reveal-on-scroll mb-20">
                <h2 className="text-5xl md:text-8xl font-black text-secondary tracking-tighter uppercase italic mb-8">
                  Naša práca<span className="text-primary">.</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                {[
                  { src: "/service1.webp", offset: "" },
                  { src: "/service2.webp", offset: "md:mt-12" },
                  { src: "/service3.webp", offset: "md:mt-24" },
                ].map((img, i) => (
                  <div
                    key={img.src}
                    className={`reveal-on-scroll image-reveal-wrapper aspect-[4/3] shadow-lg group relative ${img.offset}`}
                    style={{ transitionDelay: `${i * 150}ms` }}
                  >
                    <div className="image-reveal-shutter" />
                    <Image
                      src={img.src}
                      alt={`Naša práca ${i + 1}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="image-reveal-img object-cover"
                    />
                  </div>
                ))}
              </div>

              <div className="reveal-on-scroll mb-10">
                <p className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-4">
                  Video galéria
                </p>
                <h3 className="text-3xl md:text-5xl font-black text-secondary tracking-tighter uppercase italic">
                  Pozrite si naše realizácie
                  <span className="text-primary">.</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {videos.map((v) => (
                  <div
                    key={v.id}
                    className="reveal-on-scroll aspect-video bg-secondary shadow-lg overflow-hidden"
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}`}
                      title={v.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CONTACT / FOOTER */}
          <footer
            id="kontakt"
            className="bg-secondary text-white pt-28 md:pt-40 relative overflow-hidden"
          >
            <div
              className="absolute inset-0 z-0 pointer-events-none opacity-20"
              style={{
                backgroundImage: "url('/texture.svg')",
                backgroundSize: "cover",
                filter: "invert(1)",
              }}
            />

            <div className="relative z-10 mx-auto w-[95vw] px-6 md:px-10 pb-20 md:pb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                  <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-20 italic">
                    Kontakt<span className="text-primary">.</span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                      <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase mb-4">
                        Meno a adresa
                      </p>
                      <p className="text-2xl font-black mb-1">
                        Jaroslav Jakubašek
                      </p>
                      <p className="text-white/60 font-light mt-4">
                        Rovná 8, Dlhá Lúka
                      </p>
                      <p className="text-white/60 font-light leading-relaxed">
                        085 01 Bardejov
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase mb-4">
                        Kontakt na nás
                      </p>
                      <a
                        href="tel:+421948300988"
                        className="text-2xl font-light hover:text-primary transition-colors"
                      >
                        +421 948 300 988
                      </a>
                      <a
                        href="mailto:jaroslavjakubasek@gmail.com"
                        className="text-lg font-light block hover:text-primary transition-colors opacity-60 italic mt-2"
                      >
                        jaroslavjakubasek@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="bg-white/5 border border-white/10 p-10 md:p-16 backdrop-blur-3xl h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-black uppercase mb-10 italic">
                      Napíšte nám
                    </h3>
                    <form
                      className="flex flex-col gap-6 w-full"
                      action="mailto:jaroslavjakubasek@gmail.com"
                      method="post"
                      encType="text/plain"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                          type="text"
                          name="meno"
                          placeholder="Meno *"
                          required
                          className="bg-transparent border-b border-white/20 px-0 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="E-mail *"
                          required
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
                      <div className="mt-4">
                        <button
                          type="submit"
                          className="group inline-flex items-center justify-center px-10 py-4 bg-primary text-white text-sm font-black hover:bg-primary-dark transition-all duration-300"
                        >
                          <span className="hover-split-text">
                            <span
                              className="hover-split-text-inner"
                              data-text="Poslať"
                            >
                              Poslať
                            </span>
                          </span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-white/40 tracking-widest uppercase">
                <div className="flex gap-6">
                  <a
                    href="#onas"
                    className="hover:text-primary transition-colors"
                  >
                    O nás
                  </a>
                  <a
                    href="#sluzby"
                    className="hover:text-primary transition-colors"
                  >
                    Naše služby
                  </a>
                  <a
                    href="#referencie"
                    className="hover:text-primary transition-colors"
                  >
                    Referencie
                  </a>
                </div>
                <p>© Jakubasek | Všetky práva vyhradené</p>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
