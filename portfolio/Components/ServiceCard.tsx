const ServiceCard = () => {
  const services = [
    {
      title: "Visual Identity Design",
      description:
        "Building complete brand systems that communicate clarity, consistency, and purpose across all platforms.",
    },
    {
      title: "Logo Design",
      description:
        "Strategic logo design developed through research, ideation, and thoughtful execution.",
    },
    {
      title: "Brand Strategy & Concept Development",
      description:
        "Defining brand direction, positioning, and visual concepts before design execution.",
    },
    {
      title: "Brand Guidelines",
      description:
        "Creating clear brand manuals to ensure consistency across digital and print media.",
    },
    {
      title: "Marketing & Promotional Design",
      description:
        "Designing flyers, posters, banners, and advertising visuals that support brand goals.",
    },
    {
      title: "Social Media Design",
      description:
        "Branded social media graphics for consistent online presence.",
    },
    {
      title: "Print Design",
      description:
        "Business cards, brochures, and professional print materials.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-20">
     <div className="text-center md:text-left mb-6">

  <p className="uppercase tracking-[0.25em] text-xs text-(--color-accent) mb-2">
    Services
  </p>

  <h3 className="text-3xl font-semibold text-(--color-aqua)">
    What I Can Do
  </h3>

</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="
              p-6 rounded-xl
              bg-linear-to-br
    from-(--color-primary)
    to-(--color-aqua)
              border border-(--color-accent)/60
              shadow-sm
              transition duration-300
              hover:shadow-lg
              hover:border-(--color-accent)/20
              hover:translate-y-1
              cursor-pointer
            "
          >
            <h4 className="text-xl font-semibold text-(--color-accent) mb-2">
              {service.title}
            </h4>

            <p className="text-sm text-white leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
