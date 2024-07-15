import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
const footer = () => {
    const year = new Date();
    return ( 
        <footer>
            <div className="container">
                <div className="Copyright">
                    <h3>Copyright &copy; {year.getFullYear()} . All Rights are reserved</h3>
                    <div className="footerc__socials">
                        <a aria-label="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/a-sai-b84734285/">
                             
                            <CiLinkedin size={30} />
                            
                        </a>
                        <a aria-label="github" target="_blank" rel="noreferrer" href="https://github.com/zer356v">
                        <FiGithub size={25} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
     );
   
}
 
export default footer; 