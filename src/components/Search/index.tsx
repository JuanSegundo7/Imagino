import { Info, Search } from "@/@types/interfaces";
import Image from "next/image";
import React from "react";

const Search = ({
  handleSubmit,
  info,
  handleSelect,
  handleInputChange,
  setInfo,
  mobile,
  desktop,
  setImage,
  isLoading,
}: Search) => {
  return (
    <div
      className={`flex mt-6 ${isLoading ? "md:mb-6" : "md:mb-4"} ${
        mobile ? "md:hidden px-6" : "md:flex px-4"
      } w-full flex-col ${desktop && "hidden"} items-center justify-center `}
    >
      <form
        className="flex w-full flex-col items-start rounded-xl bg-grey-bg p-3 text-gray-400 shadow-xl ring-blue-600 transition-all focus-within:ring-1 sm:flex-row sm:p-4 lg:backdrop-blur-sm lg:focus-within:backdrop-blur-lg "
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex w-full items-start justify-center sm:mb-0">
          {info.style !== "none" && (
            <div
              onClick={() => handleSelect("none", "style")}
              className={`mt-3 gap-2 sm:flex ${
                mobile ? "min-w-[100px]" : "min-w-[120px]"
              }
               `}
            >
              <div className="flex w-full items-center gap-2 rounded-lg cursor-pointer bg-gradient-to-br from-purple to-blue px-2 py-1.5 text-sm capitalize leading-none text-gray-100">
                <span className="w-full">{info.style}</span>
              </div>
            </div>
          )}
          <textarea
            className="mt-3 w-full h-[24px] resize-none bg-transparent px-2  text-gray-50 outline-none placeholder:text-gray-300 sm:py-0"
            placeholder="Describe what you want to see"
            onChange={handleInputChange}
            value={info.input}
          ></textarea>
          <div
            onClick={() => {
              setInfo((prevInfo: Info) => ({ ...prevInfo, input: "" }));
              setImage(null);
            }}
            className="mr-4 mt-3 flex h-6 w-6 items-center justify-center rounded text-gray-300 hover:bg-gray-700 hover:text-gray-50"
          >
            <Image alt="cross" src="/imgs/cross.png" height={10} width={10} />
          </div>
        </div>
        <div className="flex w-full items-center gap-2 sm:w-auto">
          <button
            className={`flex w-full cursor-pointer items-center justify-center rounded-lg bg-gradient-to-br from-purple to-blue px-4 py-2.5 text-white transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-purple-400/20 sm:w-auto ${
              info.input.length > 0 ? "opacity-1" : "opacity-70"
            }`}
            disabled={info.input.length > 0 ? false : true}
          >
            Generate
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
