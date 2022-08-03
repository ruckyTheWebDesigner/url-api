import { useState, useEffect } from "react";
import FbIcon from "../assets/images/icon-facebook.svg";
import TwitterIcon from "../assets/images/icon-twitter.svg";
import PinterestIcon from "../assets/images/icon-pinterest.svg";
import InstagramIcon from "../assets/images/icon-instagram.svg";

function Footer() {
  const [resolution, setResolution] = useState(window.innerWidth);

  // useEffect runs once when the component is mounted and again when the window is resized

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setResolution(event.target.innerWidth);
    });
  }, []);
  // footer section
  return (
    <div>
      <div className={resolution < 768 ? "boost_mobile" : "boost_desktop"}>
        <h4>Boost your links today</h4>
        <button className='btn_getstarted'>Get Started</button>
      </div>

      <div className={resolution < 768 ? "footer_mobile" : "footer_desktop"}>
        <div className='footer_logo'>
          <h2>Shortly</h2>
        </div>
        <div className='footer_content'>
          <div className='footer_item'>
            <h5>Features</h5>
            <p>Link Shortening</p>
            <p>Branded Links</p>
            <p>Analytics</p>
          </div>
          <div className='footer_item'>
            <h5>Resources</h5>
            <p>Developers</p>
            <p>Support</p>
          </div>
          <div className='footer_item'>
            <h5>Company</h5>
            <p>About</p>
            <p>Our Team</p>
            <p>Careers</p>
            <p>Contact</p>
          </div>
          <div className='footer_icons'>
            <img src={FbIcon} alt='facebook' />
            <img src={TwitterIcon} alt='twitter' />
            <img src={PinterestIcon} alt='pinterest' />
            <img src={InstagramIcon} alt='instagram' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
