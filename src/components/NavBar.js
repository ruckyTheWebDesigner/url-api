import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.svg";
import { GrMenu } from "react-icons/gr";

import { Drawer } from "@mui/material";

import Hero from "./Hero";

// mobile nav

function NavBar() {
  const [resolution, setResolution] = useState(window.innerWidth);

  // useEffect runs once when the component is mounted and again when the window is resized

  useEffect(() => {
    window.addEventListener("resize", (event) => {
      setResolution(event.target.innerWidth);
    });
  }, []);
  return (
    // navbar
    <div className='nav_bar'>
      {resolution < 768 ? <MobileNav /> : <DesktopNav />}
      <Hero />
    </div>
  );
}

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className='mobile_nav'>
        <div className='logo_wrapper'>
          <a href='/'>
            <img src={Logo} className='logo' alt='Shortly logo' />
          </a>
        </div>

        <div>
          {/* button to open drawer */}
          <GrMenu onClick={() => setIsOpen(!isOpen)} className='open_navbtn' />
        </div>
      </div>

      <Drawer
        className='drawer'
        anchor='top'
        open={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}>
        <div className='offcanvas_features'>
          <h4>Features</h4>
          <h4>Pricing</h4>
          <h4>Resources</h4>
          <hr />
        </div>
        <div>
          <h4>Login</h4>
          <button>Sign up</button>
        </div>
      </Drawer>
    </>
  );
}

// desktop navbar

function DesktopNav() {
  return (
    <div className='desktop_nav'>
      <div className='desktoplogo_wrapper'>
        <img src={Logo} className='logo_desktop' alt='Shortly logo' />

        <span>Features</span>
        <span>Pricing</span>
        <span>Resources</span>
      </div>
      <div className='login_btn'>
        <span className='mr-2'>Login</span>
        <button className='signupbtn'>Sign up</button>
      </div>
    </div>
  );
}

export default NavBar;
