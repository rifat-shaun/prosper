import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-2">
      <div className="animate-spin rounded-full border-4 border-t-4 border-gray-500 h-8 w-8"></div>
    </div>
  );
};

export default Loader;
