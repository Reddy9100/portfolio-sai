import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import ParticlesComponent from './Particles';
const LandingPage = () => {
    const navigate = useNavigate();
    const [confettiActive, setConfettiActive] = useState(false);

    useEffect(() => {
        AOS.init({});
    }, []);

    const handleHomeButtonClick = () => {
        // Set confettiActive to true to activate confetti blast
        setConfettiActive(true);

        // After a short delay, reset confettiActive to false to deactivate confetti
        setTimeout(() => {
            setConfettiActive(false);
            navigate("/home");
        }, 3000); // Adjust the duration as needed
    };

    return (
      
        <>
         {confettiActive && <Confetti />}
        <ParticlesComponent />
            <div style={{ position: 'relative', width: '70%', height: '100vh', zIndex: '2',margin : 'auto' }}>

                <div
                    className="flex flex-col  justify-center items-center bg-transparent text-white h-full"
                    style={{ position: 'relative', zIndex: 1 }}
                >
                    <h1 className="text-orange-500 text-5xl font-dancing font-extrabold text-center md:text-9xl lg:text-large xl:text-xtra">
                        Welcome to My Portfolio
                    </h1>
                    {/* Attach click event handler to trigger confetti blast */}
                    <button
                        className="bg-white text-orange-600 font-mono p-4 w-[180px] rounded-md font-extrabold fill-teal-200 mt-10" 
                        onClick={handleHomeButtonClick}
                    >
                        Home
                    </button>
                </div>
            </div>
        </>
    );
};

export default LandingPage;
