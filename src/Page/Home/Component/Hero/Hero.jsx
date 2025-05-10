import React, { useState, useEffect } from 'react';

const Hero = () => {
  const images = [
    "https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h4-slider-background-img-2.jpg",
    "https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h4-slider-background-img-1.jpg",
    "https://prowess.qodeinteractive.com/wp-content/uploads/2018/03/h4-slider-background-img-3.jpg"
  ];

  const texts = [
    "STEP TO PEACE",
    "STAY FLEXIBLE",
    "BODY AND SOUL"
  ];

  // State to track the current index of the image/text
  const [currentIndex, setCurrentIndex] = useState(0);

  // Effect to change the image and text every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length); // Loop through the images/text
    }, 6000); // Change every 5 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img 
        src={images[currentIndex]} 
        alt="Slider Background" 
        className="w-full h-full object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute -top-45 -left-30 flex items-center justify-end w-full h-full px-8">
        <h1 className="teko-font text-black text-8xl font-bold max-w-lg">
          {texts[currentIndex]}
        </h1>
      </div>
    </div>
  );
};

export default Hero;
