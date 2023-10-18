import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const { pathname } = router;

  const handlePush = () => {
    router.push("/");
  };

  return (
    <header
      className={`flex w-full items-center ${
        pathname === "/sandbox" ? "justify-start" : "justify-center"
      } px-[24px] py-[8px] ${
        pathname === "/sandbox" ? "lg:px-6" : "lg:px-[240px]"
      } lg:py-[13px]
      
      ${pathname === "/sandbox" ? "bg-grey-bg" : "bg-dark-blue-bg"}
      `}
    >
      {pathname === "/sandbox" ? (
        <div onClick={handlePush} className="flex justify-center items-center">
          <Image
            src="/imgs/logo-transparent.png"
            width={80}
            height={80}
            alt="logo"
            className="cursor-pointer"
          />
          {/* <span className="bg-clip-text text-transparent text-3xl font-semibold bg-gradient-to-r from-purple via-pink via-cyan to-blue">
            Imagino
          </span> */}
        </div>
      ) : (
        <div onClick={handlePush}>
          <Image
            src="/imgs/logo-transparent.png"
            width={120}
            height={120}
            alt="logo"
            className="cursor-pointer"
          />
        </div>
      )}
    </header>
  );
};

export default Header;
