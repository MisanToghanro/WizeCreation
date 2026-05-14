import ServiceCard from "@/Components/ServiceCard";
import ToolsSection from "@/Components/ToolsCard";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <main className="min-h-screen px-6 py-16 bg-white text-(--color-primary)">

      {/* Hero / Intro */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">

          {/* Text */}
          <div className="flex-1 space-y-5">
            <p className="uppercase tracking-[0.25em] text-xs text-(--color-accent) mb-2">
           Studio Profile
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-(--color-aqua)">
              About Me
            </h2>


            <p className="text-lg md:text-xl text-(--color-primary)/70 leading-relaxed">
              Wizzy's Graphics is a creative studio led by Matthew Wisdom Efe, a Visual Identity Designer based in Warri, Nigeria.
              We specialize in branding, flyers, and logo design, ensuring every pixel finds its purpose.
            </p>

            <p className="text-md md:text-xl text-(--color-primary)/70 leading-relaxed">
              Our goal is to help brands communicate visually with clarity, intention, and emotional impact.
            </p>
          </div>

          {/* Image */}
          <div className="flex-1 relative">
            <div className="absolute -top-4 -left-4 w-full h-full bg-(--color-aqua)/10 rounded-xl"></div>

            <Image
              src="/assets/ProfilePic2.jpeg"
              alt="Wizzy's Profile"
              width={420}
              height={420}
              priority
              className="relative rounded-xl object-cover shadow-xl"
            />
          </div>

        </div>
      </div>

      {/* Services */}
      <ServiceCard />

      {/* Tools */}
      <ToolsSection />

      {/* Closing Section */}
      <div className="mx-auto max-w-3xl text-center mt-16 space-y-6">

        <p className="text-(--color-primary)/70 leading-relaxed">
          Every design is approached with clarity, intention, and attention to detail —
          because strong visuals should speak clearly without saying too much.
        </p>

        <Link href="/Projects">
          <button className="
            bg-(--color-primary)
            text-white px-6 py-3 rounded-md
            hover:bg-(--color-aqua)
            transition cursor-pointer
          ">
            View My Designs
          </button>
        </Link>

      </div>

    </main>
  );
};

export default About;