import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
<Head>
  <title>Wize Creation | Visual Identity & Creative Design Studio</title>

  <meta
    name="description"
    content="Wize Creation is a creative design studio specializing in branding, visual identity, flyers, social media design, and modern visual storytelling."
  />
</Head>

      <Header />
      <main
  className="
    min-h-screen flex flex-col pt-44 md:pt-52
    bg-linear-to-br
    from-[#5B2C83]
    via-[#6C3FA1]
    to-[#2EC4B6]
  ">
  {children}
</main>
      <Footer />
    </>
  );
};

export default Layout;
