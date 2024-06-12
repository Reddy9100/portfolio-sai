import React, { useEffect } from 'react';
import { Carousel } from 'antd';
import Html from "../assests/assests/Html.png";
import CSS from "../assests/assests/css.png";
import JS from "../assests/assests/javascript.png";
import Sql from "../assests/assests/mysql.png";
import Mongo from "../assests/assests/mongo.png";
import Node from "../assests/assests/node.png";
import python from "../assests/assests/python.png";
import react from "../assests/assests/react.png";
import tailwind from "../assests/assests/tailwind.png"
import { Progress } from "antd"
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './Navbar';

const Skills = () => {

  const navigate = useNavigate()

  useEffect(()=>{
    AOS.init()
  })
  return (
    <>
    <div className="bg-white h-[15vh]">
    <Navbar />
    </div>
    <div className='skills  bg-white h-auto font-gothic justify-center items-center overflow-x-hidden  ' data-aos ="fade-right" data-aos-suration = "3500"  >
      <Carousel autoplay >
        <div className='bg-center'>
          <img src={Html} alt='Html5' className='mx-auto'/>
        </div>
        <div>
          <img src={CSS} alt='CSS3' className='mx-auto'/>
        </div>
        <div>
          <img src={JS} alt='Javascript' className='mx-auto'/>
        </div>
        <div>
          <img src={Sql} alt='MySQL' className='mx-auto'/>
        </div>
        <div>
          <img src={Mongo} alt='MongoDB' className='mx-auto'/>
        </div>
        <div>
          <img src={Node} alt='Node.js' className='mx-auto'/>
        </div>
        <div>
          <img src={python} alt='Python' className='mx-auto'/>
        </div>
        <div>
          <img src={react} alt='React' className='mx-auto'/>
        </div>
        <div>
          <img src={tailwind} alt='React' className='mx-auto'/>
        </div>
      </Carousel>
      <div className="w-[auto] p-10 md:text-5xl text-black">
      <div className="cardimage" data-aos = "zoom-in-up" data-aos-duration = "1000">
        <label
          for="html"
          style={{
            
            fontWeight: "700",
            fontSize: "20px",
            textShadow : "0px 2px 2px 2px green"
          }}
        >
          HTML
        </label>

        <Progress data-aos = "fade-left" data-aos-duration = "1000"
          percent={80}
          format={(percent) => (
            <span style={{  fontSize: "20px" }}>{percent}%</span>
          )}
          strokeColor={{ "0%": "orange", "100%": "#e34c26" }}
          className="bright-pulse-progress"
          status="active"
        />

        <label
          for="html"
          style={{
            
            fontWeight: "700",
            fontSize: "20px",
            textShadow : "2px 2px 2px 2px green"
          }}
        >
          CSS
        </label>

        <Progress data-aos = "fade-left" data-aos-duration = "1300"
          percent={80}
          format={(percent) => (
            <span style={{  fontSize: "20px" }}>{percent}%</span>
          )}
          strokeColor={{ "0%": "black	", "100%": "#264de4" }}
          className="bright-pulse-progress"
          status="active"
        />

<label
          for="html"
          style={{
            
            fontWeight: "700",
            fontSize: "20px",
            textShadow : "2px 2px 2px 2px green"
          }}
        >
          TailWind
        </label>

        <Progress data-aos = "fade-left" data-aos-duration = "1300"
          percent={60}
          format={(percent) => (
            <span style={{  fontSize: "20px" }}>{percent}%</span>
          )}
          strokeColor={{ "0%": "black	", "100%": "#264de4" }}
          className="bright-pulse-progress"
          status="active"
        />


        <label
          for="html"
          style={{
            
            fontWeight: "700",
            fontSize: "20px",
            textShadow : "2px 2px 2px 2px green"
          }}
        >
          JAVASCRIPT
        </label>

        <Progress data-aos = "fade-left" data-aos-duration = "1500"
          percent={70}
          format={(percent) => (
            <span style={{  fontSize: "20px" }}>{percent}%</span>
          )}
          strokeColor={{ "0%": "black", "100%": "yellow" }}
          className="bright-pulse-progress"
          status="active"
        />

        <label
          for="html"
          style={{
            
            fontWeight: "700",
            fontSize: "20px",
            textShadow : "2px 2px 2px 2px green"
          }}
        >
          PYTHON
        </label>

        <Progress data-aos = "fade-left" data-aos-duration = "1700"
          percent={70}
          format={(percent) => (
            <span style={{  fontSize: "20px" }}>{percent}%</span>
          )}
          strokeColor={{ "0%": "yellow", "100%": "blue" }}
          className="bright-pulse-progress"
          status="active"
        />

        <label
          for="html"
          style={{
            
            fontWeight: "700",
            fontSize: "20px",
            textShadow : "2px 2px 2px 2px green"
          }}
        >
          MYSQL
        </label>

        <Progress data-aos = "fade-left" data-aos-duration = "1100"
          percent={80}
          format={(percent) => (
            <span style={{  fontSize: "20px" }}>{percent}%</span>
          )}
          strokeColor={{ "0%": "orange","50%":"lightblue","100%": "black" }}
          className="bright-pulse-progress"
          status="active"
        />

        <label
          for="html"
          style={{
            
            fontWeight: "700",
            fontSize: "20px",
            textShadow : "2px 2px 2px 2px green"
          }}
        >
          NODE
        </label>

        <Progress data-aos = "fade-left" data-aos-duration = "1500"
          percent={60}
          format={(percent) => (
            <span style={{  fontSize: "20px" }}>{percent}%</span>
          )}
          strokeColor={{ "0%": "lightgreen", "100%": "green" }}
          className="bright-pulse-progress"
          status="active"
        />

        <label
          for="html"
          style={{
            
            fontWeight: "700",
            fontSize: "20px",
            textShadow : "2px 2px 2px 2px green"
          }}
        >
          REACT
        </label>

        <Progress 
          percent={70}
          format={(percent) => (
            <span style={{  fontSize: "20px" }}>{percent}%</span>
          )}
          strokeColor={{ "0%": "black", "100%": "blue" }}
          className="bright-pulse-progress"
          status="active"
        />

        <label
          for="html"
          style={{
            
            fontWeight: "700",
            fontSize: "20px",
            textShadow : "2px 2px 2px 2px green"
          }}
        >
          MONGODB
        </label>

        <Progress
          percent={60}
          format={(percent) => (
            <span style={{  fontSize: "20px" }}>{percent}%</span>
          )}
          strokeColor={{ "0%": "black", "100%": "green" }}
          className="bright-pulse-progress"
          status="active"
        />
        </div>
    </div>
    <button className='bg-orange-500 font-extrabold rounded-tl-xl rounded-tr-xl text-white  p-4 w-full' onClick={()=>navigate("/certificates")} >Certificates</button>
  </div>
  </>
  )
};

export default Skills;
