import React, { Component } from 'react';
import './Suggestionconsult.css';

class Suggestionconsult extends Component {
  render() {
    return (
        <div className="suggestion-container">
        <h2 className="suggestion-title">Suggestion Consultation </h2>
        <h4 className="suggestiontype-title">Type </h4>
        <button className="button-boycott">Boycott</button> <br/>
        <button className="button-alternative">Alternative</button><br/>
        <button className="button-complaint">Complaint</button> <br/>
      </div>
      

    );
 
  }
}

export default Suggestionconsult;
