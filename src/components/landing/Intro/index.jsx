import React, { useState, useRef, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import gsap from 'gsap';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

/*
const fadeIn=(node)=>{
  gsap.from(node,{
      y:60,
      duration:1,
      delay:.2,
      opacity:0,
      ease:"power3.inOut"
  })
}
*/
export const Intro = () => {
  const detailsRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(detailsRef.current, {
      x: -160,
      duration: 0.8,
      opacity: 0,
      ease: 'power3.inOut',
    });
  }, []);
  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details ref={detailsRef}>
          <h1>Hi There!</h1>
          <h4>I’m Khalil and I’m a Frontend & Mobile engineer!</h4>
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m KHALIL and I’m a Frontend & Mobile engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
