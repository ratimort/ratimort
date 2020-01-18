$(window).enllax({
type: 'background',
ratio: 0.5,
direction: 'vertical'
});

$(window).scroll(function() {
  // селекторы
  var $window = $(window),
    $body = $('body'),
    $panel = $('.panel');
    $menu = $('.menu-text')
  //
  var scroll = $window.scrollTop() + ($window.height() / 3);
  $panel.each(function() {
    var $this = $(this);
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {   
      // устанавливаем цвет 
      $body.css('background-color', `#${$(this).data('color')}`);
      $menu.css('color', `#${$(this).data('text')}`);
    }
  });
}).scroll();
    $(window).on('load', function () {
        var $preloader = $('#loading'),
            $loader   = $preloader.find('.loader');
            $body = $("html"),
            $htext = $(".header-text"),
        $body.removeAttr("style");
        $loader.slideUp();
        $preloader.delay(700).slideUp(700);
    });
// $(window).scroll(function() {
// var height = $(window).scrollTop();
// if(height > 300){
// $('.about').addClass('style-a');
// $('.head').addClass('style-a');
// $('.image-a').css('display', 'block');
// // $('.image-a').addClass('none');
// } else{
// $('.about').removeClass('style-a');
// $('.head').removeClass('style-a');
// $('.image-a').css('display', 'none');
// }
// });
$(document).ready(function(){
  $(".left-animate").animated("fadeInLeft", "fadeOutDown");
  $(".right-animate").animated("fadeInRight", "fadeOutDown");
});


$(".menu-text").click(function(event){   
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top}, 800);
});


  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       180,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();


