// Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Contact Us</h1>
      <form className="contact-form">
        <input type="text" className="contact-input" placeholder="Name" />
        <input type="email" className="contact-input" placeholder="Email" />
        <textarea className="contact-textarea" placeholder="Message"></textarea>
        <button className="contact-button">Send</button>
      </form>
    </div>
  );
};

export default Contact;
