import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import { FaRegUserCircle } from "react-icons/fa";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
      
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleUserIconClick = () => {
    console.log('User icon clicked');
  };

  return (
    <div className="jarallax bg-gray-200">
      <div className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <img className="h-20 w-20" src="/src/assets/image/iconPet.png" alt="Pet Service Logo" />
            <span className="text-4xl ml-2 px-7 cursor-pointer">Pet Service</span>
          </div>
          <button
            className="text-3xl md:hidden focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        </div>
        <ul className={`flex-col md:flex md:flex-row md:items-center w-full md:w-auto ${isOpen || !isSmallScreen ? 'flex' : 'hidden'}`}>
          <li className="mx-4 my-3 md:my-0">
            <a href="#" onClick={closeMenu} className="text-xl hover:text-cyan-500 duration-500">TRANG CHỦ</a>
          </li>
          <li className="mx-4 my-3 md:my-0">
            <a href="#" onClick={closeMenu} className="text-xl hover:text-cyan-500 duration-500">GIỚI THIỆU</a>
          </li>
          <li className="mx-4 my-3 md:my-0">
            <a href="#" onClick={closeMenu} className="text-xl hover:text-cyan-500 duration-500">DỊCH VỤ</a>
          </li>
          <li className="mx-4 my-3 md:my-0">
            <a href="#" onClick={closeMenu} className="text-xl hover:text-cyan-500 duration-500">CỬA HÀNG</a>
          </li>
          <li className="mx-4 my-3 md:my-0">
            <a href="#" onClick={closeMenu} className="text-xl hover:text-cyan-500 duration-500">LIÊN HỆ</a>
          </li>
          <li className="mx-4 my-3 md:my-0">
            <FaRegUserCircle className='icon w-10 h-10 hover:text-cyan-500 duration-500' onClick={handleUserIconClick}/>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
