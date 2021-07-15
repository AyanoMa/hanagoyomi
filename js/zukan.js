'use strict'

let lines = document.querySelectorAll('[id$="ln"]');
let colors = document.querySelectorAll('[id$="color"]');
let sres = document.querySelectorAll('[id$="sre"]');
const h1 = document.querySelector('.about > h1');
const ps =document.querySelectorAll('.about > p');
const pbook = document.getElementById('pictureBook');
const pbookImg = document.querySelector('#pictureBook > img');

var myDoughnutChart;
console.log(lines);
const flowers = [];
const botanicalKind = ['常緑樹','落葉樹','一年草','多年草','球根',];

colors.forEach((color) => {
  color.classList.add('hidden');
});

let nowMonth = moment().month();//0-11
let nowDate = moment().date();

function dateCheck() {
  let jun;
  if (nowDate <=10){
    jun = 1;
  }else if (nowDate <=20){
    jun = 2;
  }else {
    jun = 3;
  }
  let MDD = nowMonth * 3 + jun;
  return MDD;
};
const MD = dateCheck();

console.log(MD);
// lines.forEach((line) => {
//   line.classList.add('hidden');
// });
// sres.forEach((sre) => {
//   sre.classList.add('hidden');
// });

class Flower {
  constructor(title,fname,genus,kind,desc,fCircle,rotateS){
    // num: 0,
    this.title = title;
    this.fname = fname;
    this.genus = genus;
    this.kind = kind;
    this.desc = desc;
    this.fCircle = fCircle;// 配列 開花の期間、種子の期間、なし、花芽の期間
    this.rotateS = rotateS;//開花の始まりの月
    
  }
    writeDescription() {
      h1.textContent = this.fname;
      ps[0].textContent = this.genus;
      ps[1].textContent = this.kind;
      ps[2].textContent = this.desc;
    }
    drawGraph(){
      var ctx = document.getElementById('myChart');
      // if (typeof myDoughnutChart !== 'undefined' && myDoughnutChart) {
      //   myDoughnutChart.destroy();
      // }
      if(myDoughnutChart){
        myDoughnutChart.destroy(); //すでにグラフが存在すれば消す
      }
      myDoughnutChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['開花', '種子', '','花芽' ],
            datasets: [{
              data: [this.fCircle[0],this.fCircle[1],this.fCircle[2],this.fCircle[3],],
              backgroundColor: ['rgba(227, 154, 171 ,.8)','rgba(189, 122, 63 ,.8)','rgba(200, 200, 200 ,.8)','rgba(119, 141, 47 ,.8)'],
              borderColor:'transparent'
            }],
          },
          options: {
            title: {
              display: true,
              text: '花期',
              fontFamily: 'Sawarabi Mincho',
              padding: 5,
              lineHeight: 1
            },
              cutoutPercentage: 90,
              rotation: (-0.5 + this.rotateS/36*2) * Math.PI ,
              tooltips: {
                intersect:false,
                titleFontSize: 10,
              },
              legend: {
                labels: {
                  boxWidth:10,
                  fontSize: 10,
                  fontFamily: 'Sawarabi Mincho',
                  filter: function(items) {
                    return items.text != '';
                  },
                  filter: (item, chart) => {
                    const value = chart.datasets[0].data[item.index];
                    if (value === 0) {
                      return false;
                    }
                    return true;
                  },
                },
                onClick:{
                  hidden:false,
                },
                layout: {
                  padding: {
                      left: 0,
                      right: 0,
                      top:30,
                      bottom: 0
                  },
                }
              },
              tooltips:{
                enabled: false
              }
          }
          });
      }
    }

