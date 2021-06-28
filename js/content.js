'use strict'

{
//   const cont01 = document.getElementById('cont01');
//   const cont02 = document.getElementById('cont02');
//   const cont03 = document.getElementById('cont03');
//   const ex01 = document.getElementById('ex01');
//   const ex02 = document.getElementById('ex02');
//   const ex03 = document.getElementById('ex03');

//   cont01.addEventListener('click', () => {
//     cont02.classList.toggle('hidden');
//     cont03.classList.toggle('hidden');
//     ex01.classList.toggle('show');
//   });

//   cont02.addEventListener('click', () => {
//     cont01.classList.toggle('hidden');
//     cont03.classList.toggle('hidden');
//     ex02.classList.toggle('show');
//   });

//   cont03.addEventListener('click', () => {
//     cont01.classList.toggle('hidden');
//     cont02.classList.toggle('hidden');
//     ex03.classList.toggle('show');
//   });
// }


$(function(){
  $('.tab').click(function(){
    let tab_name = $(this).data('tab');  //.tabのdata-tabの内容を取得
    console.log(tab_name);
    switch (tab_name) {
      case 't01':
        $(this).removeClass('hidden');
        $('.t02').addClass('hidden');
        $('.t03').addClass('hidden');
        $('#t01').addClass('display');
        $('#t02').removeClass('display');
        $('#t03').removeClass('display');
        break;
      case 't02':
        $(this).removeClass('hidden');
        $('.t01').addClass('hidden');
        $('.t03').addClass('hidden');
        $('#t02').addClass('display');
        $('#t01').removeClass('display');
        $('#t03').removeClass('display');
        break;
      case 't03':
        $(this).removeClass('hidden');
        $('.t01').addClass('hidden');
        $('.t02').addClass('hidden');
        $('#t03').addClass('display');
        $('#t01').removeClass('display');
        $('#t02').removeClass('display');
        break;
    }
  });
});

}