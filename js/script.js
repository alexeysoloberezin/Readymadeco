// var bulls = document.querySelectorAll('.header__bull');

// for (var bull of bulls){
//   bull.addEventListener('click', function(){
//     if (this.classList.contains('bull-active')){     
//       this.classList.add('bull-active');
//     } else{
  
//     }
   
   
//   });
// }

var burger = document.querySelector('.burger'); 
var menu = document.querySelector('.header__list'); 


burger.addEventListener('click', function(){
  menu.classList.toggle('header__list-active');
  burger.classList.toggle('active-burger');
});