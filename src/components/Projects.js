// Projects.js
import React , {useEffect} from 'react';
import FoodMunch from '../assests/assests/certi/foodMunch.jpeg';
import { FaLink } from "react-icons/fa";
import TodoList from "../assests/assests/certi/TodoList.jpeg"
import loginImage from "../assests/assests/certi/user.png"
import WikipediaImage from "../assests/assests/certi/wikipedia.jpeg"
import nxtrendsImage from "../assests/assests/certi/nxtTrends.jpeg"
import Swiftlogo from "../assests/assests/logo.jpeg"
import Navbar from './Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
const projects = [
  {
    id: 1,
    title: "",
    URL: "https://saakii3.ccbp.tech/",
    imageUrl: FoodMunch,
    description: "FoodMunch is a restaurant website where consist of lot of varieties of dishes.",
    Technologies: "Html,Css,Bootstrap"
  },
  {
    id: 2,
    title: "",
    URL: "https://reddy9100.github.io/todolist/",
    imageUrl: TodoList,
    description: "The TodoList project is a web application designed to help users manage their tasks efficiently.",
    Technologies: "Html,Css,Bootstrap,javaScript"
    // other properties
  },
  {
    id: 3,
    title: "",
    URL: "https://reddy9100.github.io/wikipedia/",
    imageUrl:WikipediaImage,
    description : "The Wikipedia search project aims to develop a user-friendly application that enables users to search for articles on Wikipedia efficiently. The project involves implementing a search functionality that interacts with the Wikipedia API to retrieve relevant articles based on user queries.",
    Technologies: "Html,css,JavaScript"
    // other properties
  },
  {
    id: 4,
    title: "Test@gmail.com || 1234",
    URL: "https://6659ba842ab9850008f6dbd9--usermanager-test.netlify.app/",
    imageUrl: loginImage,
    description : "The User Manager Application is a web-based platform designed to facilitate user administration tasks for administrators",
    Technologies: "React ,Tailwind Css, Node.js, MongoDB and Express"
    // other properties
  },
  {
    id: 5,
    title: "rahul || rahul@2021",
    URL: "https://nnrnxttrendz.ccbp.tech/login",
    imageUrl: nxtrendsImage,
    description : "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can log in and can see a list of products with search, filters, sort by, etc.Implemented Different pages and routes for Login, Products, Product details using React Router components Route, Switch, Link, props, state, lists, event handlers, form inputs.Authenticating and authorizing users by taking username, password and doing login POST HTTP API Call and implementing filters by sending them as query parameters to product API calls.",
    Technologies: "React ,Tailwind Css, Node.js, Mysql"
    // other properties
  },
  {
    id: 6,
    title: "",
    URL: "https://swyft-project.onrender.com/",
    imageUrl: Swiftlogo,
    description : "Implemented Nxt Trendz application which is a clone for ECommerce applications like Amazon, Flipkart where users can log in and can see a list of products with search, filters, sort by, etc.Implemented Different pages and routes for Login, Products, Product details using React Router components Route, Switch, Link, props, state, lists, event handlers, form inputs.Authenticating and authorizing users by taking username, password and doing login POST HTTP API Call and implementing filters by sending them as query parameters to product API calls.",
    Technologies: "React ,Tailwind Css, Node.js, Mysql"
    // other properties
  }
  
  // Add more projects as needed
];

const Projects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with your preferred options
  }, []);
    return (
      <>
        <div className='h-[15vh] fixed top-0 left-0 w-full z-50 bg-white'>
          <Navbar />
        </div>
        <div className="container mt-16 mx-auto px-4 py-8 overflow-x-hidden">
          <h2 className="text-3xl font-semibold mb-4 mt-11">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div key={project.id} className="bg-white shadow-md rounded-lg p-6" data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}>
                <h3 className="text-xl font-semibold mb-2">
                  <a href={`${project.URL}`} className="flex items-center">
                    <FaLink className="ml-1 w-10 rounded-xl bg-orange-500 text-white p-1" />
                  </a>
                </h3>
                {project.imageUrl && (
                  <img src={project.imageUrl} alt="ProjectImage" className="mb-2" />
                )}
                <p className='text-orange-500'>{project.title}</p>
                <br/>
                <p className="text-gray-700">{project.description}</p>
                <br />
                <p className="text-orange-500 font-extrabold">{project.Technologies}</p>
              </div>
            ))}
          </div>
        </div>
        <button className='bg-orange-500  p-3 text-white font-extrabold rounded-tl-xl rounded-tr-xl  w-full' onClick={() => navigate("/services")}>Services</button>
      </>
    );
};

export default Projects;
