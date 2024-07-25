import React from 'react';
import {Play} from '../../../public/assets/icons'
interface BtnOneProps {
  className?: string;
  text: string;
}

const PlayButton: React.FC<BtnOneProps> = ({ className,text }) => {
  return (
    <a href="https://www.youtube.com/watch?v=gNtJ4HdMavo" target='_blank' className={`w-auto h-auto bg-white sm:text-lg md:text-xl lg:text-2xl font-semibold rounded-md ${className}`}>
        <div className='flex justify-center items-center  md:gap-x-2 px-3 py-1 md:px-6 md:py-2'>
        <Play />
        <h1 >{text}</h1>
        </div>
      
    </a>
  );
}

export default PlayButton;
