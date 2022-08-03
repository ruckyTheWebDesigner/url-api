import React from "react";
import Illustration from "../assets/images/illustration-working.svg";

function Hero() {
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
          <button className='btn_getstarted button'>Get Started</button>
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
