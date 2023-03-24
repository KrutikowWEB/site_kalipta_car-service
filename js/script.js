
$('.reviews__slider').slick({
  vertical: true,
  verticalSwiping: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"><svg width="34" height="17" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14.975L15.6345 2.27027C16.4025 1.55465 17.5931 1.55456 18.3612 2.27007L32 14.975" stroke="#337AFF" stroke-width="3" stroke-linecap="round"/></svg></button>',
  nextArrow: '<button type="button" class="slick-next"><svg width="34" height="17" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 2.025L18.3655 14.7297C17.5975 15.4453 16.4069 15.4454 15.6388 14.7299L2 2.025" stroke="#337AFF" stroke-width="3" stroke-linecap="round"/></svg></button>',
});

let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

$('.gallery__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-next"><svg width="34" height="17" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 2.025L18.3655 14.7297C17.5975 15.4453 16.4069 15.4454 15.6388 14.7299L2 2.025" stroke="#337AFF" stroke-width="3" stroke-linecap="round"/></svg></button>',
  nextArrow: '<button type="button" class="slick-prev"><svg width="34" height="17" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14.975L15.6345 2.27027C16.4025 1.55465 17.5931 1.55456 18.3612 2.27007L32 14.975" stroke="#337AFF" stroke-width="3" stroke-linecap="round"/></svg></button>',
});

$('.promotion__slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-next"><svg width="34" height="17" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 2.025L18.3655 14.7297C17.5975 15.4453 16.4069 15.4454 15.6388 14.7299L2 2.025" stroke="#337AFF" stroke-width="3" stroke-linecap="round"/></svg></button>',
  nextArrow: '<button type="button" class="slick-prev"><svg width="34" height="17" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14.975L15.6345 2.27027C16.4025 1.55465 17.5931 1.55456 18.3612 2.27007L32 14.975" stroke="#337AFF" stroke-width="3" stroke-linecap="round"/></svg></button>',
});

$('.about__slider').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  variableWidth: true,
  prevArrow: '<button type="button" class="slick-next"><svg width="34" height="17" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 2.025L18.3655 14.7297C17.5975 15.4453 16.4069 15.4454 15.6388 14.7299L2 2.025" stroke="#337AFF" stroke-width="3" stroke-linecap="round"/></svg></button>',
  nextArrow: '<button type="button" class="slick-prev"><svg width="34" height="17" viewBox="0 0 34 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 14.975L15.6345 2.27027C16.4025 1.55465 17.5931 1.55456 18.3612 2.27007L32 14.975" stroke="#337AFF" stroke-width="3" stroke-linecap="round"/></svg></button>',
});

$('input[name=phone]').mask("+7(999) 999-99-99");

$('[data-modal=order]').on('click', function() {
  $('.modal_order').fadeIn(400);
});
$('.close').on('click', function() {
  $('.modal_order').fadeOut(400);
});


$('[data-modal=enroll]').on('click', function() {
  $('.modal_enroll').fadeIn(400);
});
$('.close').on('click', function() {
  $('.modal_enroll').fadeOut(400);
});

$('a[href^="#"]').click(function(){
  var target = $(this).attr('href');
  $('html, body').animate({scrollTop: $(target).offset().top}, 800);
  return false;
  });

/* Гамбургер и адаптивное меню */

/* window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu__list'),
  menuItem = document.querySelectorAll('.menu__item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu__list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu__list_active');
      })
  })
}) */


//SLick-slider где при нажатии на конкретную кнопку выходит конкретный слайд!!!! Крутая вещь!!


  /* $('.volume__slick').on('init', function(event, slick){
    var dots = $( '.slick-dots li' );
    console.log( 'Оптовый 40 000 л.' );
    dots.each( function( k, v){
      $(this).find( 'button' ).addClass( 'heading'+ k );
    });
    var items = slick.$slides;
    items.each( function( k, v){
        var text = $(this).find( 'h3' ).text();
        $( '.heading' + k ).text(text);
    });
  });
  $('.volume__slick').slick({
    dots: true,
    focusOnSelect: true,
    infinite: true,
    arrows: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  }); */




  /* validateForms('#consultation form'); //Если форм больше, то меняем ID и все
  validateForms('#order form'); */
  
  



  /* Для отправки данных без перезагрузки страницы технология AJAcs */
  
  /* $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#question, #order').fadeOut();  // прописывается id блоков , которые закрываются
        $('#backup').fadeIn('slow');   // проиписывается id блоков , кот. открываются
  
        $('form').trigger('reset');
    });
    return false;
  }); */
  