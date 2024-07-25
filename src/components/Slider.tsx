import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { fetchData } from "../api/GetMovieData";
import MovieModal from "./Modals/MovieModal"; 

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  original_title: string;
  overview: string;
  release_date: string;

}

interface CustomSliderProps {
  endpoint: string;
}

const CustomSlider: React.FC <CustomSliderProps>= ({endpoint}) => {
  const [display, setDisplay] = useState<boolean>(true);
  const [width, setWidth] = useState<string>("full");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 10, // Default number for large screens
    slidesToScroll: 5, // Default number for large screens
    responsive: [
      {breakpoint: 1400, settings: {slidesToShow: 8,slidesToScroll: 4,},},
      {breakpoint: 1080, settings: {slidesToShow: 6,slidesToScroll: 3,},},
      {breakpoint: 850,settings: {slidesToShow: 4,slidesToScroll: 2,},},
      {breakpoint: 600,settings: {slidesToShow: 3,slidesToScroll: 2,},},
      {breakpoint: 480,settings: {slidesToShow: 2,slidesToScroll: 1, },},
    ],
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await fetchData(`${endpoint}`);
      setMovies(moviesData);
    };

    fetchMovies();
  }, []);

  const BASE_URL = "https://image.tmdb.org/t/p/";
  const SIZE = "w500";

  const openModal = (movie: Movie) => {
    setSelectedMovie(movie);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="slider-container mx-8 h-auto">
      <div
        style={{
          width: width === "full" ? "100%" : `${width}px`,
          display: display ? "block" : "none",
        }}
        className="bg-transparent h-auto"
      >
        <Slider {...settings}>
          {movies.map((movie) => (
            <div key={movie.id} className="px-2 py-4" onClick={() => openModal(movie)}>
              <img
                src={`${BASE_URL}${SIZE}${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-60 object-cover rounded-md cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>

      
      <MovieModal
        open={modalIsOpen}
        onClose={closeModal}
        movie={selectedMovie}
      />
    </div>
  );
};

export default CustomSlider;
