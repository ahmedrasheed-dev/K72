import React from "react";
import { Link } from "react-router-dom";

const HomeBottom = () => {
  return (
    <div className="flex justify-center items-center font-[Lausanne-500] gap-2">
      <Link className="text-[7vw] uppercase border-3 border-white rounded-full px-4 py-1 hover:text-[#D3FD50] hover:border-[#D3FD50] leading-[7vw]">
        Projects
      </Link>
      <Link className="text-[7vw] uppercase border-3 border-white rounded-full px-4 py-1 hover:text-[#D3FD50] hover:border-[#D3FD50] leading-[7vw]">
        Agence
      </Link>
    </div>
  );
};

export default HomeBottom;
