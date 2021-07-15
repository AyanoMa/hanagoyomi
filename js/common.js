'use strict'

{
  const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const navContentsLinks = document.querySelectorAll('.nav-links li ul li');

  burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        }else{
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.3}s`;
        }
      });
      burger.classList.toggle('toggle');
    });
    navLinks[2].addEventListener('mouseover', () => {
      navContentsLinks.forEach((content ,index) => {
        content.classList.add('touchTab');
      });
  });
    navLinks[2].addEventListener('mouseout', () => {
      navContentsLinks.forEach((content) => {
        content.classList.remove('touchTab');
      });
  });
  }
  navSlide();
}