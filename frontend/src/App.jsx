import logo from './logo.svg';
import './App.css';
import React, {useState } from 'react';

import LoginForm from './LoginForm';
import "./LoginForm.css";

import RegisterForm from './RegisterForm';
import "./RegisterForm.css"

import Profile from "./Profile.jsx";
import "./Profile.css";

import Dummy from "./Dummy.jsx";
import{Route} from 'react-router-dom';
//import { BrowserRouter } from 'react-router-dom';
import{Routes} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

const App = () =>
{
   const [currentform, setcurrentform] = useState("login");  //default form is login
   const toggleForm = (formName) =>
   {
    setcurrentform(formName);   //change current form to given name
   }
   

  return(
    <HashRouter>
    <div className="returnpage">
      {
    <Routes>
    <Route path="/" element={currentform === "login" ?
               ( <LoginForm  onFormSwitch={toggleForm} /> ): (<RegisterForm  onFormSwitch={toggleForm} />)}/>
    <Route path= "/Profile" element={<Profile/>} />
      </Routes>
    }
      </div>
    </HashRouter>
    );
}

export default App;
          