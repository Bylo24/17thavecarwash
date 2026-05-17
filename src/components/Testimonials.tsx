import { useEffect, useState } from "react";
import { Quote, Star } from "lucide-react";

const reviews = [
  {
    name: "Lorne W",
    subtext: "Verified Customer",
    quote: "The location is clean and the timing is fair for the money spent. The staff members are polite and helpful during visits.",
  },
  {
    name: "Bianca D",
    subtext: "Local Guide",
    quote: "The facility is well maintained and the bays are spacious. The credit card machines make payment very simple.",
  },
  {
    name: "S Chun",
    subtext: "Regular Visitor",
    quote: "The indoor dog washing station is excellent. It provides everything needed to wash and blow dry a dog safely.",
  },
  {
    name: "Ash N",
    subtext: "Verified Customer",
    quote: "The bays are always kept clean and free of mud from previous vehicles. The lighting inside the building is very bright.",
  },
  {
    name: "Abdullah A",
    subtext: "Commercial Driver",
    quote: "The facility is spacious and well looked after by the team. Having a high clearance area is helpful for larger trucks.",
  },
  {
    name: "Oussama C",
    subtext: "Local Resident",
    quote: "The staff keeps the bays tidy and sanitized frequently. It is a reliable spot for a quick rinse or a full interior clean.",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section id="reviews" className="section-spacing bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-12 gap-8 mb-10 md:mb-14 items-end">
          <div className="lg:col-span-7">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance">
              See What Customers Say
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
              Customer feedback reflects regular use of the wash bays, payment machines, vacuums, and indoor dog wash.
            </p>
          </div>
        </div>

        <div className="md:hidden">
          <div className="relative min-h-[260px] overflow-hidden">
            {reviews.map((review, index) => {
              const isActive = index === activeIndex;

              return (
                <article
                  key={review.name}
                  className={[
                    "absolute inset-0 rounded-2xl border border-border bg-card p-6 sm:p-7 transition-all duration-700 ease-out",
                    isActive ? "opacity-100 translate-x-0" : "pointer-events-none opacity-0 translate-x-3",
                  ].join(" ")}
                  aria-hidden={!isActive}
                >
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <div className="flex items-center gap-1 text-accent">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star key={starIndex} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                    <Quote size={22} className="text-muted-foreground/20 shrink-0" strokeWidth={1.5} />
                  </div>

                  <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                    {review.quote}
                  </p>

                  <div className="mt-6 pt-5 border-t border-border">
                    <p className="text-xs font-sans text-muted-foreground">
                      {review.name}
                    </p>
                    <p className="mt-2 text-xs text-muted-foreground">{review.subtext}</p>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={[
                  "h-2 rounded-full transition-all duration-300",
                  index === activeIndex ? "w-6 bg-foreground" : "w-2 bg-border",
                ].join(" ")}
                aria-label={`Show review from ${review.name}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {reviews.map((review) => {
            return (
              <article
                key={review.name}
                className="relative overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-7 transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-between gap-4 mb-5">
                  <div className="flex items-center gap-1 text-accent">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star key={starIndex} size={14} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <Quote size={22} className="text-muted-foreground/20 shrink-0" strokeWidth={1.5} />
                </div>

                <p className="text-sm sm:text-base leading-relaxed text-foreground/90">
                  {review.quote}
                </p>

                <div className="mt-6 pt-5 border-t border-border">
                  <p className="text-xs font-sans text-muted-foreground">
                    {review.name}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">{review.subtext}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
