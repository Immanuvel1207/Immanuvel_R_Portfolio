import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission,
    // such as sending the data to a server or API
    console.log('Form submitted:', { name, email, project, message });
    // Reset form fields
    setName('');
    setEmail('');
    setProject('');
    setMessage('');
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div>
          <div className="contact__information">
            <i className="uil uil-phone contact__icon"></i>

            <div>
              <h3 className="contact__title">Call Me</h3>
              <span className="contact__subtitle">+91 8825503860</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-envelope contact__icon"></i>

            <div>
              <h3 className="contact__title">Email</h3>
              <span className="contact__subtitle">immanuvelr2004@gmail.com</span>
            </div>
          </div>

          <div className="contact__information">
            <i className="uil uil-map-marker contact__icon"></i>

            <div>
              <h3 className="contact__title">Location</h3>
              <span className="contact__subtitle">Madurai, Tamil Nadu - India</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label htmlFor="name" className="contact__label">Name</label>
              <input 
                type="text" 
                id="name"
                className="contact__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="contact__content">
              <label htmlFor="email" className="contact__label">Email</label>
              <input 
                type="email" 
                id="email"
                className="contact__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="contact__content">
            <label htmlFor="project" className="contact__label">Project</label>
            <input 
              type="text" 
              id="project"
              className="contact__input"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              required
            />
          </div>
          <div className="contact__content">
            <label htmlFor="message" className="contact__label">Message</label>
            <textarea 
              id="message" 
              cols="0" 
              rows="7" 
              className="contact__input"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div>
            <button type="submit" className="button button--flex">
              Send Message
              <i className="uil uil-message button__icon"></i>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;

