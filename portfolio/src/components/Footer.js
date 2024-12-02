import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1 className="footer__title">Immanuvel</h1>
            <span className="footer__subtitle">Web Developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <a href="#services" className="footer__link">Services</a>
            </li>
            <li>
              <a href="#projects" className="footer__link">Projects</a>
            </li>
            <li>
              <a href="#contact" className="footer__link">Contact</a>
            </li>
          </ul>

          <div className="footer__socials">
            <a href="https://www.linkedin.com/in/immanuvel-r-336442259/" target="_blank" rel="noopener noreferrer" className="footer__social">
              <i className="uil uil-linkedin-alt"></i>
            </a>
            <a href="https://www.instagram.com/immanuvel.12/" target="_blank" rel="noopener noreferrer" className="footer__social">
              <i className="uil uil-instagram"></i>
            </a>
            <a href="https://github.com/Immanuvel1207" target="_blank" rel="noopener noreferrer" className="footer__social">
              <i className="uil uil-github-alt"></i>
            </a>
          </div>
        </div>
        <p className="footer__copy">&#169; Immanuvel. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

