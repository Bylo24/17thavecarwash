const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#111827] text-white">
      <div className="section-container py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <p className="font-display text-2xl text-white leading-none mb-5">17th Ave Car and Dog Wash</p>
            <p className="text-sm text-white/70 leading-relaxed max-w-sm">
              17th Ave Car and Dog Wash. A self service car and pet wash facility located right off of 17th Avenue.
            </p>
          </div>
          <div className="md:col-span-3 md:col-start-7">
            <div className="space-y-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "Car Wash", href: "#services" },
                { label: "Pet Wash", href: "#details" },
                { label: "Detailing", href: "#work" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-sm text-white/70 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 md:col-start-10">
            <div className="space-y-2.5 text-sm text-white/70">
              <p className="text-xs leading-relaxed pt-2">
                Off 17th Avenue<br />Calgary
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-white/55">
          <span>Copyright 17th Ave Car and Dog Wash. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
