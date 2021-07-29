'use strict'

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

  let mouseCursor = document.querySelector('.cursor');
  let navLinks = document.querySelectorAll('.nav-links li');
  let atags = document.querySelectorAll('a');
  console.log(atags);
  var min = 1 ;
  var max = 27 ;
  let pixel = -25
  var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;

  window.addEventListener('mousemove', cursor);
  function cursor(e) {
    mouseCursor.style.top = e.pageY + pixel +'px';
    mouseCursor.style.left = e.pageX + pixel + 'px';
  }

  navLinks.forEach(link =>{
    link.addEventListener('mouseleave', ()=> {
      mouseCursor.classList.remove('link-grow');
    })
    link.addEventListener('mouseover', ()=> {
      mouseCursor.classList.add('link-grow');
    })
  });
  atags.forEach(atag =>{
    atag.addEventListener('mouseleave', ()=> {
      mouseCursor.classList.remove('link-grow');
    })
    atag.addEventListener('mouseover', ()=> {
      mouseCursor.classList.add('link-grow');
    })
  });
  window.addEventListener('load', () => {
    mouseCursor.style.backgroundImage = `url(../../img/map/icon${a}.svg)`;
  });
