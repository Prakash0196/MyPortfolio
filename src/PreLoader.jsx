// Preloader.js
import React, { useEffect, useState } from "react";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader once everything is loaded
    const handleLoad = () => {
      setTimeout(() => setLoading(false), 500); // optional small delay
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!loading) return null;

  return <div id="preloader"></div>;
};

export default Preloader;
