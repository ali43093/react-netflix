import React from "react";
import Dialog from "@mui/material/Dialog";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import PlayButton from "../Buttons/PlayButton";

interface Movie {
 title: string;
  overview: string;
  release_date: string;
}
interface MovieModalProps {
  open: boolean;
  onClose: () => void;
  movie: Movie | null;
}

const MovieModal: React.FC<MovieModalProps> = ({ open, onClose, movie }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState<boolean>(false);

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
    <>
      <Dialog
        open={open}
        onClose={onClose}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          style: {
            borderRadius: "10px",
            background: "linear-gradient(to bottom, black,black, rgb(89, 0, 0))", 
            color: "white",
          },
        }}
      >
        <div className="relative ">
        <div className=" absolute bottom-[-40px] w-full h-[80px] bg-gradient-to-t from-transparent via-black to-transparent"/>

          <video
            ref={videoRef}
            src="/assets/videos/HeroVideo.mp4"
            autoPlay
            loop
            muted={isMuted}
            className="inset-0 w-full h-full "
          />
          <div>
          <PlayButton className="absolute bottom-4 left-4 bg-opacity-80 text-black" text="Play " />
          </div>
          <div className="absolute bottom-4 right-4">
            <button
              onClick={handleMuteUnmute}
              className=" bg-opacity-50 bg-white text-black rounded-full flex items-center justify-center sm:text-md md:text-lg lg:text-2xl p-2 md:p-3 lg:p-4"
            >
              {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
            </button>
          </div>
        </div>


        <div className="flex flex-col gap-y-6 text-gray-300 m-8">

          <div className="flex items-center gap-4">
          <h1 className="text-xs md:text-md lg:text-lg font-bold">Released On:</h1>
          <p className="text-xs md:text-md lg:text-lg font-bold">{movie?.release_date}</p>
          </div>

          <div className="flex items-start justify gap-4">
          <h1 className="text-md md:text-lg lg:text-2xl font-extrabold">{movie?.title}</h1>
          <p className="text-xs md:text-sm lg:text-md">{movie?.overview}</p>
           </div>

        </div>
        
      </Dialog>
    </>
  );
};

export default MovieModal;
