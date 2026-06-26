

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaFacebookF,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-(--color-primary)/90  text-white py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="flex flex-col justify-between">
        {/* Logo */}
<Link href="/" className="flex items-center justify-center">
  <Image
    src="/assets/wizecreation/WizeCreation3.jpg"
    alt="portfolio logo"
    width={90}
    height={30}
    priority
    className="
      rounded-sm object-contain
      transition-all duration-300 ease-out
      hover:scale-105 hover:opacity-90
    "
  />
</Link>

        {/* Social Icons */}
           <div className="flex gap-4 text-xl mt-4 text-center justify-center  items-center">

  <a
    href="https://wa.me/message/QLW72SGNP75VL1"
    target="_blank"
    rel="noopener noreferrer"
    className="
      hover:text-(--color-accent)
      hover:-translate-y-1
      transition duration-300
    "
  >
    <FaWhatsapp />
  </a>

  <a
   href="https://www.instagram.com/wize_creation"
    target="_blank"
    rel="noopener noreferrer"
    className="
      hover:text-(--color-accent)
      hover:-translate-y-1
      transition duration-300
    "
  >
    <FaInstagram />
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

  <a
    href="/Contact"
    className="
      hover:text-(--color-accent)
      hover:-translate-y-1
      transition duration-300
    "
  >
    <FaEnvelope />
  </a>

</div>

        </div>



        {/* Navigation Links */}
        <nav className="flex gap-6 flex-wrap justify-center font-medium uppercase">
          <Link href="/" className="hover:text-(--color-accent) transition">Home</Link>
          <Link href="/About" className="hover:text-(--color-accent) transition">About Me</Link>
          <Link href="/Projects" className="hover:text-(--color-accent) transition">My Designs</Link>
          <Link href="/Contact" className="hover:text-(--color-accent) transition">Contact</Link>
        </nav>
         
         


        {/* Social / Copyright */}
        <p className="text-sm text-white-70 text-center md:text-right">
          &copy; {new Date().getFullYear()} Wizzy's Graphics. All rights reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;
