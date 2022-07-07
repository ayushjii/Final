import React from "react";
import {FaApple, FaFacebook, FaInstagramSquare, FaTwitter} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc'
import styled from "styled-components";

const SigninStyles =styled.div`
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
.box button i{
    font-size: 20px;
    margin-right:10px;
}
.box-one button span {
    display: block;
    width: 150px;
    text-align: left;
}
.box-one button {
    margin:0 .5rem;
}
.box-one i {
    font-size: 1.8rem;
}
.box-two input{
    position: relative;
    width:300px;
    height:55px;
    outline: none;
    border: 1px solid rgb(211, 210, 210);
    border-radius: 10px;
    padding-left: 10px;
    
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
h5{
    margin:10px 2rem;
    font-size: medium;
    text-align: center;
    color: red;
}
input{
    margin-top: .3rem ;
    margin-bottom: 8px;
}
button{
    cursor:pointer;
}
span{
    font-size: 14px;
}
.col-twi{
    color: #00acee;
}
.col-goo{
    color:rgb(21, 243, 21) ;
}
.col-app{
    color:#000;
}
.col-face{
    color:#4267b2
}
.col-ig{
   color: #f09433 ;
}
`

export default function Signin(){
    return(
        <SigninStyles>
        <div className="box box-one">
            <button>
            <i className="col-twi"><FaTwitter /></i>
            <span>Sign in with Twitter</span>
            </button>
            <button>
            <i className="col-goo"><FcGoogle /></i>
            <span>Sign in with Google</span>
            </button>
            <button>
            <i className="col-app"><FaApple /></i>
            <span>Sign in with Apple</span>
            </button>
            <button>
             <i className="col-face"><FaFacebook /></i>
            <span>Sign in with Facebook</span>
            </button>
            <button>
            <i className="col-ig"><FaInstagramSquare /></i>
            <span>Sign in with Instagram</span>
            </button>
        </div>
        
            <div>
                <h5>or</h5>
                <div className="box box-two">
                 <form>
                    <input  type="text" placeholder="Username" />
                    <input  type="password" placeholder="Password" />
                 </form>
                 <button type="submit" className="next-btn">Sign Up</button>
                 <button>Forgot password</button>
                <p>
                Don't have an acoount? 
                <a href={`/Signup`}>Sign up</a>
                </p>
                </div>
            </div>
        </SigninStyles>
    );
}