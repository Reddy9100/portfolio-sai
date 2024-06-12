import React, { useState, useEffect } from 'react';
import { Skeleton, Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import Html from "../assests/assests/certi/Html.png"
import Css from "../assests/assests/certi/Css.png"
import Js from "../assests/assests/certi/Js.png"
import JSE from "../assests/assests/certi/JSE.png"
import Python from "../assests/assests/certi/python.png"
import sql from "../assests/assests/certi/sql.png"
import node from "../assests/assests/certi/node.png"
import git from "../assests/assests/certi/git.png"
import { AiOutlineLink } from 'react-icons/ai';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';

const Certificates = () => {
  const [loading, setLoading] = useState(true); // State to manage loading
    const navigate = useNavigate()
  const certificatesData = [
    {
      id: 1,
      title: 'Build Your Static Website',
      imageUrl: Html,
      link: 'https://certificates.ccbp.in/intensive/static-website?id=HIFIKSPCEF',
      description: 'HTML, CSS, BOOTSTRAP',
    },
    {
      id: 2,
      title: 'Build Your Responsive Website',
      imageUrl: Css,
      link: 'https://certificates.ccbp.in/intensive/responsive-website?id=JMTHPCQIBN',
      description: 'BootStrap, FlexBox',
    },
    {
      id: 3,
      title: 'Build Your Dynamic Website',
      imageUrl: Js,
      link: 'https://certificates.ccbp.in/intensive/dynamic-web-application?id=TSKHPFDLPB',
      description: 'Javascript',
    },
    {
      id: 4,
      title: 'Essential Javascript',
      imageUrl: JSE,
      link: 'https://certificates.ccbp.in/intensive/javascript-essentials?id=PPVDPLLRBO',
      description: 'JavaScript',
    },
    {
      id: 5,
      title: 'Introduction to Database',
      imageUrl: sql,
      link: 'https://certificates.ccbp.in/intensive/introduction-to-databases?id=RYEIBICAYL',
      description: 'SQLite',
    },
    {
      id: 6,
      title: 'Python Programming Language',
      imageUrl: Python,
      link: 'https://certificates.ccbp.in/intensive/programming-foundations?id=UPEXHQLGTP',
      description: 'Python',
    },
    {
      id: 7,
      title: 'Introduction to Node.js',
      imageUrl: node,
      link: 'https://certificates.ccbp.in/intensive/node-js?id=LGBNELWPPV',
      description: 'Node.js, Express.js',
    },
    {
      id: 8,
      title: 'Devoleper Foundations',
      imageUrl: git,
      link: 'https://certificates.ccbp.in/intensive/developer-foundations?id=YXTFYOFRAZ',
      description: 'GitHub, CommandLine',
    },
  ];

  useEffect(() => {
    // Initialize AOS library
    AOS.init({
      offset: 200,
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });

    // Simulate loading for 3 seconds
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Clear timeout on component unmount or re-render
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <div className= 'h-[15vh] fixed top-0 left-0 w-full z-50 bg-white'>
    <Navbar />
    </div>
    <div className="container overflow-x-hidden bg-white mt-16 text-orange-500 mx-auto py-8 p-5">
      <h2 className="text-2xl font-bold mt-11 mb-4">Certificates</h2>
      {/* Render skeleton loading if loading is true */}
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <Skeleton key={index} active />
          ))}
        </div>
      ) : (
        // Render actual certificate cards if loading is false
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certificatesData.map((certificate, index) => (
            <div key={certificate.id} className="bg-white rounded-lg shadow-md overflow-hidden" data-aos={index % 2 === 0 ? 'fade-left' : 'fade-right'}>
              <img src={certificate.imageUrl} alt={certificate.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{certificate.title}</h3>
                <p className="text-sm text-gray-600">{certificate.description}</p>
                {/* Add a button linking to the certificate URL */}
                <Button type="primary" className="mt-4 w-[60px] flex justify-center items-center" href={certificate.link} target="_blank" rel="noopener noreferrer">
                  <AiOutlineLink className="mr-2" />
                </Button>
              </div>
              
            </div>
            
          ))}
        </div>
      )}
    </div>
    <button className='bg-orange-500  p-3 text-white font-extrabold rounded-tl-xl rounded-tr-xl  w-full' onClick={()=>navigate("/projects")} >Projects</button>
    </>
  );
};

export default Certificates;
