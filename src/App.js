import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import { About } from "./components/Pages/About";
import { Blog } from "./components/Pages/Blog";
import { Contact } from "./components/Pages/Contact";
import { Footer } from "./components/Footer";
import Signin from "./components/Signin";
import Signup from "./components/Signup.js";
import Allitem from "./components/Allitems";


 export default function App() {
  return (
      <Router>
        <NavBar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/blog" element={<Blog/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/Signin" element={<Signin/>} />
            <Route path="/Signup" element={<Signup/>} />
            <Route path="/all" element={<Allitem/>} />
          </Routes>
        </div>
        <Footer/>
      </Router>
  );
}


