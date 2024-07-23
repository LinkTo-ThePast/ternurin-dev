import React, { useEffect } from "react";
import anime from "animejs";
import flower from "../../assets/flower/flower.png";
import "./FlowerDesign.css";

const FlowerDesign = () => {
  useEffect(() => {
    generateFlowers();
    animateFlowers();
  }, []);

  const generateFlowers = () => {
    const container = document.querySelector(".flowers-container");
    for (let i = 0; i < 5; i++) {
      // Adjust the number of flowers as needed
      const flowerElement = document.createElement("img");
      flowerElement.src = flower;
      flowerElement.className = "flower";
      container.appendChild(flowerElement);
    }
  };

  const animateFlowers = () => {
    anime({
      targets: ".flower",
      translateY: [{ value: "100vh", duration: 4000, easing: "easeInOutQuad" }],
      translateX: [
        {
          value: () => Math.random() * 100 - 50 + "vw",
          duration: 4000,
          easing: "easeInOutQuad",
        },
      ],
      opacity: [{ value: 0, duration: 4000, easing: "easeInOutQuad" }],
      delay: anime.stagger(200),
      loop: true,
    });
  };

  return <div className="flowers-container"></div>;
};

export default FlowerDesign;
