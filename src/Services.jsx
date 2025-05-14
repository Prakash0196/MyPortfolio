import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ServiceCard } from "./ServiceCard"; // Make sure the path is correct

export const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const services = [
    {
      icon: "desktop-outline",
      title: "Web Design",
      description:
        "Specializing in creating user-friendly, visually appealing websites that enhance brand presence, improve user experience, and drive engagement through responsive, innovative design.",
      animation: "fade-right",
    },
    {
      icon: "phone-portrait-outline",
      title: "Fully Responsive",
      description:
        "Expert in developing fully responsive designs that ensure seamless user experiences across all devices, boosting accessibility and engagement on mobile, tablet, and desktop platforms.",
      animation: "fade-up",
    },
    {
      icon: "code-slash-outline",
      title: "Development",
      description:
        "Skilled in building robust, scalable web applications with clean, efficient code, ensuring optimal performance, security, and seamless functionality for a flawless user experience.",
      animation: "fade-left",
    },
    {
      icon: "diamond-outline",
      title: "Creative Design",
      description:
        "Creative design enhances user engagement and brand identity through visually compelling and innovative solutions, ensuring a memorable and impactful experience.",
      animation: "fade-right",
    },
    {
      icon: "camera-outline",
      title: "Retina-Ready",
      description:
        "Experience crystal-clear visuals with Retina Ready design, ensuring ultra-sharp images and text on high-resolution screens. Enjoy a superior viewing experience with vibrant colors and enhanced detail.",
      animation: "fade-up",
    },
    {
      icon: "globe-outline",
      title: "Cross-Browser Compatibility",
      description:
        "Enjoy a seamless user experience across all major browsers with Cross-Browser Compatibility, ensuring your website looks and functions flawlessly for every visitor.",
      animation: "fade-left",
    },
  ];

  return (
    <section className="services py-5">
      <div className="container" id="services">
        <div className="py-5">
          <h1 className="text-center pb-5">Services</h1>

          <div className="row pb-3">
            {services.slice(0, 3).map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          <div className="row pb-3">
            {services.slice(3, 6).map((service, index) => (
              <ServiceCard key={index + 3} {...service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
