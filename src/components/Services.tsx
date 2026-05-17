import { Car, CreditCard, Droplets, PawPrint, Ruler, Wind } from "lucide-react";

const services = [
  {
    num: "01",
    icon: Car,
    title: "Self Service Bays",
    description: "There are six extra wide bays that comfortably accommodate large personal vehicles and commercial trucks.",
  },
  {
    num: "02",
    icon: Ruler,
    title: "High Clearance",
    description: "Every bay features an eleven foot clearance height which equals three point two five meters for oversized vehicles.",
  },
  {
    num: "03",
    icon: Droplets,
    title: "Premium Wash Cycles",
    description: "The system includes a pre soak cycle a tire cleaner high pressure soap a foaming brush and high pressure rinse options.",
  },
  {
    num: "04",
    icon: PawPrint,
    title: "Indoor Pet Wash",
    description: "The facility includes a dedicated indoor station featuring the system built specifically for washing dogs safely.",
  },
  {
    num: "05",
    icon: Wind,
    title: "Finishing Options",
    description: "Customers can use the high powered on site vacuums and dedicated blowers to clean vehicle interiors thoroughly.",
  },
  {
    num: "06",
    icon: CreditCard,
    title: "Payment Methods",
    description: "The payment machines accept coins and electronic transactions including both credit cards and debit cards.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance">
              Facility Features and Cleaning Options
            </h2>
          </div>
          <div className="lg:col-span-5 lg:col-start-8 flex items-end">
            <p className="text-muted-foreground leading-relaxed text-base">
              The washing bays provide flexible options for deep vehicle care and maintenance.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.num}
              className="bg-card p-6 sm:p-7 md:p-9 group transition-colors duration-300 hover:bg-background"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs text-muted-foreground font-sans group-hover:text-foreground">{service.num}</span>
                <service.icon size={22} className="text-muted-foreground/40 group-hover:text-foreground transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 leading-none">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
