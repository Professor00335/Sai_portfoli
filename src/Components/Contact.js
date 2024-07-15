import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { MdMarkEmailUnread } from "react-icons/md";
const Contact = () => {
    return ( 
        <section id="contact" class = "contact">
            <div className="container">
                <div className="contact_content">
                    <div className="contact_title">
                        <p>Contact</p>
                        <h3>Don't be shy! Hit me up! 👇</h3>
                    </div>
                    <div className="contact_icons">
                        <div class="contact__icon-box">
                            <span>
                            <GrMapLocation size={22} />
                            </span>
                            <div className="contact__info">
                                <h3>Location</h3>
                                <p>Chennai, India</p>
                            </div>
                        </div>
                        <div class="contact__icon-box">
                            <span>
                            <MdMarkEmailUnread size={22} />
                            </span>
                            <div className="contact__info">
                                <h3>Mail</h3>
                                <a href="mailto:lakshmisai55700@gmail.com">lakshmisai55700@gmail.com</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Contact;