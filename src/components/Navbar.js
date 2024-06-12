import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LuAlignLeft } from "react-icons/lu";
import { GiCrossMark } from "react-icons/gi";
import { TiInfoLargeOutline } from "react-icons/ti";
import { GoStack } from "react-icons/go";
import { FaPhoneVolume, FaCertificate } from "react-icons/fa6";
import { TbBrandGoogleHome } from "react-icons/tb";
import { FaServicestack } from "react-icons/fa6";
import { IoIosAppstore } from "react-icons/io";


const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div><h2 className={`fixed top-10 ml-4 font-extrabold rounded-lg text-orange-500 px-3 py-2 ${isSidebarOpen ? 'hidden' : ''}`} >Reddy's PortFolio</h2>

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 md:w-[400px] bg-white rounded-tr-2xl rounded-br-2xl round transform transition duration-300 ease-in-out ${
          isSidebarOpen ? "" : "-translate-x-full"
        }`}
      >
        <div className="p-4 flex justify-between items-center">
          <div className="text-orange-600 font-bold">Reddy's PortFolio</div>
          <button className="bg-black rounded-lg text-orange-500 px-3 py-2" onClick={closeSidebar}>
            {isSidebarOpen ? <GiCrossMark /> : <LuAlignLeft />}
          </button>
        </div>
        <ul className="py-4">
          <Link to="/home">
            <li className="px-4 py-2 flex  items-center  text-orange-600 font-bold hover:bg-gray-700 cursor-pointer"><TbBrandGoogleHome className='border border-white boder-2 p-2 rounded-3xl mr-4 text-cyan-400 bg-black h-[40px] w-[30px]'/>Home</li>
          </Link>
          <Link to="/about">
            <li className="px-4 py-2 flex  items-center  text-orange-600 font-bold hover:bg-gray-700 cursor-pointer"><TiInfoLargeOutline className='border border-white boder-2 p-2 rounded-3xl mr-4 text-cyan-400 bg-black h-[40px] w-[30px]'/>About</li>
          </Link>
          <Link to="/skills">
            <li className="px-4 py-2 flex  items-center text-orange-600 font-bold hover:bg-gray-700 cursor-pointer"><GoStack className='border border-white boder-2 rounded-3xl p-2 mr-4 text-cyan-400 bg-black h-[40px] w-[30px]'/>Skills</li>
          </Link>
          <Link to="/certificates">
            <li className="px-4 py-2 flex  items-center text-orange-600 font-bold hover:bg-gray-700 cursor-pointer"><FaCertificate className='border border-white boder-2 rounded-3xl  p-2 mr-4 text-cyan-400 bg-black h-[40px] w-[30px]' />Certificates</li>
          </Link>
          <Link to="/projects">
          <li className="px-4 py-2 flex  items-center text-orange-600 font-bold hover:bg-gray-700 cursor-pointer"><IoIosAppstore className='border border-white boder-2 rounded-3xl  p-2 mr-4 text-cyan-400 bg-black h-[40px] w-[30px]' />Projects</li>
          </Link>
          <Link to="/services">
            <li className="px-4 py-2 flex  items-center  text-orange-600 font-bold hover:bg-gray-700 cursor-pointer"><FaServicestack className='border border-white boder-2 p-2 rounded-3xl mr-4 text-cyan-400 bg-black h-[40px] w-[30px]'/>Services</li>
          </Link>
          <Link to="/contact">
            <li className="px-4 py-2 flex  items-center text-orange-600 font-bold hover:bg-gray-700 cursor-pointer"><FaPhoneVolume className='border border-white boder-2 rounded-3xl  p-2 mr-4 text-cyan-400 bg-black h-[40px] w-[30px]' />Contact</li>
          </Link>
        </ul>
      </div>

      <button className={`fixed top-10 ml-[80vw]  bg-black font-extrabold rounded-lg text-orange-500 px-3 py-2 ${isSidebarOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>
        <LuAlignLeft className="font-extrabold" />
      </button>
    </div>
  );
};

export default Navbar;
