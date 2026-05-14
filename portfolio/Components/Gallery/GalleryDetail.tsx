import { ProjectProps } from "@/interfaces";
import Image from "next/image";
import React from "react";

interface ProjectDetailProps {
  project: ProjectProps;
}

const GalleryDetail: React.FC<ProjectDetailProps> = ({ project }) => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      {/* Header */}
      <div className="mb-12">

        <p className="uppercase tracking-[0.25em] text-xs text-(--color-accent) mb-3">
          Case Study
        </p>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          {project.title}
        </h1>

        <p className="text-white/70 mt-4 text-lg">
          {project.category}
        </p>
      </div>

      {/* Media */}
      <div className="mb-16">

        {Array.isArray(project.media) ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {project.media.map((src, index) => (
              <div
                key={index}
                className="
                  overflow-hidden rounded-2xl
                  border border-white/10
                  shadow-xl
                  bg-white/5
                  backdrop-blur-sm
                "
              >
                <Image
                  src={src}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="
                    w-full object-cover
                    transition duration-500
                    hover:scale-105
                  "
                />
              </div>
            ))}

          </div>
        ) : project.mediaType === "video" ? (

          <video
            src={project.media}
            controls
            className="
              rounded-2xl w-full
              border border-white/10
              shadow-xl
            "
          />

        ) : (

          <div
            className="
              overflow-hidden rounded-2xl
              border border-white/10
              shadow-xl
              bg-white/5
              backdrop-blur-sm
            "
          >
            <Image
              src={project.media}
              alt={project.title}
              width={900}
              height={600}
              className="
                w-full object-cover
                transition duration-500
                hover:scale-105
              "
            />
          </div>

        )}
      </div>

      {/* Challenge */}
      <section className="mb-12">

        <p className="uppercase tracking-[0.25em] text-xs text-(--color-accent) mb-2">
          Challenge
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4">
          The Challenge
        </h2>

        <p className="text-white/75 leading-relaxed">
          {project.challenge}
        </p>
      </section>

      {/* Solution */}
      <section className="mb-12">

        <p className="uppercase tracking-[0.25em] text-xs text-(--color-accent) mb-2">
          Solution
        </p>

        <h2 className="text-2xl font-semibold text-white mb-4">
          The Solution
        </h2>

        <p className="text-white/75 leading-relaxed">
          {project.solution}
        </p>
      </section>

      {/* Services */}
      <section>

        <p className="uppercase tracking-[0.25em] text-xs text-(--color-accent) mb-2">
          Services
        </p>

        <h2 className="text-2xl font-semibold text-white mb-6">
          Services Provided
        </h2>

        <ul className="flex flex-wrap gap-3">

          {project.services.map((service, index) => (
            <li
              key={index}
              className="
                px-4 py-2 rounded-full
                text-sm
                bg-white/10
                text-white
                border border-white/10
                backdrop-blur-sm
                hover:border-(--color-accent)/40
                hover:bg-white/15
                transition
              "
            >
              {service}
            </li>
          ))}

        </ul>
      </section>

    </div>
  );
};

export default GalleryDetail;