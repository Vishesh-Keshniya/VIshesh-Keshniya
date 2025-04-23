import React, { useState } from "react";
import { FaLinkedin, FaInstagram, FaEnvelope, FaGithub } from "react-icons/fa";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (!name || !email || !message) {
      alert("Please fill in all fields.");
      setLoading(false);
      return;
    }

    const templateParams = {
      user_name: name,
      user_email: email,
      message: message,
    };

    emailjs
      .send(
        "service_7e8crbc",   // Replace with your Service ID
        "template_9xltqzi",   // Replace with your Template ID
        templateParams,
        "wMFW1dZGkQzRH0qa2"     // Replace with your Public Key
      )
      .then(
        (response) => {
          console.log("Message sent successfully:", response);
          alert("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.error("Error sending message:", error);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Get in Touch</h2>

      {/* Social Media Links */}
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/vishesh-keshniya-a222512a9/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Vishesh-Keshniya"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaGithub />
        </a>
        <a href="mailto:keshniyavisheshk20@gmail.com" className="social-icon">
          <FaEnvelope />
        </a>
        <a
          href="https://www.instagram.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Contact Form */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          className="contact-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="contact-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Your Message"
          className="contact-textarea"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit" className="contact-button" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
