import React from "react";
import styled from "styled-components";
// import "../components/Signup.css";

const SignupStyles =styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #cbc5c5;
    width:450px;
    height: 550px;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgb(110, 110, 110. .2);
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    font-family: 'Poppins' , sans-serif;

.box,
.box button{
    display: flex;
    align-items: center;
}
.box{
    width:300px;
    height: 240px;
    flex-direction: column;
    justify-content: space-evenly;
}
.box button {
    width: 300px;
    height: 40px;
    background-color: #fff;
    outline: none;
    font-weight: bold;
    border: 1px solid rgb(211, 210, 210);
    border-radius: 20px;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    padding: 10px 0;
}
.box-two input label{
    position: absolute;
    top: 0;
}
.box-two input::placeholder{
    font-size: 1.2rem;
}
.box-two input:focus{
    border:2px solid #00acee;
}
.box-two
 .next-btn{
    background-color: #121212;
    color: #fff;
}

.sign_container p{
    font-size: 1.3rem;
    color: rgb(0, 0, 0);
}
.sign_container p a{
    text-decoration: none;
    color: #00acee;
}
input{
    margin-bottom: 8px;
}
label{
    color:#000;
    font-size: large;
    font-weight: bolder;
}
select{
    border-radius: 8px;
    border-color: #000;
    margin-bottom: 1rem;
    width: 200px;
    height: 40px;
}
button{
    margin-top: .4rem;
    margin-bottom: 1rem ;
}
`

export default function Signup(){
return(
    <SignupStyles className="sign_container">
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
   </SignupStyles>
  );
}