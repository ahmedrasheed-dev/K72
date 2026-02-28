import React from "react";
import Video from "../components/home/Video";
import HomeTop from "../components/home/HomeTop";
import HomeBottom from "../components/home/HomeBottom";

const Home = () => {
  return (
    <>
      <div className="w-screen h-screen fixed">
        <Video />
      </div>
      <div className="w-screen h-screen relative flex flex-col justify-between">
        <HomeTop />
        <HomeBottom />
      </div>
    </>
  );
};

export default Home;
