import React, { useEffect } from "react";
import { useState } from "react";
import "./LandingPage.css";
import { Button, Space } from 'antd';

const Landing = () => {
  const firstPhrase = "Kitchin. Empowering the Food Industry";
  const typingSpeed = 50; // Adjust the typing speed (in milliseconds)

  const [charIndex, setCharIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (charIndex < firstPhrase.length) {
        setTypedText((prevText) => prevText + firstPhrase[charIndex]);
        setCharIndex((prevIndex) => prevIndex + 1);
      } else {
        clearInterval(typeInterval); // Stop the interval when the phrase is typed out
        setShowButtons(true);
      }
    }, typingSpeed);

    return () => {
      clearInterval(typeInterval);
    };
  }, [charIndex]);

  return (
    <div className="landing-page">
      <div className="logo">
        <img src="/image/light.png" alt="Kitchin" />
      </div>
      <div className="typing-animation">{typedText}</div>
      {showButtons &&
      <Space wrap>
      <Button type="primary">Learn More</Button>
      <Button>Join our Comminuty</Button> 
    </Space>}
    </div>
  );
};

export default Landing;
