'use strict'

{
  const asgo01 = document.getElementById('asgo01');
  const asgo02 = document.getElementById('asgo02');
  const asgo03 = document.getElementById('asgo03');
  const asgo04 = document.getElementById('asgo04');
  const asgo05 = document.getElementById('asgo05');
  const asgo06 = document.getElementById('asgo06');
  const asgos = document.querySelectorAll('.asgo');
  let now = new Date();
  let d = moment();

  function addHide() {
    asgos.forEach((asgos,index) => {
      asgos.classList.add('hide');
    });
  }

  function checkSeasons(){
    //季節判定 0起点
    let getSeasons = now.getMonth();
    if((getSeasons >= 4) && (getSeasons < 5)) { 
      addHide();
      asgo01.classList.remove('hide');
      asgo01.classList.add('nowMonth'); }
    else if( (getSeasons >= 5) && (getSeasons < 6) ) { 
      addHide();
      asgo02.classList.add('nowMonth'); }
    else if( getSeasons === 7 ) { 
      addHide();
      asgo03.classList.add('nowMonth'); }
    else if( (getSeasons === 8 ) ) { 
      addHide();
      asgo04.classList.add('nowMonth');  }
    else if( getSeasons === 9 ) { 
      addHide();
      asgo05.classList.add('nowMonth');  }
    else if( getSeasons === 10 ) { 
      addHide();
      asgo06.classList.add('nowMonth');  }
    console.log(getSeasons);
    }
    
    setTimeout(checkSeasons ,5*1000); 
  }


  {
    const titleWord = document.getElementById('titleWord');
    const modal = document.getElementById('modal');

    titleWord.addEventListener('click' , () => {
      modal.classList.toggle('hidden');
    });

  }


