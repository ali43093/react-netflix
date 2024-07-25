import React, { useRef, useState, useEffect } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import Navbar from "./Navbar";
import InfoButton from "./Buttons/InfoButton";
import PlayButton from "./Buttons/PlayButton";

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="hidden md:block relative w-full h-screen overflow-hidden">
      <div className="z-5 absolute bottom-[-60px] w-full h-[120px] bg-gradient-to-t from-transparent via-black to-transparent" />
      <div className="absolute z-30 flex flex-col gap-y-3 bottom-0 translate-x-10 -translate-y-[100px]">
        <div className=" md:w-[300px] lg:w-[400px]">
          <img  src="/assets/bannerPng.png" alt="" />
        </div>
        <div className="flex items-center justify-center gap-x-3">
          <PlayButton text="Play" className=" bg-black bottom-0" />
          <InfoButton
            text="More info"
            className=" bg-white bg-opacity-50 bottom-0"
          />
        </div>
      </div>

      <video
        ref={videoRef}
        src="/assets/videos/HeroVideo.mp4"
        autoPlay 
        loop 
        muted={isMuted}
        className="absolute inset-0 w-full h-full object-cover"
      ></video>

      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="absolute bottom-[100px] right-4">
        <button
          onClick={handleMuteUnmute}
          className="p-4 bg-opacity-50 bg-white text-black rounded-full flex items-center justify-center text-2xl"
        >
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
      </div>
    </section>
  );
};

export default Hero;
