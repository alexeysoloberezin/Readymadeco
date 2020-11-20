var burger = document.querySelector('.burger'); 
var menu = document.querySelector('.header__list'); 


burger.addEventListener('click', function(){
  menu.classList.toggle('header__list-active');
  burger.classList.toggle('active-burger');
});

