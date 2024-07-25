import React from 'react';
import CustomSlider from './Slider.tsx';

interface MovieListProps {
  sectionHeading: string;
  endpoint: string;
}

const MovieList: React.FC<MovieListProps> = ({ sectionHeading, endpoint }) => {
  return (
    <div className='flex flex-col text-white font-semibold text-xl'>
      <h2 className='ml-12 max-w-[50%]'>{sectionHeading}</h2>
      <CustomSlider endpoint={endpoint} />
    </div>
  );
};

export default MovieList;
