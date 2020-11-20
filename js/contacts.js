

$('.countr__item').click(function(e){  
  if (this.classList.contains('countr__item-active')){
    this.addClass('countr__item-active');
  } else{
    $('.countr__item').removeClass('countr__item-active');
    this.classList.add('countr__item-active')
  }
  iffunc();
});

function iffunc(){  
  if ($('.cor-germany').hasClass('countr__item-active')){
    removeAdd('.countr__geo', '.countr__germany-geo');
    removeAdd('.countr__tel','.countr__germany-tel');
    removeAdd('.countr__mail','.countr__germany-mail');
    removeAdd('.countr__social','.countr__germany-social');
    removeAdd('.countr__skype','.countr__germany-skype');
    removeAddCirlce('.cirlce','.cirlce2');

  } else if ($('.cor-singapore').hasClass('countr__item-active')){
    removeAdd('.countr__geo', '.countr__singapore-geo');
    removeAdd('.countr__tel','.countr__singapore-tel');
    removeAdd('.countr__mail','.countr__singapore-mail');
    removeAdd('.countr__social','.countr__singapore-social');
    removeAdd('.countr__skype','.countr__singapore-skype');
    removeAddCirlce('.cirlce','.cirlce3');

  }else if ($('.cor-poland').hasClass('countr__item-active')){
    removeAdd('.countr__geo', '.countr__poland-geo');
    removeAdd('.countr__tel','.countr__poland-tel');
    removeAdd('.countr__mail','.countr__poland-mail');
    removeAdd('.countr__social','.countr__poland-social');
    removeAdd('.countr__skype','.countr__poland-skype');
    removeAddCirlce('.cirlce','.cirlce1');

  }else if ($('.cor-hongkong').hasClass('countr__item-active')){
    removeAdd('.countr__geo', '.countr__hk-geo');
    removeAdd('.countr__tel','.countr__hk-tel');
    removeAdd('.countr__mail','.countr__hk-mail');
    removeAdd('.countr__social','.countr__hk-social');
    removeAdd('.countr__skype','.countr__hk-skype');
    removeAddCirlce('.cirlce','.cirlce4');
    

  }
}

function removeAdd(global, pick){
  $(global).removeClass('active');
  $(pick).addClass('active');
}
function removeAddCirlce(g,p){
  $(g).removeClass('cirlce-active');
  $(p).addClass('cirlce-active');
}