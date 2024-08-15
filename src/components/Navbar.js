import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <h1 className='n-h1'>EcoShare</h1>
            </div>
            <ul className='head'>
                <li><Link to ="/" className='lis'>Home</Link></li>
                <li><Link to ="/service" className='lis'>Services</Link></li>
                 
                <li><Link to ="/about" className='lis'>About</Link></li>
                
                <li><Link to ="/Contact" className='lis'>Contact</Link></li>
                <li><Link to ="/login" className='lis'>Login</Link></li>

                {/* <li><Link to="/air-pollution">Air Pollution</Link></li> */}
                {/* <li><Link to="/biodiversity">Biodiversity</Link></li>
                <li><Link to="/chemicals">Chemicals</Link></li>
                <li><Link to="/climate-change">Climate Change</Link></li>
                <li><Link to="/environment-health">Environment & Health</Link></li>
                <li><Link to="/land-use">Land Use</Link></li>
                <li><Link to="/natural-resources">Natural Resources</Link></li>
                <li><Link to="/waste">Waste & Material Resources</Link></li> */}
            </ul>
        </nav>
    );
};

export default Navbar;
