import React from 'react';
import {useState} from 'react';

const RegisterForm = (props) => {
  const[Firstname, setFirstname] = useState("");
  const[LastName, setLastname] = useState("");
  const[Username, setUsername] = useState("");
  const[Age, setAge] = useState("");
  const[email, setEmail] = useState("");
  const[Contact, setContact] = useState("");
  const[pass, setPass] = useState("");

  const checkSubmittedForm = (e) => {
    e.preventDefault();
    console.log(email);
  }

    return(
        <div className = "RegForm">
        <h1 class="formname">Create Account</h1>
        <form onSubmit = {checkSubmittedForm}    action ="">
            <div class="reg-box">
               <label htmlFor = "">First Name</label>
                <input class = "text" type="text" name="First Name"></input>
            </div>
            <div class="reg-box">
            <label htmlFor = "">Last Name</label>
            <input class = "text" type="text" name="Last Name"></input>
            </div>
            <div class="reg-box">
            <label htmlFor = "">User Name</label>
            <input class = "text" type="text" name="UserName"></input>
            </div>
            <div class="reg-box">
            <label htmlFor = "">Age</label>
            <input class = "text" type="text" name="Age"></input>
            </div>
            <div class="reg-box">
            <label htmlFor = "">Email</label>
            <input class = "text" value = {email} onChange = {(e) => setEmail(e.target.value)}type="text" name="Email"></input>
            </div>
            <div class="reg-box">
            <label htmlFor = "">Contact</label>
            <input class = "text" type="text" name="Contact"></input>
            </div>
            <div class="reg-box">
            <label htmlFor = "">Password</label>
            <input class = "text" value = {pass} onChange = {(e) => setPass(e.target.value)}type="text" name="Password"></input>
            </div>
            <br></br>
            <br></br>
            <button class = "bt" type="submit">Register</button>
<button class = "reg" onClick= {() => props.onFormSwitch('login')}>Already have an account? Login</button>

            </form>
        </div>

    );
}

export default RegisterForm;