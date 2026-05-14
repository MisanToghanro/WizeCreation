const services = [
  "DISCOVERY",
  "STRATEGY",
  "DESIGN",
  "DELIVERY",
];

const ServicesGrid = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-4 gap-x-10 gap-y-14">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                pt-6 border-t border-(--color-accent)
                flex flex-col gap-3
                group cursor-pointer
                transition duration-300
                hover:-translate-y-1
              "
            >
              <h3 className="text-white text-lg font-semibold tracking-[0.2em] uppercase group-hover:text-(--color-accent)">
                {service}
              </h3>
            </div>
          ))}
        </div>

        {/* Mobile scroll version */}
        <div className="flex md:hidden gap-6 overflow-x-auto scrollbar-hide">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                min-w-40
                pt-6 border-t border-(--color-accent)
                flex flex-col gap-3
              "
            >
              <h3 className="text-white text-sm font-semibold tracking-[0.2em] uppercase">
                {service}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServicesGrid;

