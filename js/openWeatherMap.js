'use strict';

// import { get } from 'http';
// const MY_WEATHER_APIKEY = {b5786dc409f8ef351d20e73b767a2caf};
// const LAT = 35.3881492869546;  //緯度
// const LON = 139.42738922095754;  //経度
// const req = 'http://api.openweathermap.org/data/2.5/weather?lat='+LAT+'&lon='+LON+'&appid='+ MY_WEATHER_APIKEY;

// get(req, res => {
//   var body ='';
//   res.setEncoding('utf8');
//   res.on('data', (chunk) => {
//     body += chunk;
//   });
//   res.on('end', () => {
//     res = JSON.parse(body);
//     console.log(res);
//   });
// })
//   .on('error', e => {
//     console.error(e.message);
// });

// console.log(res.weather[0].main);

// WEB API を使用し、現在地の現在の天気を取得
const API_KEY = "b5786dc409f8ef351d20e73b767a2caf";
const lat = 35.3881492869546;  //緯度
const lon = 139.42738922095754;  //経度
const url = "https://api.openweathermap.org/data/2.5/weather" + "?lat=" + lat + "&lon=" + lon + "&units=metric&APPID=" + API_KEY;
const request = new XMLHttpRequest();
request.open("GET", url, true);
request.responseType = "json";

     // 現在の天気に関する関数
     request.onload = function () {
      const nowData = this.response;

      // 「現在の天気」「現在の気温」「現在地」を取得
      const weatherName = nowData.weather[0].main;
      const weatherTemp = nowData.main.temp;
      console.log(weatherName);
      console.log(weatherTemp);

      /*取得した天気によって
      「天気の名前」「天気の画像を」を挿入*/
      // const weather = WEATHERS[weatherName];

      // if (weather) {
      //   const { label, img } = weather;
      //   patternTextTarget.innerHTML = label;
      //   patternImgTarget.innerHTML = `<img src="asset/img/${img}.png" alt="${label}">`;
      // } else {
      //   return false;
      // }
    };
    request.send();