const flowerList = [
  {
    title: 'kiku',
    fname:'キク',
    genus:'キク科 キク属 ',
    kind:botanicalKind[2],
    desc:'',
    fCircle:[3,0,36,0],
    rotateS:29
  },{
    title: 'fuyou',
    fname:'フヨウ',
    genus:'アオイ科 フヨウ属',
    kind:botanicalKind[1],
    fCircle:[6,0,30,0],
    rotateS:24
  },{
    title: 'kinmokusei',
    fname:'キンモクセイ',
    genus:'モクセイ科 モクセイ属',
    kind:botanicalKind[0],
    fCircle:[2,0,34,0],
    rotateS:26
  },{
    title:'higanbana',
    fname:'ヒガンバナ',
    genus:'ヒガンバナ科 ヒガンバナ属',
    kind:botanicalKind[4],
    fCircle:[3,0,33,0],
    rotateS:24
  },{
    title:'asagao',
    fname:'アサガオ',
    genus:'ヒルガオ科 サツマイモ属',
    kind: botanicalKind[2],
    fCircle:[9,0,27,0],
    rotateS:18
  },{
    title:'himawari',
    fname:'ヒマワリ',
    genus:'キク科 ヒマワリ属',
    kind:botanicalKind[2],
    desc:'',
    fCircle:[6,0,30,0],
    rotateS:18
  },{
    title:'yamahagi',
    fname:'ヤマハギ',
    genus:'マメ科 ハギ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[3,0,33,0],
    rotateS:20
  },{
    title:'mukuge',
    fname:'ムクゲ',
    genus:'アオイ科 フヨウ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[9,0,27,0],
    rotateS:18
  },{
    title: 'sarusuberi',
    fname:'サルスベリ',
    genus:'ミソハギ科 サルスベリ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[8,0,28,0],
    rotateS:21
  },{
    title:'kosumosu',
    fname:'コスモス',
    genus:'キク科 コスモス属',
    kind:botanicalKind[2],
    desc:'',
    fCircle:[10,3,23,0],
    rotateS:23
  },{
    title:'kikyo',
    fname:'キキョウ',
    genus:'キキョウ科 キキョウ属',
    kind:botanicalKind[3],
    desc:'',
    fCircle:[1,0,35,0],
    rotateS:15
  },{
    title:'taisanboku',
    fname:'タイサンボク',
    genus:'モクレン科 モクレン属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[5,0,31,0],
    rotateS:16
  },{
    title:'kuchinashi',
    genus:'バラ科 ナシ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[6,0,30,0],
    rotateS:9
  },{
    title: 'kaki',
    genus:'バラ科 ナシ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[6,0,30,0],
    rotateS:9
  },{
    title: 'ajisai',
    fname:'アジサイ',
    genus:'アジサイ科 アジサイ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[6,0,30,0],
    rotateS:13
  },{
    title: 'yuri',
    fname:'テッポウユリ',
    genus:'ユリ科 ユリ属',
    kind:botanicalKind[4],
    desc:'',
    fCircle:[4,9,23,0],
    rotateS:20
  },{
    title: 'ayame',
    fname:'ハナショウブ',
    genus:'アヤメ科 アヤメ属',
    kind:botanicalKind[3],
    desc:'',
    fCircle:[7,8,21,0],
    rotateS:12
  },{
    title: 'mokuren',
    fname:'モクレン',
    genus:'モクレン科 モクレン属',
    kind:botanicalKind[0],
    desc:'',
    fCircle:[3,9,15,9],
    rotateS:9
  },{
    title: 'shirotume',
    fname:'シロツメクサ',
    genus:'マメ科 ジャジクソウ属',
    kind:botanicalKind[3],
    desc:'',
    fCircle:[6,5,25,0],
    rotateS:10
  },{
    title: 'lilac',
    fname:'ライラック',
    genus:'モクセイ科 ハシドイ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[4,4,28,0],
    rotateS:10
  },{
    title: 'nashi',
    fname:'ナシ',
    genus:'バラ科 ナシ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[6,0,30,0],
    rotateS:9
  },{
    title: 'fuji',
    fname:'フジ',
    genus:'マメ科 フジ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[1,0,35,0],
    rotateS:15
  },{
    title: 'ringo',
    fname:'リンゴ',
    genus:'バラ科 リンゴ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[2,0,34,0],
    rotateS:11
  },{
    title: 'tsutsuji',
    fname:'ツツジ',
    genus:'ツツジ科 ツツジ属',
    kind:`${botanicalKind[0]}/${botanicalKind[1]}`,
    desc:'',
    fCircle:[3,0,33,0],
    rotateS:9
  },{
    title: 'sumire',
    fname:'スミレ',
    genus:'スミレ科 スミレ属',
    kind:botanicalKind[2],
    desc:'',
    fCircle:[9,4,22,1],
    rotateS:6
  },{
    title: 'momo',
    fname:'モモ',
    genus:'バラ科 モモ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[6,7,23,0],
    rotateS:6
  },{
    title: 'anzu',
    fname:'アンズ',
    genus:'バラ科 サクラ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[2,7,27,0],
    rotateS:8
  },{
    title: 'sakura',
    fname:'ソメイヨシノ',
    genus:'バラ科 サクラ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[2,6,28,0],
    rotateS:8
  },{
    title: 'chulip',
    fname:'チューリップ',
    genus:'ユリ科 チューリップ属',
    kind:botanicalKind[4],
    desc:'',
    fCircle:[9,0,27,0],
    rotateS:6
  },{
    title: 'tanpopo',
    fname:'セイヨウタンポポ',
    genus:'キク科 タンポポ属',
    kind:botanicalKind[3],
    desc:'',
    fCircle:[9 ,4, 21,2],
    rotateS:6
  },{
    title: 'ume',
    fname:'ウメ',
    genus:'バラ科 サクラ属',
    kind:botanicalKind[1],
    desc:'',
    fCircle:[6,5,23,2],//うまくいってない（枯れる時を作る？）
    rotateS:2
  },{
    title: 'suisen',
    fname:'スイセン',
    genus:'ヒガンバナ科 スイセン属',
    kind:botanicalKind[4],
    desc:'',
    fCircle:[5,3,28,0],
    rotateS:2
  },{
    title:'tsubaki',
    fname:'ヤブツバキ',
    genus:'ツバキ科 ツバキ属',
    kind:botanicalKind[0],
    desc:'本州・四国・九州・沖縄(日本では冬に乾燥する地域に分布)・朝鮮南部・中国',
    fCircle:[10,7,13,3],//うまくいってない　空白のところ
    rotateS:34
  },{
    title:'sazanka',
    fname:'サザンカ',
    genus:'ツバキ科 ツバキ属',
    kind:botanicalKind[0],
    desc:'',
    fCircle:[4,5,27,0],//うまくいってない　空白のところ
    rotateS:28
  }
];
function flowerBloom(index) {
  lines[index].classList.add('hidden');
  sres[index].classList.add('hidden');
  colors[index].classList.remove('hidden');
}

