import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import certification images
import aiWorkshop from '../images/pdftoimage/AI WORKSHOP/AI WORKSHOP-1.jpg';
import aiFoundation from '../images/pdftoimage/Artificial intelligence foundation certificate/Artificial intelligence foundation certificate-1.jpg';
import bitPaper from '../images/pdftoimage/BIT PAPER/BIT PAPER-1.jpg';
import codeChefPython from '../images/pdftoimage/CODE CHEF PYTHON CERTIFICATE/CODE CHEF PYTHON CERTIFICATE-1.jpg';
import deepLearning from '../images/pdftoimage/Deep learning/Deep learning-1.jpg';
import annaUniversity from '../images/pdftoimage/immanuvel anna University/immanuvel anna University-1.jpg';
import ideathon from '../images/pdftoimage/immanuvel ideathon/immanuvel ideathon-1.jpg';
import rinex from '../images/pdftoimage/Immanuvel Rinex/Immanuvel Rinex-1.jpg';
import nvidia from '../images/pdftoimage/Immanuvel_Certificate _ NVIDIA/Immanuvel_Certificate _ NVIDIA-1.jpg';
import introAI from '../images/pdftoimage/Introduction to Artificial Intelligence/Introduction to Artificial Intelligence-1.jpg';
import psgCoding from '../images/pdftoimage/PSG CODING PARTICIPATION/PSG CODING PARTICIPATION-1.jpg';
import nlp from '../images/pdftoimage/Natural language processing/Natural language processing-1.jpg';
import signInCoding from '../images/pdftoimage/SIGN-IN CODING/SIGN-IN CODING-1.jpg';
import signInPaper from '../images/pdftoimage/SIGN-IN Paper/SIGN-IN Paper-1.jpg';
import signInQuiz from '../images/pdftoimage/SIGN-IN QUIZ/SIGN-IN QUIZ-1.jpg';
import teamLead from '../images/pdftoimage/Team lead-43/Team lead-43-1.jpg';

const certifications = [
  {
    img: aiWorkshop,
    title: "AI-Workshop",
    description: "A 3 hour workshop where using AI in ms tools were showcased and lots of new strategies which will help in improving efficiency were learnt."
  },
  {
    img: aiFoundation,
    title: "Artificial intelligence foundation certificate",
    description: "Artificial intelligence foundation course which helped my build my knowledge in AI."
  },
  {
    img: bitPaper,
    title: "Movie Recommender System",
    description: "Paper presentation done in Bannari Amman Institu of Technology on Movie Recommendation System"
  },
  {
    img: codeChefPython,
    title: "PYTHON CERTIFICATE",
    description: "Code chef Python course, which enhanced my knowledge in Python."
  },
  {
    img: deepLearning,
    title: "Deep Learning",
    description: "Infosys certificate for Deep Learning which gave basic insights on DL."
  },
  {
    img: annaUniversity,
    title: "Quantum Computing",
    description: "Presented a Paper in Anna University on Quantum Computing."
  },
  {
    img: ideathon,
    title: "Online platform for project hosting with plagarism detection",
    description: "Won 3rd prize in ideathon event conducted by IT department of Kongu Engineerign College."
  },
  {
    img: rinex,
    title: "Web development Internship",
    description: "Rinex course on web-development along with internship for 3 months."
  },
  {
    img: nvidia,
    title: "NVIDIA Deep Learning",
    description: "A 2 day workshop on Deep Learning, where I learnt training a model with images for classification"
  },
  {
    img: introAI,
    title: "Introduction to Artificial Intelligence",
    description: "Infosys certificate for Introduction to Artificial Intelligence."
  },
  {
    img: psgCoding,
    title: "Coding competetion",
    description: "Participated in PSG Shristi coding competetion."
  },
  {
    img: nlp,
    title: "Natural language processing",
    description: "Infosys certificate for Natural language processing."
  },
  {
    img: signInCoding,
    title: "Coding competetion",
    description: "Won 2nd prize in SIGN-IN coding competition conducted by IT department of Kongu Engineering College."
  },
  {
    img: signInPaper,
    title: "Movie Recommendation System",
    description: "Presented a paper on Movie Recommendation System in SIGN-IN event conducted by IT department of Kongu Engineering College."
  },
  {
    img: signInQuiz,
    title: "SIGN-IN Quiz",
    description: "Won 1st prize in SIGN-IN Quiz competition conducted by IT department of Kongu Engineering College."
  },
  {
    img: teamLead,
    title: "SIH'23",
    description: "Lead my team into SIH-2023 for project hosting website development."
  }
];

function Certifications() {
  return (
    <section className="portfolio section" id="certifications">
      <h2 className="section__title">Certifications</h2>
      <span className="section__subtitle">My achievements</span>

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
        {certifications.map((cert, index) => (
          <SwiperSlide key={index}>
            <div className="portfolio__content grid">
              <div className="portfolio__img-wrapper">
                <img 
                  src={cert.img} 
                  alt={cert.title} 
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
                <h3 className="portfolio__title">{cert.title}</h3>
                <p className="portfolio__description">{cert.description}</p>
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

export default Certifications;

