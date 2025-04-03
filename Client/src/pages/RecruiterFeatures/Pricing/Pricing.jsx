import React, { useState, useRef } from 'react';
import styles from './Pricing.module.css';

const Pricing = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const cardsRef = useRef(null);

  const scrollToCard = (index) => {
    const cards = cardsRef.current.children;
    if (cards[index]) {
      cards[index].scrollIntoView({ behavior: 'smooth', inline: 'start' });
      setCurrentCard(index);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.topsection}>
        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statItem}>
            <h2>80%</h2>
            <p>of candidates find match within 24 hours</p>
          </div>
          <div className={styles.statItem}>
            <h2>50%</h2>
            <p>reduction in interview</p>
          </div>
        </div>

        {/* Title Section */}
        <div className={styles.titleSection}>
          <p>Speed up recruitment,</p>
          <p> uncover top talent, and make smarter hiring </p>
          <p>decisions with AI-driven tools.</p>
        </div>
      </div>
      
      {/* Pricing Section */}
      <div className={styles.pricingSection}>
        <h2>Pricing</h2>
        <p>Let AI Handle the Screening Process </p>
        <span>for You </span>

        <div className={styles.pricingCardsContainer}>
          <div className={styles.pricingCards} ref={cardsRef}>
            <div className={styles.pricingCard}>
              {/* Card content */}
            </div>
            <div className={styles.pricingCard}>
              {/* Card content */}
            </div>
            <div className={styles.pricingCard}>
              {/* Card content */}
            </div>
          </div>
          
          {/* Carousel Dots */}
          <div className={styles.cardDots}>
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                className={`${styles.dot} ${currentCard === index ? styles.activeDot : ''}`}
                onClick={() => scrollToCard(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;