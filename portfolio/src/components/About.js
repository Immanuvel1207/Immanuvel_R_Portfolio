import React from 'react';
import pdf from '../images/ImmanuvelR_Recent.pdf';
function About() {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        <img src="portfolio\src\images\Fulllength.jpg" alt="" className="about__img" />

        <div className="about__data">
          <p className="about__description">
            Software Engineer, with extensive knowledge in coding, web development, database management, networks and has been delivering quality work.
          </p>

          <div className="about__info">
            <div>
              <span className="about__info-title">04+</span>
              <span className="about__info-name">Completed <br /> certifications</span>
            </div>
            <div>
              <span className="about__info-title">02+</span>
              <span className="about__info-name">Internships <br /> completed</span>
            </div>
          </div>

          <div className="about__buttons">
            <a download="" href={pdf} className="button button--flex">
              Download CV<i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

