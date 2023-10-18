import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="h-[400px] w-full flex justify-center items-center bg-gradient-to-b from-transparent to-black">
      <Image
        src="/imgs/logo-transparent.png"
        width={180}
        height={180}
        alt="logo"
        className="cursor-pointer"
      />
    </footer>
  );
};

export default Footer;
