import React, { useState } from 'react';
// import { icons } from '../utils/icons';

function Services() {
  const [modalStates, setModalStates] = useState({
    appDev: false,
    webDev: false
  });

  const toggleModal = (modal) => {
    setModalStates(prevState => ({
      ...prevState,
      [modal]: !prevState[modal]
    }));
  };

  const closeModal = (modal) => {
    setModalStates(prevState => ({
      ...prevState,
      [modal]: false
    }));
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What I offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            
            <h3 className="services__title">App development</h3>
          </div>
          
          <span 
            className="button button--flex button--small button--link services__button"
            onClick={() => toggleModal('appDev')}
          >
            View more
            
          </span>

          <div className={`services__modal ${modalStates.appDev ? 'active-modal' : ''}`}>
            <div className="services__modal-content">
              <h4 className="services__modal-title">Software Development</h4>
              <button
                className="services__modal-close" 
                onClick={() => closeModal('appDev')}
              >x</button>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  
                  <p>I am good at several Coding languages.</p>
                </li>
                <li className="services__modal-service">
                  <p>Develop softwares using Java and Python.</p>
                </li>
                <li className="services__modal-service">
                  <p>Provide solutions for day-to-day problems.</p>
                </li>
                <li className="services__modal-service">
                  <p>Visualizing graphs, charts and preparing reports.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <h3 className="services__title">Web Development</h3>
          </div>
          
          <span 
            className="button button--flex button--small button--link services__button"
            onClick={() => toggleModal('webDev')}
          >
            View more
          </span>

          <div className={`services__modal ${modalStates.webDev ? 'active-modal' : ''}`}>
            <div className="services__modal-content">
              <h4 className="services__modal-title">Web Developer</h4>
              <button
                className="services__modal-close" 
                onClick={() => closeModal('webDev')}
              >x</button>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <p>I develop the user interface.</p>
                </li>
                <li className="services__modal-service">
                  
                  <p>Webpage development.</p>
                </li>
                <li className="services__modal-service">
                  
                  <p>Backend connected applications.</p>
                </li>
                <li className="services__modal-service">
                  
                  <p>Create Database applications.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;

