 
import './App.css';
import Navbar from './components/Navbar.js'
import { Routes, Route, Router } from 'react-router-dom';
import AirPollution from './pages/AirPollution.js';
import Home from './components/Home.js';
function App() {
  return (
    <div className="App">

            <Navbar/>
            <Routes>  
                <Route path="/air-pollution" element={<AirPollution />} />   
                </Routes>
    </div>
  );
}

export default App;