//花の説明
for(let i = 0; i < 34; i++){
  flowers[i] = new Flower(flowerList[i].title,flowerList[i].fname,flowerList[i].genus,flowerList[i].kind,flowerList[i].desc,flowerList[i].fCircle,flowerList[i].rotateS);
  //開花月36等分、開花期間
  // 開花始まり　rotateS, 開花期間　this.fCircle[0],開花終わり rotateS+this.fCircle[0]-1
  if(MD >= flowerList[i].rotateS && MD <= (flowerList[i].rotateS + flowerList[i].fCircle[0]-1)){
    flowerBloom(i);
  }
  colors[i].addEventListener('click', () =>{
    flowers[i].writeDescription();
    flowers[i].drawGraph();
    pbook.classList.remove('hidden');
    pbookImg.setAttribute('src', `../img/pbook/pbook_${flowers[i].title}.png`);
  });
}

// モーダルウィンドウ

const description= document.getElementById('description');
const mask = document.getElementById('mask');
const scrollbar = document.getElementById('scroll');

colors.forEach((color) =>{
  color.addEventListener('click', () =>{
    description.classList.remove('hidden');
    mask.classList.remove('hidden');
    scrollbar.classList.remove('hidden');
  });
});

mask.addEventListener('click', () =>{
  mask.classList.add('hidden');
  description.classList.add('hidden');
  scrollbar.classList.add('hidden');
  pbook.classList.add('hidden');
  pbookImg.removeAttribute('src');
});

// グラフの目盛

class Clock {
  constructor(){
    this.r = 100;
  }

  drawFace() {
    const canvas = document.getElementById('monthCircle');
    if (typeof canvas.getContext === 'undefined') {
      return;
    }
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    for (let angle = 0; angle < 360; angle +=5){
      ctx.save();

      ctx.translate(width / 2, height / 2);
      ctx.rotate(Math.PI /180 * angle);
      ctx.strokeStyle = '#666';
      ctx.fillStyle = '#666';
      ctx.lineCap ='round';

      ctx.beginPath();
      ctx.moveTo(0, -this.r);
      if (angle%30 === 0) {
       ctx.lineWidth = 2;
       ctx.lineTo(0, -this.r + 10);
       // ctx.font = '13px Arial'
       //  ctx.textAlign = 'center';
       //  ctx.fillText(angle /30 || 12, 0, -this.r + 25);
      }else if(angle%15 === 0){
        ctx.font = '13px Arial'
        ctx.textAlign = 'center';
        ctx.fillText(angle /30 +0.5, 0, -this.r +10);
      }else if(angle%10 === 0){
       ctx.strokeStyle = '#888';
        ctx.lineTo(0, -this.r + 5);
      }
      
      ctx.stroke();

      ctx.restore();
    }
  }

  run(){
    this.drawFace();
  }
}
const clock = new Clock();
clock.run();

//ページ内リンクスムーススクロール
$('a[href^="#"]').on('click', function () {
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top + 50;
  $("html, body").animate({scrollTop: position}, 1000, "swing");
  return false;
});
