// src/components/Home.js
import React ,{useEffect}from 'react';

import { useNavigate } from 'react-router';

const Home = () => {
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem('auth')) navigate("/about")
  })

  const formSubmitter = (e) => {
    e.preventDefault();
    if (e.target.elements.name.value === 'hello' || e.target.elements.psw.value === 'hello') {
      navigate('/about');

      localStorage.setItem('auth',true)
    }
    else{
      console.log("incorrect");
    }
  };

  return (
    <div>
      This is the login page.
      <form onSubmit={formSubmitter}>
        <input type='text' name='name' placeholder='username' />
        <input type='password' name='psw' placeholder='password' />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default Home;
