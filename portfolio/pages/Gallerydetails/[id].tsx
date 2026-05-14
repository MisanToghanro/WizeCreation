import { useRouter } from "next/router";
import projects from "../../data/projects";
import GalleryDetail from "@/Components/Gallery/GalleryDetail";
import Link from "next/link";

const GalleryDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  if (!project) {
    return <p className="text-center mt-20">Project not found</p>;
  }

  return (
  <div className="min-h-screen">
<Link
  href="/Projects"
  className="
    inline-flex items-center gap-2
    mt-8 ml-6 md:ml-10 
    text-(--color-aqua)/70
    hover:text-(--color-accent)
    transition duration-300
    group
  "
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
    />
  </svg>

  <span className="uppercase tracking-[0.15em] text-md font-medium">
    Back to Gallery
  </span>
</Link>

<GalleryDetail project={project} />;
  </div>
  )

  
};

export default GalleryDetailPage;
