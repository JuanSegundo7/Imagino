import React, { useState } from "react";

import get_image from "../api/axios.get_image";
import Image from "next/image";
import { models, styles } from "@/data/data";
import SkeletonLoader from "@/components/SkeletonLoader";
import Search from "@/components/Search";
import { Info, Model, Style } from "@/@types/interfaces";

const Sandbox = () => {
  const [info, setInfo] = useState<Info>({
    input: "",
    model: "stable-diffusion-xl-1024-v1-0",
    badInput: "",
    style: "none",
  });
  const [image, setImage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [extension, setExtension] = useState<string>("jpg");

  const downloadImage = (imageData: string) => {
    const link = document.createElement("a");
    link.download = `${info.input}.${extension}`;
    link.href = imageData;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInfo((prevInfo: Info) => ({ ...prevInfo, input: e.target.value }));
  };

  const handlebadInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInfo((prevInfo: Info) => ({ ...prevInfo, badInput: e.target.value }));
  };

  const handleSelect = (name: string, type: string) => {
    setInfo((prevInfo: Info) => ({ ...prevInfo, [type]: name }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  const handleSearch = async () => {
    try {
      setIsLoading(true);
      const res = await get_image(
        info.input,
        info.badInput,
        info.model,
        info.style
      );
      setImage(res);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="pb-6 md:pb-0 flex flex-col w-full md:flex-row bg-dark-grey-bg  text-white px-2">
      <Search
        handleInputChange={handleInputChange}
        handleSelect={handleSelect}
        handleSubmit={handleSubmit}
        info={info}
        setInfo={setInfo}
        setImage={setImage}
        mobile
      />
      <article className="sticky top-12 mb-0 flex h-auto w-full md:w-80 lg:w-96 shrink-0 rounded-lg p-6">
        <div
          id="left-side"
          className="flex flex-col gap-2 w-full overflow-auto rounded-xl text-white bg-grey-bg p-4 overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-600 md:h-[calc(100vh-7.8rem)] lg:h-[calc(100vh-8.4rem)] md:gap-5"
        >
          <div>
            <div className="mb-2 flex items-baseline justify-between">
              <p className="font-semibold capitalize text-gray-100">
                avoid generating
              </p>
            </div>
            <div className="flex justify-center items-center">
              <input
                onChange={handlebadInputChange}
                placeholder="What you want to avoid generating"
                className="flex w-full flex-col items-start rounded-xl outline-none bg-gray-700 p-3 text-gray-400 shadow-xl ring-blue-600 transition-all focus-within:ring-1 sm:flex-row sm:p-4 lg:backdrop-blur-sm lg:focus-within:backdrop-blur-lg "
              ></input>
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-baseline justify-between">
              <p className="font-semibold capitalize text-gray-100">model</p>
            </div>
            <div className="flex w-full justify-center flex-wrap gap-2 md:grid md:grid-cols-2 md:gap-4">
              {models.map((models: Model) => {
                return (
                  <div key={models.id} className="flex items-center w-full">
                    <button
                      onClick={() => handleSelect(models.value, "model")}
                      className={` ${
                        info.model === models.value
                          ? "bg-gradient-to-br from-purple to-blue"
                          : "bg-gray-700"
                      } p-4 flex h-full w-full items-center justify-center rounded-xl group-hover:bg-gray-600`}
                    >
                      <p className="flex w-full items-center justify-center  overflow-hidden rounded-xl group-hover:bg-gray-600">
                        {models.name}
                      </p>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <div className="mb-2 flex items-baseline justify-between">
              <p className="font-semibold capitalize text-gray-100">style</p>
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div
                key="1"
                className="group flex aspect-square flex-col items-center gap-1"
              >
                <button
                  onClick={() => handleSelect("none", "style")}
                  className={`${
                    info.style === "none"
                      ? "bg-gradient-to-br from-purple to-blue p-[2px]"
                      : "bg-gray-700"
                  }relative flex aspect-square w-full items-center justify-center rounded-xl p-0.5 bg-gray-700 group-hover:bg-gray-600`}
                >
                  <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl bg-gray-700 group-hover:bg-gray-600">
                    <Image
                      alt="forbidden"
                      src="/imgs/forbidden.png"
                      height={50}
                      width={50}
                      className="mt-[2px]"
                    />
                  </span>
                </button>
                <span className="w-[100px] whitespace-wrap text-center text-xs capitalize group-hover:text-gray-100 text-gray-300">
                  None
                </span>
              </div>
              {styles.map((style: Style) => {
                return (
                  <div
                    key={style.id}
                    className="group flex aspect-square flex-col items-center gap-1"
                  >
                    <button
                      onClick={() => handleSelect(style.value, "style")}
                      className={`${
                        info.style === style.value
                          ? "bg-gradient-to-br from-purple to-blue p-[2px]"
                          : "bg-gray-700"
                      } relative flex aspect-square w-full items-center justify-center rounded-xl p-0.5 bg-gray-700 group-hover:bg-gray-600`}
                    >
                      <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-xl group-hover:bg-gray-600">
                        <Image
                          alt={style.name}
                          src={`/imgs/${style.value}.png`}
                          height={100}
                          width={100}
                          className="h-full w-full"
                        />
                      </span>
                    </button>
                    <span className="w-[100px] whitespace-wrap text-center text-xs capitalize group-hover:text-gray-100 text-gray-300">
                      {style.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </article>
      <article className="flex w-full flex-col items-center overflow-y-scroll h-auto lg:overflow-y-hidden">
        <Search
          handleInputChange={handleInputChange}
          handleSelect={handleSelect}
          handleSubmit={handleSubmit}
          info={info}
          setInfo={setInfo}
          setImage={setImage}
          isLoading={isLoading}
          desktop
        />
        <div className="w-full h-full md:px-4 px-6">
          {image && !isLoading && (
            <div className="mb-4 w-full flex flex-col md:flex-row gap-2 rounded-xl bg-grey-bg p-3">
              <button
                onClick={() => downloadImage(image as string)}
                className="flex w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-br from-purple to-blue px-4 py-2.5 text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-purple-400/20 sm:w-auto"
              >
                Download
              </button>
              <p
                onClick={() => setExtension("jpg")}
                className={`${
                  extension === "jpg" ? "opacity-1" : "opacity-50"
                } flex w-full md:max-w-[200px] cursor-pointer items-center justify-center rounded-lg bg-gradient-to-br from-purple to-blue px-4 py-2.5 text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-purple-400/20 `}
              >
                JPG
              </p>
              <p
                onClick={() => setExtension("png")}
                className={`${
                  extension === "png" ? "opacity-1" : "opacity-50"
                } flex w-full md:max-w-[200px] cursor-pointer items-center justify-center rounded-lg bg-gradient-to-br from-purple to-blue px-4 py-2.5 text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-purple-400/20`}
              >
                PNG
              </p>
              <p
                onClick={() => setExtension("webp")}
                className={`${
                  extension === "webp" ? "opacity-1" : "opacity-50"
                } flex w-full md:max-w-[200px] cursor-pointer items-center justify-center rounded-lg bg-gradient-to-br from-purple to-blue px-4 py-2.5 text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-purple-400/20`}
              >
                WEBP
              </p>
            </div>
          )}
          <div
            id="right-side"
            className={`rounded-xl h-full ${
              !image && !isLoading && "flex flex-col justify-center"
            } ${image && "lg:h-[calc(100vh-19.5rem)]"} w-full overflow-auto`}
          >
            {!image && !isLoading && (
              <div className="flex items-center justify-center w-full my-6 md:my-0">
                <h3 className="text-xl">
                  Let{`'`}s create something out of the space!
                </h3>
                <Image
                  src="/imgs/rocket.png"
                  alt="rocket"
                  width={60}
                  height={60}
                />
              </div>
            )}
            {(!image && isLoading) || (image && isLoading) ? (
              <SkeletonLoader />
            ) : (
              <div className="overflow-auto rounded-xl">
                {image && (
                  <Image
                    src={image}
                    height={200}
                    width={200}
                    alt="image"
                    className="h-full w-full"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </article>
    </section>
  );
};

export default Sandbox;
