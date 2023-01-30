import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useEffect } from "react";
const LoginForm = (props)=>
{   
const navigate = useNavigate();
const[email,setEmail] = useState("");
const[pass,setPass] = useState("");
//const[user,setUser] = useState(null);
const checkSubmittedForm = (e) =>
{ 
    e.preventDefault();
    console.log(email);
}
const handleClick = () =>
{   
    if(email === 'admin' && pass === 'admin')
{
    localStorage.setItem("logged",true);
    //setUser({email:email});
navigate("/Profile");
}
    else
    alert('Wrong Credentials');
}

useEffect(() => {
    if(localStorage.getItem("logged")==="true")
    navigate("/Profile");
}, []);

return(
        <div class = "login" >
        <h1 class = "formname">Login Page</h1>
            <form onSubmit = {checkSubmittedForm}   action="" class="formhai">
         <div class = "user-box">
   <label htmlFor="email">Email</label>
    <input class = "text" value = {email} onChange = {(e) => setEmail(e.target.value)}type="text" name="email" id="email"/>
 </div>
 <div class = "user-box">
    <label htmlFor="email">Password</label>
    <input class = "text" value = {pass} onChange = {(e) => setPass(e.target.value)} type="text" name="password" id="password"/>
 </div>
 <br></br>
 <br></br>
 <button class = "bt" type="submit" onClick={handleClick}>Login</button>
 {/* <br></br>
 <br></br> */}
<button class = "reg" onClick = {() => props.onFormSwitch('register')}>Don't have an account? Register</button>

            </form>
            </div>
    );
}

export default LoginForm;