import React from 'react';
import {Info} from '../../../public/assets/icons'
interface BtnOneProps {
  className?: string;
  text: string;
}

const InfoButton: React.FC<BtnOneProps> = ({ className,text }) => {
  return (
    <div className={`w-auto h-auto bg-white text-2xl font-semibold rounded-md ${className}`}>
        <div className='flex justify-center items-center gap-x-2 px-6 py-2'>
        <Info />
        <h1 >{text}</h1>
        </div>
      
    </div>
  );
}

export default InfoButton;
