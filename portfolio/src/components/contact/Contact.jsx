import React from "react";
import "./contact.css"

const Contact = ({ email, phoneNumber }) => {
  return (
    <section id="contact" className="contact-container">
    
      <div className="contact"> GET IN TOUCH
      {phoneNumber && (
          <a href={`tel:${phoneNumber}`}>
           <i class="fa-sharp fa-solid fa-phone fa-beat-fade"></i>
          </a>
        )}
        <a href={`mailto:${email}`}>
        <i class="fa-regular fa-envelope fa-beat"></i>

        </a>
        
       
      </div>
      
    </section>
  );
};

export default Contact;
