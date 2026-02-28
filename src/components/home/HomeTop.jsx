import React from "react";
import Video from "./Video";

const HomeTop = () => {
  return (
    <>
      <div className="font-[Lausanne-300] text-center ">
        <div className="text-[10vw] uppercase leading-[10vw] flex items-center justify-center">
          L'étincelle
        </div>
        <div className="text-[10vw] uppercase leading-[10vw] flex items-center justify-center">
          qui
          <div className="h-[10vw] w-[22vw] -mt- rounded-full overflow-hidden">
            <Video />
          </div>
          génère
        </div>
        <div className="text-[10vw] uppercase leading-[10vw] flex items-center justify-center">
          la créativité
        </div>
      </div>
    </>
  );
};

export default HomeTop;
