import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Me", href: "/About" },
    { label: "My Designs", href: "/Projects" },
    { label: "Contact Me", href: "/Contact" },
  ];


  const NewHeader = () => {
     return(
<header className="absolute top-0 left-0 z-50 w-full ">
  <div className="flex items-center justify-between px-6 py-6 md:px-12">

    {/* Logo */}
<Link
  href="/"
  className="
    relative group
    rounded-2xl overflow-hidden
  "
>
  <div
    className="
      absolute inset-0
      bg-linear-to-r
      from-(--color-primary)
      to-(--color-aqua)
      opacity-0
      blur-xl
      transition duration-500
      group-hover:opacity-40
    "
  />

  <div
    className="
      relative
      bg-white/10
      backdrop-blur-md
      border border-white/10
      rounded-2xl
      px-3 py-2
    "
  >
    <Image
      src="/assets/wizecreation/WizeCreation3.jpg"
      alt="logo"
      width={95}
      height={40}
      className="object-contain rounded-lg"
    />
  </div>
</Link>

    {/* Desktop Nav */}
    <nav
      className="
        hidden md:flex items-center gap-6
        px-6 py-3
        rounded-full
        bg-[#2EC4B6]/20
        backdrop-blur-md
        border border-white/20
        shadow-lg shadow-black/10
      "
    >
      {navLinks.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          className="
            text-white uppercase tracking-[0.15em]
            text-sm font-medium
            transition duration-300
            hover:text-(--color-accent)
          "
        >
          {label}
        </Link>
      ))}
    </nav>

    {/* Mobile Hamburger */}
    <button
      onClick={() => setMenu(!menu)}
      className="
        md:hidden
        p-2 rounded-full
        bg-[#2EC4B6]/20
        backdrop-blur-md
        border border-white/20
        text-white
      "
    >
      {menu ? (
   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
      ) : (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>
      )}

    </button>
  </div>

  {/* Mobile Menu */}
  <div
    className={`
      md:hidden overflow-hidden
      transition-all duration-300 ease-in-out
      ${
        menu
          ? "max-h-96 opacity-100"
          : "max-h-0 opacity-0"
      }
    `}
  >
    <nav
      className="
        mx-6 mt-2
        flex flex-col gap-6
        rounded-2xl
        bg-[#2EC4B6]/20
        backdrop-blur-md
        border border-white/20
        px-6 py-6
      "
    >
      {navLinks.map(({ label, href }) => (
        <Link
          key={href}
          href={href}
          onClick={() => setMenu(false)}
          className="
            text-white uppercase
            tracking-[0.15em]
            text-sm font-medium
            transition duration-300
            hover:text-[#5B2C83]
          "
        >
          {label}
        </Link>
      ))}
    </nav>
  </div>
</header>
     )
  }

  return (
    <>
        
  <NewHeader/>
    </>

   
  );
};

export default Header;
