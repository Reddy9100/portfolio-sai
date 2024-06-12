import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Navbar from './Navbar';

import {useNavigate} from "react-router-dom"


const Services = () => {
    const navigate = useNavigate()


  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with your desired configuration
  }, []);

  return (
    <>
    <Navbar/>
    <div className="container overflow-x-hidden mt-16 px-4 py-8">
      <h2 className="text-3xl font-bold mt-8 mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ServiceCard 
          title="Web Development"
          description="I offer custom web development solutions tailored to your needs. I utilizes the latest technologies and best practices to create fast, secure, and scalable websites."
          icon="🌐"
        />
        <ServiceCard
          title="UI Designing"
          description="I Have Knowledge in create stunning UI designs for your projects. I focus on user-centered design principles to ensure intuitive and visually appealing interfaces."
          icon="🎨"
        />
        <ServiceCard
          title="UI Development"
          description="I convert your UI designs into interactive and responsive web interfaces. Using modern frontend frameworks like React.js and Bakend like Node.js, I bring your designs to life with smooth animations and seamless user experiences."
          icon="💻"
        />
      </div>
      
    </div>
    <div>
     <button className='bg-orange-500 font-extrabold rounded-tl-xl mt-8 rounded-tr-xl text-white  p-4 w-full' onClick={()=>navigate("/contact")} >Contact</button>
   </div>
    </>
  );
};

const ServiceCard = ({ title, description, icon }) => {
    
  return (
    
    <>
    <div className="bg-black rounded-lg p-6 shadow-md" data-aos="fade-left">
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-orange-600">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
     
   </>

  );
};

export default Services;
