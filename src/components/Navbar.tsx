import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Car Wash", href: "#services" },
  { label: "Pet Wash", href: "#details" },
  { label: "Detailing", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/40 shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="section-container flex items-center justify-between h-16 sm:h-16 md:h-20">
        <a href="#home" className="flex items-center">
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg md:text-xl text-foreground">
              17th Ave
            </span>
            <span className="text-xs md:text-sm text-muted-foreground">
              Car and Dog Wash
            </span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-sm text-accent border border-accent px-5 py-2.5 rounded-sm transition-all duration-200 hover:border-secondary hover:text-secondary"
          >
            Find Us
          </a>
        </div>

        <button
          className="md:hidden text-foreground p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-4 pb-5 pt-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block py-3.5 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center text-sm text-accent border border-accent px-5 py-3.5 rounded-sm"
          >
            Find Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
