import Image from "next/image";
import SiteChrome from "@/components/SiteChrome";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Gallery from "@/components/Gallery";

const services = [
  {
    n: "01",
    title: "Štrk a Kamenivo",
    text: "Zabezpečujeme prepravu a dovoz štrkov, pieskov, kameniva a okrasného kameniva. Neváhajte nás kontaktovať.",
    image: "/service1.webp",
  },
  {
    n: "02",
    title: "Betónové potery",
    text: "Rovný poter Vám ušetrí ďalšie peniaze. Zabezpečujeme potery na tej najlepšej úrovni. Neváhajte nás kontaktovať.",
    image: "/service2.webp",
  },
  {
    n: "03",
    title: "Pancierové podlahy",
    text: "Sú vysokopevnostné liaté, leštené betónové povrchy v hrúbke 12–15 cm. Vhodné do garáží, dielní a hál.",
    image: "/service3.webp",
  },
  {
    n: "04",
    title: "Špedícia & Logistika",
    text: "Vnútroštátna a medzinárodná preprava sypkých materiálov. Prepravu ponúkame s 25t vyklopnými návesmi.",
    image: "/referencie/fb-3.jpg",
  },
  {
    n: "05",
    title: "Strojové omietky",
    text: "Zabezpečujeme realizáciu stabilných a profesionálnych strojových omietok, ktoré vyrovnajú každú nerovnosť.",
    image: "/service2.webp",
  },
  {
    n: "06",
    title: "Liaty Polystyrén",
    text: "Ľahký liaty polystyrénbetón pre tepelnú izoláciu a vyrovnávacie vrstvy pod potery. Rýchla aplikácia, vynikajúce izolačné vlastnosti.",
    image: "/liaty.jpg",
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
      <SiteHeader navLinks={navLinks} homeHref="#top" />

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
                src="/referencie/fb-3.jpg"
                alt="Štrk a kamenivo Jakubasek"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/30 to-secondary/10" />

          <div className="relative z-10 w-[90vw] md:w-[95vw] mx-auto px-0 md:px-10">
            <div className="max-w-5xl">
              <p className="fade-up text-primary text-sm font-black tracking-[0.4em] uppercase mb-8">
                Kamenivo · Potery · Profesionálne omietky
              </p>
              <h1 className="fade-up fade-up-1 text-5xl sm:text-6xl md:text-10xl lg:text-11xl font-black text-white leading-[0.85] tracking-tighter uppercase italic font-heading">
                Staviame na <br />
                <span className="fill-text-animation inline-block pr-[0.15em]">
                  Kvalite
                </span>
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
            <div className="mx-auto w-[90vw] md:w-[95vw] px-0 md:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="reveal-on-scroll">
                  <p className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-6">
                    O nás
                  </p>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-secondary tracking-tighter uppercase italic mb-8">
                    Od roku 2003                  </h2>
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
                  <div className="image-reveal-wrapper aspect-[4/3] lg:aspect-[5/4] shadow-2xl relative">
                    <div className="image-reveal-shutter" />
                    <Image
                      src="/referencie/fb-3.jpg"
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

            <div className="relative z-10 mx-auto w-[90vw] md:w-[95vw] px-0 md:px-10">
              <div className="reveal-on-scroll mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                  <p className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-6">
                    Naše služby
                  </p>
                  <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic">
                    Čo ponúkame                  </h2>
                </div>
                <p className="text-white/60 font-light max-w-md">
                  Od predaja štrku, cez realizáciu kvalitných poterov, až po
                  unikátne gabiónové ploty.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((s, i) => (
                  <div
                    key={s.n + i}
                    className="reveal-on-scroll relative min-h-[420px] flex flex-col justify-end p-10 overflow-hidden group border border-white/10 hover:border-primary/60 transition-colors"
                    style={{ transitionDelay: `${(i % 3) * 100}ms` }}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="absolute inset-0 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/80 to-secondary/30 group-hover:from-secondary group-hover:via-secondary/70 group-hover:to-secondary/20 transition-colors" />
                    <div className="relative z-10">
                      <span className="text-primary text-[10px] font-black tracking-widest uppercase mb-4 block">
                        {s.n}
                      </span>
                      <h3 className="text-3xl font-black text-white uppercase italic mb-6 leading-none tracking-tighter">
                        {s.title}
                      </h3>
                      <p className="text-white/80 font-medium text-sm tracking-wide leading-relaxed">
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
            <div className="mx-auto w-[90vw] md:w-[95vw] px-0 md:px-10">
              <div className="reveal-on-scroll mb-20">
                <h2 className="text-5xl md:text-8xl font-black text-secondary tracking-tighter uppercase italic mb-8">
                  Naša práca                </h2>
              </div>

              <Gallery
                images={[
                  "/referencie/01.jpg",
                  "/referencie/02.jpg",
                  "/referencie/03.jpg",
                  "/referencie/04.jpg",
                  "/referencie/05.jpg",
                  "/referencie/06.jpg",
                  "/referencie/07.jpg",
                  "/referencie/08.jpg",
                  "/referencie/09.jpg",
                  "/referencie/10.jpg",
                  "/referencie/11.jpg",
                  "/referencie/12.jpg",
                  "/referencie/foto-1-1.jpg",
                  "/referencie/foto-2-1.jpg",
                  "/referencie/foto-3-1.jpg",
                  "/referencie/foto-4-1.jpg",
                  "/referencie/gabiony.jpg",
                  "/referencie/fb-1.jpg",
                  "/referencie/fb-2.jpg",
                  "/referencie/fb-3.jpg",
                  "/referencie/fb-4.jpg",
                  "/referencie/fb-5.jpg",
                  "/referencie/fb-6.jpg",
                ]}
              />

              <div className="reveal-on-scroll mb-10">
                <p className="text-xs font-black tracking-[0.3em] uppercase text-primary mb-4">
                  Video galéria
                </p>
                <h3 className="text-3xl md:text-5xl font-black text-secondary tracking-tighter uppercase italic">
                  Pozrite si naše realizácie
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
          <SiteFooter />
        </div>
      </main>
    </>
  );
}
