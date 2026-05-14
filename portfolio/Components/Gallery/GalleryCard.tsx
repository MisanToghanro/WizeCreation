import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "@/interfaces";
import { PlayCircle } from "lucide-react";
import React from "react";

interface GalleryCardProps {
  project: ProjectProps;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ project }) => {
  return (
    <Link
      href={`/Gallerydetails/${project.id}`}
      className="
        group block rounded-xl overflow-hidden
        bg-white
        border border-(--color-aqua)/10
        shadow-sm
        transition duration-300
        hover:shadow-lg
        hover:border-(--color-accent)/30
        hover:-translate-y-1
      "
    >
      {/* Media */}
      <div className="relative aspect-4/5 overflow-hidden bg-gray-100">

        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {project.mediaType === "video" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <PlayCircle className="w-10 h-10 text-white opacity-90" />
          </div>
        )}

      </div>

      {/* Text */}
      <div className="p-4 space-y-1">
        <h3 className="text-sm font-semibold text-(--color-primary) group-hover:text-(--color-accent) transition">
          {project.title}
        </h3>

        <p className="text-xs text-(--color-primary)/70">
          {project.category}
        </p>
      </div>

    </Link>
  );
};

export default GalleryCard;