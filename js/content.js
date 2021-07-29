'use strict'

{
  
  const cards = document.querySelectorAll('.card');
  const fronts = document.querySelectorAll('.face.front');
  const backs = document.querySelectorAll('.face.back');
  let mouseCursor = document.querySelector('.cursor');

  for(let i=0; i<cards.length;i++){
    cards[i].addEventListener('click', () =>{
      fronts[i].classList.add('clicked');
      backs[i].classList.add('clicked');
      mouseCursor.classList.remove('blinking');
    });
  }

  fronts.forEach((front)=>{
    front.addEventListener('mouseleave', () =>{
      mouseCursor.classList.remove('blinking');
    });
    front.addEventListener('mouseover', () =>{
      mouseCursor.classList.add('blinking');
    });
  });
  window.addEventListener('load', () => {
    mouseCursor.style.backgroundImage = `url(../img/map/icon${a}.svg)`;
  });

}