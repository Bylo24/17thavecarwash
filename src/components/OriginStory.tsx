const OriginStory = () => {
  return (
    <section id="details" className="section-spacing">
      <div className="section-container">
        <div className="bg-card border border-border p-7 sm:p-10 md:p-14">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1] mb-8 text-balance">
            Operational pricing and details
          </h2>
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 text-muted-foreground leading-[1.75] text-sm sm:text-base">
            <p>
              The standard self service car wash requires a two dollar startup charge which provides two minutes and forty seconds of operation time. Additional time can be added at a rate of one dollar for every eighty seconds.
            </p>
            <p>
              The pet wash station is located inside the main office adjacent to the vehicle bays. The self service dog wash is priced at ten dollars for ten minutes of total use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OriginStory;
