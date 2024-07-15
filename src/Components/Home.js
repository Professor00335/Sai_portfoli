import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
const Home = () => {
    return (
        <section id="home" class = "hero">
            <div className="container">
                <div className="content">
                    <div className="hero-main">
                        <div className="hero-text">
                            <h1>Front-End React Developer</h1>
                             <p>
                                Hi,I'm Sai Arumugam. A Passionate Front-end React Developer based in Chennai , India. 📍
                             </p>
                             <span>
                              <a aria-label="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/a-sai-b84734285/">
                                <CiLinkedin size={32} />
                                </a>
                                <a aria-label="github" rel="noreferrer" target="_blank" href="https://github.com/zer356v">
                                <FiGithub size={23.5} />
                                </a>
                             </span>
                        </div>
                        <div className="hero-img"></div>
                        <div className="skills">
                            <p>Tech Stack</p>
                            <div className="logos">
                                <ul>
                                    <li>
                                        <img src="https://skillicons.dev/icons?i=html,css" alt="skill-icon"></img>
                                    </li>
                                   
                                    <li>
                                        <img src="https://skillicons.dev/icons?i=react,next" alt="skill-icon"></img>
                                    </li>
                                    
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Home;