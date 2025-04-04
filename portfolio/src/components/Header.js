import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">Immanuvel R</a>
        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>
            <li className="nav__item">
              <a href="#skills" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            <li className="nav__item">
              <a href="#qualifications" className="nav__link">
                <i className="uil uil-book nav__icon"></i>Qualifications                             
              </a>
            </li>
            <li className="nav__item">
              <a href="#certifications" className="nav__link">
                <i className="uil uil-award nav__icon"></i>Certifications                              
              </a>
            </li>
            <li className="nav__item">
              <a href="#services" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Services
              </a>
            </li>
            <li className="nav__item">
              <a href="#projects" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Projects                               
              </a>
            </li>
            <li className="nav__item">
              <a href="#contact" className="nav__link">
                <i className="uil uil-phone nav__icon"></i>Contact                               
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close" id="nav-close" onClick={toggleMenu}></i>
        </div>
        <div className="nav__btns">
          <i className="uil uil-moon change-theme" id="theme-button"></i>
          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

