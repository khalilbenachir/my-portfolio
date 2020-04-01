import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import Navbar from './Navbar';
import Hamburger from './Hamburger';
import Sidebar from './Sidebar';
import { Wrapper, Overlay } from './styles';

export const Header = () => {
  const [sidebar, toggle] = useState(false);
  const headerRef = useRef(null);
  const timeLine = gsap.timeline();
  useEffect(() => {
    timeLine.from(headerRef.current, {
      y: -100,
      duration: 0.6,
      opacity: 0,
      ease: 'power3.inOut',
    });
  }, [timeLine]);

  return (
    <Wrapper ref={headerRef}>
      <Overlay sidebar={sidebar} onClick={() => toggle(!sidebar)} />
      <Navbar />
      <Hamburger sidebar={sidebar} toggle={toggle} />
      <Sidebar sidebar={sidebar} toggle={toggle} />
    </Wrapper>
  );
};
