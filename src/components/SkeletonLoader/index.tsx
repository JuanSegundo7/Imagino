import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="flex gap-5 h-[calc(100%-1.5rem)]">
      <div className="relative w-full h-full space-y-3 overflow-hidden rounded-xl shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
        <div className="min-h-[446px] h-full w-full rounded-lg bg-grey-bg " />
      </div>
    </div>
  );
};

export default SkeletonLoader;
