import React, { useState, useEffect } from 'react';
import CarouselSmallScreen from './CarouselSmallScreen';
import CarCards from './Carcards';

const CardSlider = ({carCardsData}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Change the threshold according to your definition of "sm"
    };

    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
 
  return (
    <div>
      {isSmallScreen ? (
        <CarouselSmallScreen  carCardsData = {carCardsData}/>
      ) : (
        // Map over the array of props and render CarCards components
        <CarCards carCardsData = {carCardsData}/>
      )}
    </div>
  );
};

export default CardSlider;