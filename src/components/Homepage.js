import React from 'react'
import './Homepage.css'
import { Link } from 'react-router-dom';
 import i from '../images/air-pol.jpg'
 import i2 from '../images/bio-div.jpg'
const homepage = () => {
  return (
    <>
    <div className='home-outer'>
    <div className='home-text'>
        <h1 className='home-h1'>Joining Hands for a Greener Tomorrow</h1>
        <p className='home-para'>EcoShare strives to bring together environmentalists from all walks of life to share ideas, projects, and tips, fostering a community committed to preserving our planet.</p>
        <Link to="/service" className='home-button'>View all Services</Link>
    </div>
        <div className='home-image' />
    </div>
    <div className='service-outer'>
    <div className='service-topic'>
      <h1 className='s-h1'>Our Services</h1>
       
    <Link to="/service" className='s-button'>View all Services</Link>
       
    </div>
    <br></br>
      <h1>Project Sharing and Environmental Tips</h1>
      <div className='s-1'>
         
         <img src={i} className='img-1'/>
         <h2><Link to="/air-pollution" className='lis'>Air Pollution</Link></h2>
      </div>
      <div className='s-2'>
         
         <img src={i2} className='img-1'/>
         <h2><Link to="/biodiversity" className='lis'>Biodiversity</Link></h2>
      </div>
    </div>
    <div className='f-outer'>
      <br></br>
      <h1>Features & Benefits</h1>
      <div className='f-1'>
        <h1>Features</h1>
        <ul className='f-li1'>
          <li className='f-l'>Eco-Friendly Tips</li>
          <li className='f-l'>Inspiring Projects</li>
          <li className='f-l'>Green Lifestyle Advice</li>
          <li className='f-l'>Expert Resources</li>
          <li className='f-l'>Engaging Community</li>
        </ul>
      </div>

      <div className='f-2'>
        <h1>Features</h1>
        <ul className='f-li1'>
          <li className='f-l'>Environmental Education</li>
          <li className='f-l'>Community Support</li>
          <li className='f-l'>Sustainable Lifestyle</li>
          <li className='f-l'>Eco-Conscious Inspiration</li>
          <li className='f-l'>A Greener Future</li>
        </ul>
      </div>
      <div className='f-img'></div>
    </div>
    <div className='c-outer'>
      <br></br>
<h1>Have Questions?</h1>
<p className='f-p'>Please feel free to call or email us, or use our contact form to get in touch with us. We look forward to hearing from you!</p>
<h3 className='f-h3'>Emergency? Call Us</h3>
<p className='f-h3'>+1234567890</p>
<h3 className='f-h3'>Send Us Mail</h3>
<p className='f-h3'>www.example.com</p>
    </div>
    </>
  )
}

export default homepage
