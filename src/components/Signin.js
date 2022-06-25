import React from "react";
import {FaApple, FaFacebook, FaInstagramSquare, FaTwitter} from 'react-icons/fa';
import "../components/Signin.css";
import {FcGoogle} from 'react-icons/fc'

export default function Signin(){
    return(
        <div className="sign_container">
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
        </div>
    );
}