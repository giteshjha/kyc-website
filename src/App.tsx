import React from 'react';
import './App.css';
import { Routes ,Route } from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import {Donate} from "./components/donate/donate";
import {Events} from "./components/events/events";
import {Footer} from "./components/footer/footer";
import {Home} from "./components/home/home";

function App() {
  return ( <div className={"main-page"}><Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/donate" element={<Donate/>}/>
            <Route path="/events" element={<Events/>}/>
        </Routes>
          <Footer/>
      </div>
  );
}

export default App;
