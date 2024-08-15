import React from 'react'
import i from '../images/air-pol.jpg'
import { Link } from 'react-router-dom';
import i2 from '../images/bio-div.jpg'
import che from '../images/che.jpg'
import cli from '../images/climate.jpg'
import env from '../images/environment.jpg'
import land from '../images/land.jpg'
import waste from '../images/waste.jpg'
import natural from '../images/natural.jpg'
import '../components/Homepage.css'
const Services = () => {
  return (
    <div className='se-out'>
       <div className='s-1'>
         
         <img src={i} className='img-1'/>
         <h2><Link to="/air-pollution" className='lis'>Air Pollution</Link></h2>
      </div>
      <div className='s-1'>
         
         <img src={i2} className='img-1'/>
         <h2><Link to="/biodiversity" className='lis'>Biodiversity</Link></h2>
      </div>
      <div className='s-1'>
         
         <img src={che} className='img-1'/>
         <h2><Link to="/chemicals" className='lis'>Chemicals</Link></h2>
      </div>
      <div className='s-1'>
         
         <img src={cli} className='img-1'/>
         <h2><Link to="/climate-change" className='lis'>Climate Change</Link></h2>
      </div>
      <div className='s-1'>
         
         <img src={env} className='img-1'/>
         <h2><Link to="/environment-health" className='lis'> Environment & Health</Link></h2>
      </div>
      <div className='s-1'>
         
         <img src={land} className='img-1'/>
         <h2><Link to="/land-use" className='lis'>Land Use</Link></h2>
      </div>
      <div className='s-1'>
         
         <img src={natural} className='img-1'/>
         <h2><Link to="/natural-resources" className='lis'>Natural Resources</Link></h2>
      </div>
      <div className='s-1'>
         
         <img src={waste} className='img-1'/>
         <h2><Link to="/waste" className='lis'>Waste & Material Resources</Link></h2>
      </div>

    </div>
  )
}

export default Services
