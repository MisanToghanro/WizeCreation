import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import Testimonials from "@/Components/TestimonialCards";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen">

      {/* Testimonials */}
      <Testimonials />

      {/* Contact Section */}
      <div className="w-full max-w-4xl mx-auto text-center px-6 py-24">
{/* Heading */}
<div className="mb-16 flex flex-col items-center text-center">

  <p className="uppercase tracking-[0.25em] text-xs text-(--color-accent) mb-3">
    Contact
  </p>

  <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
    Get in Touch
  </h1>

  {/* Featured Image */}
  <div className="relative mb-8 group">

    {/* Glow */}
    <div className="
      absolute -inset-2
      rounded-2xl
      bg-linear-to-br
      from-(--color-primary)
      to-(--color-aqua)
      blur-xl
      opacity-30
      group-hover:opacity-50
      transition
    " />

    <Image
      src="/assets/wizecreationset.jpeg"
      alt="WizeCreation Brand Preview"
      width={460}
      height={460}
      priority
      className="
        relative
        rounded-2xl
        object-cover
        border border-white/10
        shadow-2xl
        transition duration-500
        group-hover:scale-[1.02]
      "
    />
    <p className="mt-4 text-sm uppercase tracking-[0.2em] text-(--color-accent)">
  WizeCreation Brand Identity
</p>

  </div>

  <p className="max-w-2xl text-white/80 text-lg leading-relaxed">
    Have a project in mind or looking to elevate your brand?
    Let's create something memorable together.
  </p>

  <p className="text-white/80 text-md">Reach out through any of the platforms below.</p>

</div>

        {/* Contact Buttons */}
        <div className="flex flex-col md:flex-row justify-center gap-5">

          <a
            href="https://wa.me/message/QLW72SGNP75VL1"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-3
              px-8 py-4 rounded-xl
              bg-white/10
              backdrop-blur-md
              border border-white/10
              text-white
              font-medium
              transition duration-300
              hover:bg-white/20
              hover:border-(--color-accent)/40
              hover:-translate-y-1
            "
          >
            <FaWhatsapp className="w-5 h-5" />
            WhatsApp
          </a>

          <a
            href="https://www.instagram.com/wizzys_graphics"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-3
              px-8 py-4 rounded-xl
              bg-white/10
              backdrop-blur-md
              border border-white/10
              text-white
              font-medium
              transition duration-300
              hover:bg-white/20
              hover:border-(--color-accent)/40
              hover:-translate-y-1
            "
          >
            <FaInstagram className="w-5 h-5" />
            Instagram
          </a>

          <a
            href="mailto:wizecreation101@gmail.com"
            className="
              flex items-center justify-center gap-3
              px-8 py-4 rounded-xl
              bg-white/10
              backdrop-blur-md
              border border-white/10
              text-white
              font-medium
              transition duration-300
              hover:bg-white/20
              hover:border-(--color-accent)/40
              hover:-translate-y-1
            "
          >
            <FaEnvelope className="w-5 h-5" />
            Email
          </a>

                        <a
                          href="https://www.facebook.com/Wizecreation"
                          target="_blank"
                          rel="noopener noreferrer"
                                   className="
              flex items-center justify-center gap-3
              px-8 py-4 rounded-xl
              bg-white/10
              backdrop-blur-md
              border border-white/10
              text-white
              font-medium
              transition duration-300
              hover:bg-white/20
              hover:border-(--color-accent)/40
              hover:-translate-y-1
            "
                        >
                          Facebook <FaFacebookF />
                        </a>
                      
                        <a
                          href="https://x.com/wizecreation"
                          target="_blank"
                          rel="noopener noreferrer"
              className="
              flex items-center justify-center gap-3
              px-8 py-4 rounded-xl
              bg-white/10
              backdrop-blur-md
              border border-white/10
              text-white
              font-medium
              transition duration-300
              hover:bg-white/20
              hover:border-(--color-accent)/40
              hover:-translate-y-1
            "
                        >
                         Twitter <FaXTwitter />
                        </a>

        </div>
      </div>

    </section>
  );
};

export default Contact;



