import React from "react";
import {FaApple, FaFacebook, FaGoogle, FaInstagram, FaTwitter} from 'react-icons/fa';
import "../components/Signin.css"

export default function Signin(){
    return(
        <div className="sign_container">
        <div className="box box-one">
            <button>
            <FaTwitter className="fab" />
            Sign in with Twitter
            </button>
            <button>
            <FaGoogle className="fab"/>
            Sign in with Google
            </button>
            <button>
            <FaApple className="fab" />
            Sign in with Apple
            </button>
            <button>
            <FaFacebook className="fab"/>
            Sign in with Facebook
            </button>
            <button>
            <FaInstagram className="fab"/>
            Sign in with Instagram
            </button>
            
            <div>
                <h5>or</h5>
                <div className="box box-two">
                 <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                 </form>
                 <button className="next-btn">Next</button>
                 <button>Forgot password</button>
                </div>
            <p>
                Don't have an acoount? 
                <a href="/Signup">Sign up</a>
            </p>
            </div>
        </div>
        </div>
    );
}