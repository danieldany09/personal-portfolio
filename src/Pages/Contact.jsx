import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { CiMail } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoClose } from "react-icons/io5";

const Contact = () => {
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const form = useRef(null);
  const firstNameInput = useRef(null);

  const contact_info = [
    { 
      logo: <CiMail/>, 
      text: "danieharish@gmail.com",
      link: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&su=Hi+There&to=danieharish@gmail.com&body=body+goes+here"
    },
    { 
      logo: <FaWhatsapp/>, 
      text: "+91 9345844496",
      link: "https://wa.me/9345844496?text=Heyy" 
    },
    {
      logo: <CiLocationOn/>,
      text: "Madurai",
      link: "https://www.google.com/maps/d/viewer?mid=1IpMIVqw64c8uaBVt1h-kM3yQoLw&hl=en&ll=9.902441419108333%2C78.11680549999998&z=12"
    },
  ];

  const showAlert = (message, type) => {
    setAlert({ show: true, message, type });
    setTimeout(() => {
      setAlert({ show: false, message: '', type: '' });
    }, 3000);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const isEmpty = Array.from(formData.values()).every((value) => value.trim() === '');
    
    if(isEmpty) {
      console.log(process.env)
      showAlert('Please fill in all the required fields', 'error');
      firstNameInput.current.focus();
    } else {
      emailjs.sendForm('service_rcgkziz', 'template_57ffqnn', form.current,process.env.REACT_APP_EMAIL_API_KEY)
        .then((result) => {
          console.log(result.text);
          showAlert('Message sent successfully!', 'success');
          e.target.reset();
        }, (error) => {
          console.log(error.text);
          showAlert('Failed to send message. Please try again.', 'error');
        });
    }
  };

  return (
    <section id="Contact" className="contact-section">
      {alert.show && (
        <div className={`custom-alert ${alert.type}`}>
          <span>{alert.message}</span>
          <button 
            onClick={() => setAlert({ show: false, message: '', type: '' })} 
            className="alert-close-btn"
          >
            <IoClose />
          </button>
        </div>
      )}
      
      <div className="contact-container">
        <h3 className="contact-title">
          <span className="highlight">Contact Me</span>
        </h3>
        <p className="contact-subtitle">Get in touch</p>
       
        <div className="contact-content">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              placeholder="Your Name"
              name="user_name"   
              ref={firstNameInput}      
            />
            <input 
              type="Email" 
              placeholder="Your Email Address"
              name="user_email"
            />
            <textarea 
              placeholder="Your Message" 
              name="message"
            />
            <div className='submit-button-section'>
              <button className="submit-button">
                <input type="submit" value="Send" />
              </button>
            </div>
          </form>

          <div className="contact-info">
            {contact_info.map((contact, i) => (
              <div key={i} className="info-item">
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  <div className="info-icon">
                    {contact.logo}
                  </div>
                </a>
                <a href={contact.link} target="_blank" rel="noopener noreferrer">
                  <p className="info-text">{contact.text}</p>
                </a>  
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;