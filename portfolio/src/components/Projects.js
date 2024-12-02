import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import project images
import movieRecommender from '../images/movierecommender.png';
import ticketBooking from '../images/ticketbooking.png';
import expenseTracker from '../images/expense tracker.jpg';
import sapPointCalculator from '../images/sappointcalculator.png';
import flutterPortfolio from '../images/flutter.png';

const projects = [
  {
    img: movieRecommender,
    title: "Movie Recommender",
    description: "A movie recommendation system."
  },
  {
    img: ticketBooking,
    title: "Ticket Booking System",
    description: "An online ticket booking system using angular, nodejs and mongodb."
  },
  {
    img: expenseTracker,
    title: "Expense Tracker",
    description: "A user interactive expense tracker using python and sql to track the monthly expenses of the user and segregate between them."
  },
  {
    img: sapPointCalculator,
    title: "Sap point calculator",
    description: "Fully functional SAP(Students activity point calculator) using HTML, CSS, Node js, MongoDB."
  },
  {
    img: flutterPortfolio,
    title: "Portfolio using Flutter",
    description: "A simple portfolio website using Flutter."
  }
];

function Projects() {
  return (
    <section className="portfolio section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        className="portfolio__container container swiper-container"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="portfolio__content grid">
              <div className="portfolio__img-wrapper">
                <img 
                  src={project.img} 
                  alt={project.title} 
                  className="portfolio__img"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              </div>
              <div className="portfolio__data">
                <h3 className="portfolio__title">{project.title}</h3>
                <p className="portfolio__description">{project.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-next">
          <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
        </div>
        <div className="swiper-button-prev">
          <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
        </div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </section>
  );
}

export default Projects;

