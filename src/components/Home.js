import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";
import HomeImage from "../assests/home.jpg";
import Navbar from "./Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "aos/dist/aos.css";
import click from "../assests/assests/click.wav";
import resume from "../assests/assests/resume.pdf";

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    AOS.init({ duration: 2000 });
    animateName();
    return () => {
      AOS.refresh();
    };
  }, []);

  const animateName = () => {
    let i = 0;
    const fullName = "Reddysai Kanthuri";
    const interval = setInterval(() => {
      setName(fullName.substring(0, i + 1));
      i++;
      if (i === fullName.length) {
        clearInterval(interval); // Stop the animation when full name is displayed
        setTimeout(() => {
          setName("");
          animateName(); // Repeat the animation after 3 seconds
        }, 3000);
      }
    }, 200);
  };

  const downloadResume = () => {
    const anchor = document.createElement("a");
    anchor.href = resume;
    anchor.download = "resume.pdf";
    const clickaudio = new Audio(click);
    clickaudio.play();
    toast.success("Resume Successfully Downloaded");
    anchor.click();
  };

  return (
    <>
      <div className="h-[15vh] bg-white">
        <Navbar className="fixed top-0 left-0 w-full z-50" />
      </div>
      <div className="main font-gothic md:flex justify-around items-center bg-match">
        <div
          className="left p-8 py-10 bg-match text-off flex flex-col md:w-[50vw] md:h-[85vh] md:flex md:bg-cherry md:flex-col md:justify-center md:items-center md:ml-10 md:rounded-tl-lg md:rounded-bl-lg"
          data-aos="fade-left"
        >
          <h1 className="text-3xl font-gothic md:text-4xl">
            Myself <br />{" "}
            <span className="text-orange-600 font-extrabold">{name}</span>
          </h1>
          <br />
          <h2 className="font-gothic text-2xl md:text-3xl">
            I'am a Full Stack Developer
          </h2>
          <br />
          <div className="flex justify-evenly  items-center md:w-72 text-4xl text-off md:text-5xl ">
            <a
              rel="noreferrer"
              href="https://www.facebook.com/reddysai.sai.14"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a
              href="https://github.com/Reddy9100"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/kanthuri-reddysai-621990251/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
          <br/>
          <button
            className="mt-3 bg-orange-600 md:w-52 rounded-xl p-2 "
            onClick={downloadResume}
          >
            <IoDocumentText className="mx-auto" />
            Resume
          </button>
        </div>
        <div
          className="right bg-cherry animate-glow md:h-[85vh] flex flex-col justify-center items-center md:w-[50vw] md:bg-white md:mr-10 md:rounded-tr-lg md:rounded-br-lg"
          data-aos="fade-right"
        >
          <img
            src={HomeImage}
            alt=""
            className="animate-bubble p-5 rounded-3xl h-[40vh] mt-20"
          />
          <div className="btn ">
            <button
              className="bg-white font-extrabold text-orange-500 w-[100vw] p-5 mt-10 h-[10vh] md:w-[25vw] hover:bg-black hover:text-white  hover:border-white border-black border-4 rounded-bl-lg rounded-br-lg  md:bg-match md:text-off md:rounded-2xl"
              onClick={() => navigate("/about")}
            >
              About Me
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Home;
