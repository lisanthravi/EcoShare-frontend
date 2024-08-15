import React from 'react'
import '../components/Homepage.css'
import img3 from '../images/img4.webp'
const About = () => {
  return (
    <>
      <div className='about-outer'>
        <div className='about-text'>
            <h1 className='home-h1'>Mission statement</h1>
            <br></br>
            <p className='home-para'>At EcoShare, we believe in a world where every individual is empowered to make a positive impact on the environment. We provide a platform for environmentalists to share tips, projects, and ideas, and to connect with like-minded individuals. Our mission is to create a community that inspires and supports each other in living a green lifestyle and protecting the planet for generations to come.</p>
        </div>
            <img src={img3} className='img3'></img>
    </div>
    </>
      
  )
}

export default About
