import React from "react";
import "../components/Signup.css";

export default function Signup(){
return(
    <div className="sign_container">
    <div className="box box-two">
     <form>
        <input  type="text" placeholder="Enter Your Username" />
        <input  type="date" placeholder="Date Of Birthday" />
        <input  type="email" placeholder="Enter Your Email Address" />
        <label  type="text">Gender  </label>
        <select>
        <option>Male</option>
        <option>Female</option>
        <option>Transgender</option>
        </select>
        <input  type="password" placeholder="Enter Password" />
     </form>
     <button type="submit" className="next-btn">Sign In</button>
     <button>Forgot password</button>
    <p>
    Already have an acoount? 
    <a href={`/Signin`} >Sign In </a>
    </p>
    </div>
   </div>
  );
}