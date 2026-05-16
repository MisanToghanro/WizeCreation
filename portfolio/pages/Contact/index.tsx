import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";

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
        <div className="mb-12">

          <p className="uppercase tracking-[0.25em] text-xs text-(--color-accent) mb-3">
            Contact
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h1>

          <p className="text-white/75 leading-relaxed max-w-2xl mx-auto">
            Have a project in mind or want to elevate your brand identity?
            Reach out through the following socials
          </p>

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



