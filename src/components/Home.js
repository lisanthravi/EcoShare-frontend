 
 
 
import { Routes, Route, Router } from 'react-router-dom';
import Navbar from './Navbar';
import AirPollution from '../pages/AirPollution';
import Biodiversity from '../pages/Biodiversity';
import Chemicals from '../pages/Chemicals';
import ClimateChange from '../pages/ClimateChange';
import EnvironmentHealth from '../pages/EnvironmentHealth';
import LandUse from '../pages/LandUse';
import NaturalResources from '../pages/NaturalResources';
import WasteMaterialResources from '../pages/WasteMaterialResources';
import Homepage from './Homepage';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import About from '../pages/About';
import Login from './Login';
 
 

 
function Home() {
  return (
    <div className="App">

            <Navbar/>
  
            <Routes>
              <Route path="/" element={<Homepage />}/>
                <Route path="/air-pollution" element={<AirPollution/>} />   
                <Route path="/biodiversity" element={<Biodiversity/>} />   
                <Route path="/chemicals" element={<Chemicals/>} />   
                <Route path="/climate-change" element={<ClimateChange/>} />   
                <Route path="/environment-health" element={<EnvironmentHealth/>} />   
                <Route path="/land-use" element={<LandUse/>} />   
                <Route path="/natural-resources" element={<NaturalResources/>} />   
                <Route path="/waste" element={<WasteMaterialResources/>} />
                <Route path='/service' element={<Services/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                </Routes>
    </div>
  );
}

export default Home;
