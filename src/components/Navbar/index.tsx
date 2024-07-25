import React, { useState, useEffect } from "react";
import { Search } from "../../../public/assets/icons";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Index: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [menuOpen]);

  const liStyle = "hover:text-gray-400 cursor-pointer";

  return (
    <nav className="fixed top-0 z-[1000] flex flex-row justify-between items-center w-full bg-black text-white px-5 md:px-8 py-3 gap-x-8">
      <img src="/assets/logo1.svg" alt="logo" width={100} height={100} />

      <div className="md:hidden flex items-center">
        <Search />
        <button onClick={toggleMenu} className="ml-4">
          {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      <div className={`hidden md:flex items-center gap-x-6`}>
        < Search className={liStyle}/>
        <ul className="flex justify-center items-center space-x-6">
          <li className={liStyle}><a href="#">Trending Now</a></li>
          <li className={liStyle}><a href="#">Top Rated</a></li>
          <li className={liStyle}><a href="#">Action</a></li>
          <li className={liStyle}><a href="#">Comedy</a></li>
        </ul>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-20 flex flex-col justify-center items-center">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
            <AiOutlineClose size={30} />
          </button>
          <ul className="flex flex-col space-y-8 text-xl">
            <li className={liStyle}><a href="#">Trending Now</a></li>
            <li className={liStyle}><a href="#">Top Rated</a></li>
            <li className={liStyle}><a href="#">Action Movies</a></li>
            <li className={liStyle}><a href="#">Comedy Movies</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Index;
