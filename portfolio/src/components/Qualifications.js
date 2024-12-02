import React, { useState } from 'react';

function Qualifications() {
  const [activeTab, setActiveTab] = useState('education');

  return (
    <section className="qualification section" id="qualifications">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${activeTab === 'education' ? 'qualification__active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>

          <div
            className={`qualification__button button--flex ${activeTab === 'work' ? 'qualification__active' : ''}`}
            onClick={() => setActiveTab('work')}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Work
          </div>
        </div>

        <div className="qualification__sections">
          <div className={`qualification__content ${activeTab === 'education' ? 'qualification__active' : ''}`} data-content id="education">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">B.E Computer Science and Engineering</h3>
                <span className="qualification__subtitle">Velammal College of Engineering and Technology</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Higher Secondary Education</h3>
                <span className="qualification__subtitle">Vikaasa School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2019 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Secondary Education</h3>
                <span className="qualification__subtitle">Vikaasa School</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  2018 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div className={`qualification__content ${activeTab === 'work' ? 'qualification__active' : ''}`} data-content id="work">
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Web Development Intern</h3>
                <span className="qualification__subtitle">Codsoft</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Aug 2023 - Sep 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Web Development Intern</h3>
                <span className="qualification__subtitle">Oasis Infobyte</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>
                  Jul 2023 - Aug 2023
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Qualifications;

