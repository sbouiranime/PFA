import React, { Component } from 'react';
import './Signup.css';
import { FcGoogle } from "react-icons/fc";
import signupimage from '../Assets/signupimage.png';

class Signup extends Component {
  render() {
    return (
      <div className="signup-container">
       <h2 className="signup-title">SIGN UP</h2>
        <div className="signup-content">
        
          <img src={signupimage} alt="Signup" className="signup-image" />
          
          <div className="signup-form">
              
              <div className="input">
              <div className="input-field">
                <input type="text" placeholder="Name" />
              </div>
              <div className="input-field">
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-field">
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-field">
                <input type="submit" value="Submit" />
              </div>
              <div className="input-field">
                <button className="button-google">
                  <FcGoogle style={{ marginRight: '9px' }} /> Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
