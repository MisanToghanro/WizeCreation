const tools = [
  {
    name: "Canva",
    logo: "https://assets.emailinspire.com/brands/2zmxtnhatot.jpg",
  },
  {
    name: "Affinity Designer",
    logo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKoIJ2gf7xmavvA2DbEhRszvTINRH5ou9DQ&s",
  },
];

const ToolsSection = () => {
  return (
    <div className="max-w-5xl mx-auto mt-20 flex flex-col items-center">

     <div className="text-center mb-8">

  <p className="uppercase tracking-[0.25em] text-xs text-(--color-accent) mb-2">
    Studio Tools
  </p>
  

  <h3 className="text-3xl font-semibold text-(--color-aqua)">
    Tools I Use
  </h3>

</div>

      <div className="flex gap-8 justify-center flex-wrap">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="
              flex flex-col items-center
              bg-white
              border border-(--color-aqua)/20
              rounded-xl
              p-5
              shadow-sm
              transition duration-300
              hover:shadow-lg
              hover:border-(--color-accent)/40
              hover:scale-105
            "
          >
            <img
              src={tool.logo}
              alt={tool.name}
              className="w-20 h-20 object-contain mb-3"
            />

            <p className="text-(--color-primary) font-medium">
              {tool.name}
            </p>
          </div>
        ))}
      </div>

      <p className="text-center mt-6 text-(--color-primary)/70 max-w-xl">
        Expertly using Canva and Affinity Designer to craft clean, impactful, and professional designs.
      </p>
    </div>
  );
};

export default ToolsSection;
