import { useEffect, useState } from "react";
import GalleryCard from "@/Components/Gallery/GalleryCard";
import { ProjectProps } from "@/interfaces";
import Link from "next/link";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <main className="min-h-screen px-6 py-16 bg-white text-(--color-primary)">

      {/* PROCESS SECTION */}
      <div className="max-w-7xl mx-auto mt-10">

        <div className="mb-10">
          <p className="uppercase tracking-[0.25em] text-xs text-(--color-accent) mb-2">
            Workflow
          </p>

          <h3 className="text-3xl font-semibold text-(--color-primary)">
            My Design Process
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              step: "01",
              title: "Discovery",
              text: "Understanding your brand, goals, and audience.",
            },
            {
              step: "02",
              title: "Concept",
              text: "Exploring ideas and visual direction.",
            },
            {
              step: "03",
              title: "Design",
              text: "Crafting visuals with clarity and purpose.",
            },
            {
              step: "04",
              title: "Delivery",
              text: "Final assets ready for real-world use.",
            },
          ].map((item) => (
            <div
              key={item.step}
              className="
                p-6 rounded-xl
                bg-white
                border border-(--color-aqua)/20
                shadow-sm
                transition
                hover:shadow-lg
                hover:border-(--color-accent)/40
                hover:-translate-y-1
              "
            >
              <span className="text-(--color-accent) font-semibold">
                {item.step}
              </span>

              <h4 className="text-xl font-semibold mt-2">
                {item.title}
              </h4>

              <p className="text-sm text-(--color-primary)/70 mt-2">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* GALLERY SECTION */}
      <div className="max-w-7xl mx-auto mt-24 px-4">

        <div className="mb-10">
          <p className="uppercase tracking-[0.25em] text-xs text-(--color-accent) mb-2">
            Selected Works
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-(--color-primary)">
            Gallery
          </h2>

          <p className="text-(--color-primary)/70 mt-3 max-w-2xl">
            A curated selection of branding, social media, and visual identity projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project) => (
            <GalleryCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-28 text-center px-6">

        <p className="uppercase tracking-[0.25em] text-sm text-(--color-accent) mb-3">
          Let’s Work Together
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Ready to build a strong visual identity?
        </h3>

        <p className="text-(--color-primary)/70 mb-6">
          Let’s collaborate and bring your ideas to life.
        </p>

        <Link
          href="/Contact"
          className="
            inline-block
            bg-(--color-primary)
            text-white px-8 py-3 rounded-lg
            hover:bg-(--color-aqua)
            transition
          "
        >
          Contact Me
        </Link>

      </div>

    </main>
  );
};

export default Projects;