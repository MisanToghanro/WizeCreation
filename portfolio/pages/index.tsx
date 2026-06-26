import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";

import ServicesGrid from "@/Components/ServicesCarousel";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col justify-center p-8 ">
      
      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center  mx-auto gap-12">
        
        {/* Left Column: Text & CTAs */}
        <div className="flex-1 space-y-6">
          <h3 className=" text-(--color-accent) font-medium text-xl">Hello there,</h3>
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Welcome to WizeCreation
          </h1>
          <p className="text-white text-lg md:text-xl">
            I’m a graphic designer and visual identity specialist creating meaningful brand experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Link href="/About">
              <button className="bg-(--color-aqua) text-white px-6 py-3 rounded-md hover:bg-(--color-primary) hover:text-(--color-accent) transition cursor-pointer">
                More about me
              </button>
            </Link>
            <Link href="/Contact">
              <button className="border border-(--color-accent) text-[white] px-6 py-3 rounded-md hover:bg-(--color-aqua) hover:text-(--color-primary) transition cursor-pointer">
                Got a project? Let’s talk.
              </button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-4 text-2xl text-[white]">
            <a
              href="https://wa.me/message/QLW72SGNP75VL1"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-accent) transition hover:-translate-y-1"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://www.instagram.com/wizzys_graphics"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-accent) transition hover:-translate-y-1"
            >
              <FaInstagram />
            </a>
              <a
              href="Contact"
              rel="noopener noreferrer"
              className="hover:text-(--color-accent) transition hover:-translate-y-1"
            >
              <FaEnvelope />
            </a>
              <a
                href="https://www.facebook.com/Wizecreation"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  hover:text-(--color-accent)
                  hover:-translate-y-1
                  transition duration-300
                "
              >
                <FaFacebookF />
              </a>
          </div>
        </div>

        {/* Right Column: Profile / Hero Image */}
               {/* Image */}
      
               <div className="flex-1 relative">
                 <div className="absolute -top-4 -left-4 w-full h-full bg-blue-900 rounded-xl opacity-10"></div>
                 
                 <Image
                   src="/assets/profile1.jpeg"
                   alt="Wizzy's Profile"
                   width={420}
                   height={420}
                   priority
                   className="relative rounded-xl object-cover shadow-xl"
                 />
               </div>
           
             
      </div>

      <ServicesGrid/>


    </main>
  );
};

export default Home;

