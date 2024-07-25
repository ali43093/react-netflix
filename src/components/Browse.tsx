import React from 'react';
import Hero from './Hero';
import MovieList from './MovieList';

const Browse: React.FC = () => {
  return (
    <div>
      <Hero />
      <div className=' py-4'>
        <MovieList sectionHeading='Trending Now' endpoint='/trending/movie/day' />
        <MovieList sectionHeading='Top Rated' endpoint='/movie/top_rated' />
        <MovieList sectionHeading='Action Movies' endpoint='/discover/movie?with_genres=28' />
        <MovieList sectionHeading='Comedy Movies' endpoint='/discover/movie?with_genres=35' />
      </div>
    </div>
  );
};

export default Browse;
