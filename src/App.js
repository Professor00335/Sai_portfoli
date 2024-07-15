import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import './index.css'
import './Home.css'
import './About.css'
import './Project.css'
import './Contact.css'
import './Footer.css'
function App(){

  const defaultReload = (e) =>{
    e.preventDefault();
  }
  return(
    <div>
      <Navbar
        defaultReload={defaultReload}
      />
      <Home/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
