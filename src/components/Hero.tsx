const heroImage =
  "https://lh3.googleusercontent.com/p/AF1QipNTX_7k9itZmVaRjHhCuJbk9wdaW5XMKRvsIlCa=s1360-w1360-h1020";

const Hero = () => {
  return (
    <section id="home" className="relative isolate min-h-[76svh] lg:min-h-[72svh] flex items-end pt-24 sm:pt-28 md:pt-32 lg:pt-28 pb-14 md:pb-16 overflow-hidden bg-[#111827]">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroImage}
          alt="Covered self service car wash bays"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/75 to-white/35" />
        <div className="absolute inset-0 bg-white/15" />
      </div>

      <div className="section-container w-full relative z-10">
        <div className="max-w-4xl">
          <h1 className="reveal-up delay-100 mt-3 sm:mt-4 lg:mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-[5.75rem] leading-[0.96] text-foreground mb-5 text-balance max-w-4xl">
            Vehicle and Pet Wash on 17th Avenue.
          </h1>
          <p className="reveal-up delay-200 text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed max-w-2xl mb-6 sm:mb-8">
            The facility features a well lit barn style layout with six spacious self service bays and a dedicated indoor dog wash station.
          </p>
          <div className="reveal-up delay-300 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
            <a
              href="#services"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 bg-accent text-accent-foreground px-8 py-4 text-sm rounded-sm transition-all duration-200 hover:bg-secondary"
            >
              View Pricing
            </a>
            <a
              href="#contact"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-accent text-accent px-8 py-4 text-sm rounded-sm transition-all duration-200 hover:border-secondary hover:text-secondary"
            >
              Contact Team
            </a>
          </div>
        </div>

        <div className="reveal-up delay-500 mt-10 sm:mt-12 md:mt-14 pt-5 border-t border-foreground/20 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-10 text-[10px] sm:text-xs text-foreground">
          <span>Six Self Service Bays</span>
          <span>Indoor Pet Wash</span>
          <span>Vehicle Detailing</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
