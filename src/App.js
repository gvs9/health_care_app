import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import HealthFacts from './components/HealthFacts';
import Notifications from './components/Notifications';
import CommunityClub from './components/CommunityClub';
import ExerciseSchedule from './components/ExerciseSchedule';

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import About from './pages/About';
import MedicationList from './components/MedicationList';

function App() {
  return (
    //set routes to go to different pages
      <BrowserRouter>
       <Routes>
      
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      
      <Route path="/healthfacts" element={<HealthFacts/>} />
      <Route path="/notify" element={<Notifications/>} />
      <Route path="/community" element={<CommunityClub/>} />
      <Route path="/exercise" element={<ExerciseSchedule/>} />
      <Route path="/medlist" element={<MedicationList/>} />
        
      </Routes>
      </BrowserRouter>
     
  
  );
}

ReactDOM.render(<App />, document.getElementById('root'));


export default App;
