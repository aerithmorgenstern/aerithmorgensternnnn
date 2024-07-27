import React, { useState } from "react";
import "../App.css";
import emailjs from "emailjs-com";
import "./HeroSection.css";

function HeroSection() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleSubjectChange = (e) => setSubject(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: email,
      to_name: "aerithmorgenstern@gmail.com",
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "aerithmorgenstern", // replace with your EmailJS service ID
        "aerithmorgenstern", // replace with your EmailJS template ID
        templateParams,
        "a3f5V6BnTb9O48bsA" // replace with your EmailJS user ID (or public key)
      )
      .then((response) => {
        console.log("Email sent successfully:", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <div className="hero-container">
      <div className="intro">
        <p>
          <br />
          <br />
          <br />
          <br />
          <br />
          darling readers,
        </p>
        <br />
        <p>
          i hope that, within my stories, you will find
          <br />
          the magic and adventure that i fell in
          <br />
          love with once upon a time.
        </p>
        <br />
        <p>
          yours forever,
          <br /> aerith morgenstern
        </p>
      </div>

      <h1>
        <br />
        CONTACT
      </h1>
      <div className="contact-info">
        <div className="contact-paragraph">
          <p>
            Have an AU idea? Like my writing but don't see your fandom? Don't
            sweat! Drop an email or PM me on any of my socials.
          </p>
          <br />
          <p>
            NOTE: Voting on any of the "Coming Soon" projects is welcome! Feel
            free to either PM or email me with the story name and fandom in the
            subject line!
          </p>
          <br />
          <div className="email">
            <p>aerithmorgenstern@gmail.com</p>
          </div>
          <section className="socials">
            <div className="socials-icon">
              <a
                className="social-icon-link instagram"
                href="https://www.instagram.com/aerithmorgenstern/"
                target="_blank"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                className="social-icon-link tiktok"
                href="https://www.tiktok.com/@aerithmorgenstern"
                target="_blank"
                aria-label="Tiktok"
              >
                <i className="fa-brands fa-tiktok" />
              </a>
              <a
                className="social-icon-link tumblr"
                href="https://www.tumblr.com/aerithmorgenstern"
                target="_blank"
                aria-label="Tumblr"
              >
                <i className="fab fa-tumblr" />
              </a>
              <a
                className="social-icon-link twitter"
                href="https://twitter.com/aerimorgenstern"
                target="_blank"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter" />
              </a>
            </div>
          </section>
        </div>

        <div className="form">
          <form onSubmit={sendEmail}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={handleSubjectChange}
            />
            <textarea
              rows="4"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;