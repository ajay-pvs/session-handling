
import React ,{useEffect, useState}from 'react';
import { useNavigate } from 'react-router-dom';
const About = () => {
  const navigate =useNavigate()
  const[logout,setLogout]=useState(false)

  useEffect(()=>{
    if(!localStorage.getItem("auth"))navigate("/")
  },[logout])
  const logoutHandler = (e) => {
   e.preventDefault()
   localStorage.removeItem("auth")
   setLogout(true)
  };

  return (
    <div>
      This is the about page.
      <button onClick={logoutHandler}>logout</button>
    </div>
  );
};

export default About;
