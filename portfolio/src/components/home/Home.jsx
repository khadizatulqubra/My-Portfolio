import React from 'react';
import "./home.css";
import Me from "../../assets/My-image.jpeg";
import HeaderSocials from './HeaderSocials';




const Home=() =>{
  return (
    <section className="home container" id= "home">
        <div className="intro">
            <img src={Me} alt="" className="home_img" />
            <h1 className="home_name">Khadizatul Qubra</h1>
            <span className="home_education"> I am a Fullstack developer student looking for an internship!</span>
            <HeaderSocials/>
            <a href="#contact" className='btn'>Discuss Opportunities</a>
           
        </div>

    </section>
  )
}

export default Home