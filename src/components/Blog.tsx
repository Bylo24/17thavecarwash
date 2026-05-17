const galleryImages = [
  {
    src: "https://17avecarwash.wordpress.com/wp-content/uploads/2019/06/detailing2.jpg",
    alt: "Vehicle detailing service area",
  },
  {
    src: "https://17avecarwash.wordpress.com/wp-content/uploads/2019/05/img_1380-2.jpg",
    alt: "Self service dog washing station",
  },
  {
    src: "https://17avecarwash.wordpress.com/wp-content/uploads/2019/05/img_1359.jpg",
    alt: "Clean self service car wash bay",
  },
];

const Blog = () => {
  return (
    <section id="work" className="section-spacing bg-card">
      <div className="section-container">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12 items-start">
          <div className="max-w-xl lg:pt-8 xl:pt-10">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] text-balance">
              See the facility
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:justify-self-end w-full lg:max-w-[500px]">
            {galleryImages.map((image) => (
              <div
                key={image.src}
                className="overflow-hidden rounded-sm bg-background border border-border shadow-[0_25px_80px_rgba(0,0,0,0.08)] aspect-[4/3]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
