import React, { useState,useEffect } from 'react';
import { TextField } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from "emailjs-com";
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';
// import ParticlesComponent from './Particles';
import ParticlesComponentHome from './ParticlesHome';
import mailsend from "../assests/assests/mailsound.mp3";
import Aos from 'aos';
import "aos/dist/aos.css";
const Contact = () => {

    const isValidEmail = (email) => {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    useEffect(()=>{
        Aos.init({duration : 2000})
    })
    const history = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isEmailSent, setIsEmailSent] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!isValidEmail(formData.email)) {
            toast.error('Email is not valid');
            return;
          }
        emailjs.sendForm('service_jtq6bqh', 'template_t68buzx', e.target, 'HosHaVrNYwTqgDnKz')
            .then((result) => {
                const audio = new Audio(mailsend);
                audio.play();
                toast.success('Email sent successfully!');
                setIsEmailSent(true);
                setTimeout(() => {
                    setIsEmailSent(false);
                    history('/home');
                }, 6000);
            }, (error) => {
                console.log(error.text);
            });

        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <ToastContainer />
            <ParticlesComponentHome />
            <div className='p-10 flex justify-center items-center h-[100vh] font-gothic'>
                <form onSubmit={sendEmail} className='bg-white shadow-2xl p-5 rounded-lg w-[300px] md:w-[700px] lg:w-[1100px] relative z-10'>
                    <h2 className='text-center text-orange-500 text-2xl underline md:text-4xl'>Contact us</h2>
                    <br/>
                    <br />
                    <TextField
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        fullWidth
                        label="Enter Name"
                        variant="standard"
                        className='text-orange-500'
                        required
                    />
                    <br />
                    <br />
                    <TextField
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        fullWidth
                        label="Enter Mail"
                        variant="standard"
                        className='text-orange-500'
                        required
                    />
                    
                    <br />
                    <br />
                    <TextField
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        fullWidth
                        label="Message"
                        variant="standard"
                        className='text-orange-500'
                        required
                    />
                    <br />
                    <br />
                    <br />
                    <br />
                    <button type="submit" className='bg-blue-600 text-white p-4 w-[200px] mx-auto rounded-md'>Submit</button>
                </form>
                {isEmailSent && <Confetti numberOfPieces={1000} />}
            </div>
        </>
    );
};

export default Contact;
