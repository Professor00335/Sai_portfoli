import React from "react";

const About = () => {
    return ( 
        <section class="about" id = "about">
            <div className="container">
                <div className="about-content">
                    <div className="img-slide">
                        <img src="https://i.pinimg.com/564x/1c/7b/91/1c7b91318793d98cab51d3ae20755574.jpg" alt="mee" class="img-side__main-img"  />
                    </div>
                    <div className="text-side">
                        <h3>About Me</h3>
                        <h4>
                            Front-end Developer<br></br>
                            based in Chennai , India. 📍
                        </h4>
                        <p>
                            "Hey, my name is Sai , and I'm a Frontend Developer. My passion is to create and develop a clean UI/UX for my users."
                            <br></br>
                            <br></br>
                            "My main stack currently is React.js in combination with CSS and Html5."
                        </p>
                    </div>
                </div>
            </div>
        </section>
     );
    } 
export default About;