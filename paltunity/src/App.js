import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { BrowserRouter, Link,Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import Signup from './Components/Signup/Signup'
import Accueil from './Components/Accueil/Accueil';
import Welcome from './Components/Welcome/Welcome';
import Suggestionconsult from './Components/Suggestionconsult/Suggestionconsult';
class App extends Component {
  render() {
    return (
      <div>
        
             <Suggestionconsult/>
        
         <Welcome/>
         <Signup/>
       
       </div>
    );
  }  
}
export default App;
