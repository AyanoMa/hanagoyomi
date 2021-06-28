new fullpage('#fullpage',{
  autoScrolling: true,
  navigation: true,
  loopTop: true,
  loopBottom: true,
  // anchors: ['overview', 'theme', 'aim', 'method'],
  onLeave:(origin,destination,direction) => {
    const section = destination.item;
    const title = section.querySelector('h1');
    const tl = new TimelineMax({delay: 0.5});
    tl.fromTo(title, 0.5, {y: '50', opacity: 0 }, {y: 0, opacity: 1});
    
    if(destination.index === 1){
      const desctiption = document.querySelector('.description');

    }
  }
});

// スライドショー

$('.slider').slick({
  autoplay: true,//自動的に動き出すか。初期値はfalse。
  infinite: true,//スライドをループさせるかどうか。初期値はtrue。
  speed: 1500,//スライドのスピード。初期値は300。
  slidesToShow: 3,//スライドを画面に3枚見せる
  slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
  prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
  nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
  centerMode: true,//要素を中央ぞろえにする
  variableWidth: true,//幅の違う画像の高さを揃えて表示
  dots: true,//下部ドットナビゲーションの表示
});