import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center gap-1 mt-1">
      <div className="animate-bounce w-2 h-2 rounded-full bg-slate-600"></div>
      <div className="animate-bounce-reverse w-2 h-2 rounded-full bg-slate-800"></div>
      <div className="animate-bounce w-2 h-2 rounded-full bg-slate-600"></div>
    </div>
  );
};

export default Loader;
