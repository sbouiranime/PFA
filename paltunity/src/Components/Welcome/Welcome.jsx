import React, { Component } from 'react';
import './Welcome.css';
import { FaUser } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";

import welcomeimage from '../Assets/welcomeimage.png';

class Welcome extends Component {
  render() {
    return (
      <div>
        <img src={welcomeimage} alt="Welcome" className="welcome-image" />
        <h2 className="welcome-title">Welcome</h2>
        
        <div className="input-group">
          <FaUser style={{ color: 'green', fontSize: '3rem' , marginRight: '9px'}} />
          <input type="text" placeholder="Username" />
        </div>
        
        <div className="input-group">
          <MdOutlineMail style={{ color: 'red', fontSize: '3rem',marginRight: '9px' }}/>
          <input type="text" placeholder="Email" />
        </div>
        
        <div className="input-group">
          <IoIosLock style={{ color: 'black', fontSize: '3rem', marginRight: '9px'}}/>
          <input type="text" placeholder="Password" />
        </div>
        <button className="login-button">
         <span style={{ color: "white" }}>L</span>
         <span style={{ color: "white" }}>o</span>
         <span style={{ color: "black" }}>g</span>
         <span style={{ color: "black" }}>i</span>
        <span style={{ color: "black" }}>n</span>
       </button>
      </div>
      
    );
  }
}

export default Welcome;
