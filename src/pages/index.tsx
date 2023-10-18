import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Home() {
  const router = useRouter();

  return (
    <section className="flex min-h-[70vh] h-full w-full flex-col items-center justify-center py-6 bg-gradient-to-b from-dark-blue-bg to-transparent text-white">
      <div className="gap-6 flex flex-col items-center px-4 md:px-0">
        <h1 className="text-center text-bold leading-[30px] text-4xl md:leading-[52px] md:text-5xl lg:leading-[88px] lg:text-[80px] lg:font-medium">
          Welcome to {""}
          <span className="bg-clip-text text-transparent font-semibold bg-gradient-to-r from-purple via-pink via-cyan to-blue">
            Imagino
          </span>
        </h1>
        <p className="text-lg md:text-xl leading-7 w-full md:w-[382px] lg:w-[600px]">
          Your Cosmic Image Companion: The Ultimate AI Image Generator{" "}
        </p>
        <div
          className="w-[178px] h-[65px] flex justify-center items-center bg-purple cursor-pointer"
          onClick={() => router.push("/sandbox")}
        >
          <p>Let{`'`}s start</p>
        </div>
      </div>
    </section>
  );
}
