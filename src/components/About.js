import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { MdDeveloperMode } from "react-icons/md";
import { FaUserGraduate, FaUniversity, FaSchool } from "react-icons/fa";
import AcademicsChart from './charts.js';
import Navbar from './Navbar';
import CourseProgress from './circular.js';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
    }, []);

    const navigate = useNavigate();

    return (
        <>
            <div className=' h-[15vh] fixed top-0 left-0 w-full z-50 bg-white'>
                <Navbar />
            </div>

            <div className='p-8 py-10 mt-10 overflow-x-hidden bg-white text-black'>
                <div className=' border mx-auto border-orange-400 border-3 p-5 rounded-md bg-black' data-aos="fade-left">
                    <h2 className='text-center mt-5 md:text-5xl text-white underline font-semibold'>Bio</h2>
                    <p className='md:text-5xl md:p-9 text-white'>
                        I am a passionate and detail-oriented MERN stack developer with a strong background in building full-stack web applications. With a degree in Mechanical Engineering from Rgukt University, I have honed my skills in front-end and back-end development, as well as database management.
                    </p>
                </div>
                <br />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='shadow-xl border border-orange-400 border-3 p-5 rounded-md bg-black' data-aos="fade-right">
                        <h2 className='text-center md:text-6xl text-white underline font-semibold'>Internship</h2>
                        <ul className='text-white mt-4 md:text-5xl'>
                            <li>Company: DataEvolve Solutions</li>
                            <li className='mt-7'>Status: Ongoing</li>
                        </ul>
                    </div>
                    <div className='shadow-xl border border-orange-400 border-3 p-5 rounded-md bg-black' data-aos="fade-left">
                        <h2 className='text-center md:text-5xl text-white underline font-semibold'>Course</h2>
                        <CourseProgress percentage={100} />
                    </div>
                </div>
                
                <AcademicsChart data-aos="fade-left" />
            </div>
            <div className='flex justify-center items-center shadow-xl'>
                <button className='bg-orange-500 w-full p-3 text-white shadow-2xl rounded-tl-lg rounded-tr-lg  font-extrabold' onClick={() => navigate("/skills")}>Skills</button>
            </div>
        </>
    );
}

export default About;
