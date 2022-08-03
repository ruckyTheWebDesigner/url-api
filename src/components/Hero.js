import React from "react";
import Illustration from "../assets/images/illustration-working.svg";

function Hero() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      {/* hero section */}
      <div className='hero_wrapper'>
        <div className='hero_text'>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand recognition and get detail insights on how your
            links are performing.
          </p>
          <button
            onClick={() => scrollTo("form")}
            className='btn_getstarted button'>
            Get Started
          </button>
        </div>
        <div className='illustration_wrapper'>
          <img
            id='illustration_image'
            className='hero_illustration'
            src={Illustration}
            alt='illustration'
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
