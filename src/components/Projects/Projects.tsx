import Card from '../Card/Card';
import './Projects.css';
import Native from '../../images/native.svg';
import HBH from '../../images/hbh.svg';
import GiftBot from '../../images/gbasss.svg';
import Left from '../../images/left.svg';
import Right from '../../images/right.svg';
import { useEffect, useRef, useState } from 'react';

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLUListElement>(null);

  const scrollLeft = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const scrollRight = () => {
    setCurrentIndex((prevIndex) =>
      carouselRef.current && prevIndex < carouselRef.current.children.length - 1
        ? prevIndex + 1
        : prevIndex,
    );
  };

  useEffect(() => {
    const updateCarousel = () => {
      if (carouselRef.current) {
        const cards = carouselRef.current.children;
        Array.from(cards).forEach((card) => {
          const cardElement = card as HTMLElement;
          const offset =
            -currentIndex *
            (cardElement.clientWidth +
              2 * parseFloat(getComputedStyle(cardElement).borderRightWidth) +
              parseFloat(getComputedStyle(carouselRef.current as Element).gap));
          cardElement.style.transform = `translateX(${offset}px)`;
        });
      }
    };

    updateCarousel();
  }, [currentIndex]);

  return (
    <section id="projects">
      <h2 className="header2">Projects</h2>
      <div className="carousel">
        <button
          id="prevButton"
          onClick={scrollLeft}
          className="carousel-button"
        >
          <img src={Left} alt="Previous" className="button-icon" />
        </button>
        <ul className="cards" ref={carouselRef}>
          <Card
            title="Native"
            source={Native}
            description="Native is a service that provides a variety of services, not only help with household chores, but also communication and general pastime."
            reference="https://docs.google.com/presentation/d/1h7cX06iMRaPHNyI5owrIn-NyPq0nDr9A7RLbq4TPGJ0/edit#slide=id.p"
          />

          <Card
            title="Hardware Booking Hub"
            source={HBH}
            description="Booking system for hardware resources for Innopolis University."
            reference="https://hardwarebookinghub.web.app/"
          />

          <Card
            title="Gift Asssistant"
            source={GiftBot}
            description="Gift Assistant is a telegram bot with AI support which helps to choose a gift  based on gender, age and occasion."
            reference="https://drive.google.com/file/d/1Xin99RFw6ffFBeH3QseLTiPV42eLY3WO/view?usp=sharing"
          />
        </ul>
        <button
          id="nextButton"
          onClick={scrollRight}
          className="carousel-button"
        >
          <img src={Right} alt="Next" className="button-icon" />
        </button>
      </div>
    </section>
  );
}
