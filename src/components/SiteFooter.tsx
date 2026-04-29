import ContactForm from "@/components/ContactForm";
import FooterLinks from "@/components/FooterLinks";

type Props = { id?: string };

export default function SiteFooter({ id = "kontakt" }: Props) {
  return (
    <footer
      id={id}
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

      <div className="relative z-10 mx-auto w-[90vw] md:w-[95vw] px-0 md:px-10 pb-20 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="reveal-on-scroll">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-20 italic">
              Kontakt
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="text-white/20 text-[10px] font-bold tracking-widest uppercase mb-4">
                  Meno a adresa
                </p>
                <p className="text-2xl font-black mb-1">Jaroslav Jakubašek</p>
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

          <div
            className="flex flex-col reveal-on-scroll"
            style={{ transitionDelay: "150ms" }}
          >
            <div className="bg-white/5 border border-white/10 p-10 md:p-16 backdrop-blur-3xl h-full flex flex-col justify-center">
              <h3 className="text-2xl font-black uppercase mb-10 italic">
                Napíšte nám
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>

        <div className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-white/40 tracking-widest uppercase">
          <FooterLinks />
          <p>© {new Date().getFullYear()} Jakubasek · Všetky práva vyhradené</p>
        </div>
      </div>
    </footer>
  );
}
