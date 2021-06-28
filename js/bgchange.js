   // bgcolor
   {
     let d = moment();
   const bg = document.getElementById('bg');
   let getHours = d.get('h');
   function checkHours() {
     console.log(getHours);
     switch(getHours){
       case 0:
         bg.classList.add('sky-gradient-00');
         break;
       case 1:
         bg.classList.add('sky-gradient-01');
         break;
       case 2:
         bg.classList.add('sky-gradient-02');
         break;
       case 3:
         bg.classList.add('sky-gradient-03');
         break;
       case 4:
         bg.classList.add('sky-gradient-04');
         break;
       case 5:
         bg.classList.add('sky-gradient-05');
         break;
       case 6:
         bg.classList.add('sky-gradient-06');
         break;
       case 7:
         bg.classList.add('sky-gradient-07');
         break;
       case 8:
         bg.classList.add('sky-gradient-08');
         break;
       case 9:
         bg.classList.add('sky-gradient-09');
         break;
       case 10:
         bg.classList.add('sky-gradient-10');
         break;
       case 11:
         bg.classList.add('sky-gradient-11');
         break;
       case 12:
         bg.classList.add('sky-gradient-12');
         break;
       case 13:
         bg.classList.add('sky-gradient-13');
         break;
       case 14:
         bg.classList.add('sky-gradient-14');
         break;
       case 15:
         bg.classList.add('sky-gradient-15');
         break;
       case 16:
         bg.classList.add('sky-gradient-16');
         break;
       case 17:
         bg.classList.add('sky-gradient-17');
         break;
       case 18:
         bg.classList.add('sky-gradient-18');
         break;
       case 19:
         bg.classList.add('sky-gradient-19');
         break;
       case 20:
         bg.classList.add('sky-gradient-20');
         break;
       case 21:
         bg.classList.add('sky-gradient-21');
         break;
       case 22:
         bg.classList.add('sky-gradient-22');
         break;
       case 23:
         bg.classList.add('sky-gradient-23');
         break;
     }
   }
   checkHours();
 }