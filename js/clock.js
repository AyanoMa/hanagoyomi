'use strict'

{
  const asagao = document.querySelectorAll('[id^="a"]');
  const matsuyoigusa = document.querySelectorAll('[id^="m"]');
  const hasu = document.querySelectorAll('[id^="h"]');
  const bg = document.getElementById('bg');

  let getHours =0;

  let d = moment();
  let h = d.hours();
  let m = d.minutes();
  let minutes = h * 60 + m;
  console.log(minutes);
  let t = [];

  function timeCount(){
    for(let i = 1; i <= 60; i++){
       t[i] = 24 * i;
    }
    return;
  }
  timeCount();
  //早いバージョン
  function timeCountEarly(){
    for(let i = 1; i <= 60; i++){
       t[i] = i;
    }
    return;
  }
  function flowerSet(flower) {
    flower.forEach((flower) => {
      flower.classList.add('hidden');
      });
  }

  function flowerSwich(flower, num) {
    flower.forEach((flower) => {
      flower.classList.add('hidden');
      });
      flower[num].classList.remove('hidden');
  } 

  function flowerBloom(){
  //アサガオ
  if (minutes < t[4]){flowerSwich(asagao, 0);
  }else if (minutes < t[5]){flowerSwich(asagao, 1);
  }else if (minutes < t[6]){flowerSwich(asagao, 2);
  }else if (minutes < t[7]){flowerSwich(asagao, 3);
  }else if (minutes < t[8]){flowerSwich(asagao, 4);
  }else if (minutes < t[9]){flowerSwich(asagao, 5);
  }else if (minutes < t[10]){flowerSwich(asagao, 6);
  }else if (minutes < t[11]){flowerSwich(asagao, 7);
  }else if (minutes < t[12]){flowerSwich(asagao, 8);
  }else if (minutes < t[13]){flowerSwich(asagao, 9);
  }else if (minutes < t[22]){flowerSwich(asagao, 10);
  }else if (minutes < t[23]){flowerSwich(asagao, 11);
  }else if (minutes < t[24]){flowerSwich(asagao, 12);
  }else if (minutes < t[25]){flowerSwich(asagao, 13);
  }else if (minutes < t[26]){flowerSwich(asagao, 14);
  }else if (minutes < t[27]){flowerSwich(asagao, 15);
  }else if (minutes < t[28]){flowerSwich(asagao, 16);
  }else if (minutes < t[29]){flowerSwich(asagao, 17);
  }else if (minutes <= t[60]){flowerSwich(asagao, 18);
  }
//ハス
if (minutes < t[15]){flowerSwich(hasu, 0);
  }else if (minutes < t[16]){flowerSwich(hasu, 1);
  }else if (minutes < t[17]){flowerSwich(hasu, 2);
  }else if (minutes < t[18]){flowerSwich(hasu, 3);
  }else if (minutes < t[19]){flowerSwich(hasu, 4);
  }else if (minutes < t[20]){flowerSwich(hasu, 5);
  }else if (minutes < t[21]){flowerSwich(hasu, 6);
  }else if (minutes < t[30]){flowerSwich(hasu, 7);
  }else if (minutes < t[31]){flowerSwich(hasu, 8);
  }else if (minutes < t[32]){flowerSwich(hasu, 9);
  }else if (minutes < t[33]){flowerSwich(hasu, 10);
  }else if (minutes < t[34]){flowerSwich(hasu, 11);
  }else if (minutes < t[35]){flowerSwich(hasu, 12);
  }else if (minutes < t[60]){flowerSwich(hasu, 13);
  }
//マツヨイグサ
  if (minutes < t[13] || minutes >= t[50]){flowerSwich(matsuyoigusa, 0);
  }else if (minutes < t[14]){flowerSwich(matsuyoigusa, 1);
  }else if (minutes < t[15]){flowerSwich(matsuyoigusa, 2);
  }else if (minutes < t[16]){flowerSwich(matsuyoigusa, 3);
  }else if (minutes < t[17]){flowerSwich(matsuyoigusa, 4);
  }else if (minutes < t[18]){flowerSwich(matsuyoigusa, 5);
  }else if (minutes < t[19]){flowerSwich(matsuyoigusa, 6);
  }else if (minutes < t[20]){flowerSwich(matsuyoigusa, 7);
  }else if (minutes < t[21]){flowerSwich(matsuyoigusa, 8);
  }else if (minutes < t[22]){flowerSwich(matsuyoigusa, 9);
  }else if (minutes < t[23]){flowerSwich(matsuyoigusa, 10);
  }else if (minutes < t[24]){flowerSwich(matsuyoigusa, 11);
  }else if (minutes < t[25]){flowerSwich(matsuyoigusa, 12);
  }else if (minutes < t[26]){flowerSwich(matsuyoigusa, 13);
  }else if (minutes < t[27]){flowerSwich(matsuyoigusa, 14);
  }else if (minutes < t[50]){flowerSwich(matsuyoigusa, 15);
  }
  }

function Early() {
  timeCountEarly();
  setInterval(() =>{  
    getHours = Math.round(moment().second() /2.3);
    console.log(getHours);
    minutes = moment().second();
    flowerBloom();
    checkHours();
  } ,1000);
}

  function checkHours() {
    switch(getHours){
      case 0:
        $('body').removeClass();
        bg.classList.add('sky-gradient-00');
        break;
      case 1:
        $('body').removeClass();
        bg.classList.add('sky-gradient-01');
        break;
      case 2:
        $('body').removeClass();
        bg.classList.add('sky-gradient-02');
        break;
      case 3:
        $('body').removeClass();
        bg.classList.add('sky-gradient-03');
        break;
      case 4:
        $('body').removeClass();
        bg.classList.add('sky-gradient-04');
        break;
      case 5:
        $('body').removeClass();
        bg.classList.add('sky-gradient-05');
        break;
      case 6:
        $('body').removeClass();
        bg.classList.add('sky-gradient-06');
        break;
      case 7:
        $('body').removeClass();
        bg.classList.add('sky-gradient-07');
        break;
      case 8:
        $('body').removeClass();
        bg.classList.add('sky-gradient-08');
        break;
      case 9:
        $('body').removeClass();
        bg.classList.add('sky-gradient-09');
        break;
      case 10:
        $('body').removeClass();
        bg.classList.add('sky-gradient-10');
        break;
      case 11:
        $('body').removeClass();
        bg.classList.add('sky-gradient-11');
        break;
      case 12:
        $('body').removeClass();
        bg.classList.add('sky-gradient-12');
        break;
      case 13:
        $('body').removeClass();
        bg.classList.add('sky-gradient-13');
        break;
      case 14:
        $('body').removeClass();
        bg.classList.add('sky-gradient-14');
        break;
      case 15:
        $('body').removeClass();
        bg.classList.add('sky-gradient-15');
        break;
      case 16:
        $('body').removeClass();
        bg.classList.add('sky-gradient-16');
        break;
      case 17:
        $('body').removeClass();
        bg.classList.add('sky-gradient-17');
        break;
      case 18:
        $('body').removeClass();
        bg.classList.add('sky-gradient-18');
        break;
      case 19:
        $('body').removeClass();
        bg.classList.add('sky-gradient-19');
        break;
      case 20:
        $('body').removeClass();
        bg.classList.add('sky-gradient-20');
        break;
      case 21:
        $('body').removeClass();
        bg.classList.add('sky-gradient-21');
        break;
      case 22:
        $('body').removeClass();
        bg.classList.add('sky-gradient-22');
        break;
      case 23:
        $('body').removeClass();
        bg.classList.add('sky-gradient-23');
        break;
    }
}

// setInterval(() =>{
//   flowerBloom();
// },1000);
// flowerSet(asagao);
// flowerSet(hasu);
// flowerSet(matsuyoigusa);
flowerBloom()
}