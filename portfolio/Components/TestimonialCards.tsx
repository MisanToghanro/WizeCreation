interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Wizzy’s Graphics took my vision for a luxury perfume ad and turned it into a masterpiece. The attention to detail and the premium feel of the design perfectly matched my brand's identity.",
    author: "Ebi, CEO of Ebi’s Fragrance",
  },
  {
    quote:
      "I needed a flyer that explained my product clearly while still looking professional. Wizzy delivered exactly what I needed with a clean, vibrant design that our customers love.",
    author: "Manager, Chrysolite Home Care",
  },
  {
    quote:
      "Wizzy’s Graphics provided us with a clean, powerful visual identity that perfectly represents our mission in renewable energy.",
    author: "CEO, Light House Renewable Energy",
  },
  {
    quote:
      "Wizzy designs are top notch graphics design. His work is modern, his animations are smooth, and he actually understands what a brand needs to grow.",
    author: "Churchill, CR Software Engineering (FUPRE)",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full bg-white py-24 px-6 md:px-8">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="uppercase tracking-[0.25em] text-xs text-(--color-accent) mb-3">
            Testimonials
          </p>

          <h2 className="text-(--color-primary) text-4xl font-bold">
            What Clients Say
          </h2>

          <p className="text-(--color-primary)/70 mt-4 max-w-2xl mx-auto">
            Real feedback from brands and businesses I’ve collaborated with.
          </p>

        </div>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="
                rounded-2xl p-8
                bg-linear-to-br
                from-(--color-primary)
                to-(--color-aqua)
                border border-(--color-accent)/30
                shadow-lg
                transition duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
            >

              <p className="text-white leading-relaxed text-sm md:text-base mb-6">
                “{testimonial.quote}”
              </p>

              <div className="w-12 h-px bg-(--color-accent) mb-4"></div>

              <p className="text-(--color-accent) text-sm font-medium tracking-wide">
                {testimonial.author}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;