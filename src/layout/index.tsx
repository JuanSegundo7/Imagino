import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import React, { ReactNode } from "react";

interface Layout {
  children: ReactNode;
}

const Layout = ({ children }: Layout) => {
  return (
    <>
      <Head>
        <title>Imagino</title>
        <meta name="description" content="By Juan Segundo Martinez with love" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex justify-start flex-col items-center w-full text-center m-0 y-0">
        {children}
      </main>
    </>
  );
};

export default Layout;
