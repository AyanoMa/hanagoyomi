let mouseCursor = document.querySelector('.cursor');
  var min = 1 ;
  var max = 27 ;
  var a = Math.floor( Math.random() * (max + 1 - min) ) + min ;

window.addEventListener('load', () => {
  mouseCursor.style.backgroundImage = `url(../img/map/icon${a}.svg`;
});