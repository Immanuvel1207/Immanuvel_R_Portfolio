import React, { useState } from 'react';
import { icons } from '../utils/icons';

// Import skill icons
import cIcon from '../images/icons/c-programming-language-seeklogo.svg';
import cppIcon from '../images/icons/c++.svg';
import javaIcon from '../images/icons/java.svg';
import pythonIcon from '../images/icons/python.svg';
import htmlIcon from '../images/icons/html.svg';
import cssIcon from '../images/icons/css.svg';
import jsIcon from '../images/icons/javascript.svg';
import tsIcon from '../images/icons/typescript.svg';
import mongoIcon from '../images/icons/mongodb.svg';
import oracleIcon from '../images/icons/oracle.svg';
import mysqlIcon from '../images/icons/mysql.svg';
import angularIcon from '../images/icons/angular.svg';
import flutterIcon from '../images/icons/Flutter.svg';
import matlabIcon from '../images/icons/Matlab.svg';
import nodeIcon from '../images/icons/Node JS.svg';
import githubIcon from '../images/icons/GitHub Colored.svg';
import gitIcon from '../images/icons/Git.svg';
import bootstrapIcon from '../images/icons/bootstrap.png';

function Skills() {
  const [codingOpen, setCodingOpen] = useState(true);
  const [webDevOpen, setWebDevOpen] = useState(false);

  const skillIcons = [
    { icon: cIcon, name: 'C' },
    { icon: cppIcon, name: 'C++' },
    { icon: javaIcon, name: 'Java' },
    { icon: pythonIcon, name: 'Python' },
    { icon: htmlIcon, name: 'HTML' },
    { icon: cssIcon, name: 'CSS' },
    { icon: jsIcon, name: 'JS' },
    { icon: tsIcon, name: 'TS' },
    { icon: mongoIcon, name: 'MongoDB' },
    { icon: oracleIcon, name: 'SQL (Oracle)' },
    { icon: mysqlIcon, name: 'MySQL' },
    { icon: angularIcon, name: 'Angular' },
    { icon: flutterIcon, name: 'Flutter' },
    { icon: matlabIcon, name: 'Matlab' },
    { icon: nodeIcon, name: 'Node.js' },
    { icon: githubIcon, name: 'GitHub' },
    { icon: gitIcon, name: 'Git' },
    { icon: bootstrapIcon, name: 'Bootstrap' }
  ];

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      
      <div className="skills__container container grid">
        <div>
          <div className={`skills__content ${codingOpen ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header" onClick={() => setCodingOpen(!codingOpen)}>
              
              <div>
                <h1 className="skills__title">Coding</h1>
                <span className="skills__subtitle">More than 3 years</span>
              </div>
            </div>

            <div className="skills__list grid">
              {/* Coding skills */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">C</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__c"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">C++</h3>
                  <span className="skills__number">60%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__cpp"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Java</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__java"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">Python</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__python"></span>
                </div>
              </div>
            </div>
          </div>

          <div className={`skills__content ${webDevOpen ? 'skills__open' : 'skills__close'}`}>
            <div className="skills__header" onClick={() => setWebDevOpen(!webDevOpen)}>
              
              <div>
                <h1 className="skills__title">Web Developer</h1>
                <span className="skills__subtitle">More than 2 years</span>
              </div>
              
            </div>

            <div className="skills__list grid">
              {/* Web development skills */}
              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">HTML</h3>
                  <span className="skills__number">90%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__html"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">CSS</h3>
                  <span className="skills__number">80%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__css"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">JavaScript</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__js"></span>
                </div>
              </div>

              <div className="skills__data">
                <div className="skills__titles">
                  <h3 className="skills__name">React</h3>
                  <span className="skills__number">70%</span>
                </div>
                <div className="skills__bar">
                  <span className="skills__percentage skills__react"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="marquee">
          <div className="skill-container">
            {skillIcons.map((skill, index) => (
              <div key={index} className="skill-card">
                <img src={skill.icon} alt={`${skill.name} Logo`} style={{ width: '24px', height: '24px' }} />
                <p>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
