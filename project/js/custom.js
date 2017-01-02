
$(window).load(function(){
  $(window).scroll(function(){
    if($(window).scrollTop()>150){
      if( ! ($('#menu').hasClass('menue-fix'))) {
        $('#menu')
        .addClass('menue-fix')
      }
    } else {
      if($('#menu').hasClass('menue-fix')) {
        $('#menu')
        .removeClass('menue-fix')
      }
    }
  });
});


$(function () {
    $(".rslides").responsiveSlides({
        auto: true,
        pager: true,
    });
});

$(document).ready(function () {
              $(".collapse-img").click(function () {
                  $("#menu").slideToggle();

              });


           });
$(window).load(function(){
    if($(window).scrollTop()<300)
    $('.scroll-img').hide();
});
$(window).scroll(function () {
    if($(window).scrollTop()<300){
       $('.scroll-img').fadeOut();
    }else{
        $('.scroll-img').fadeIn();
    }
});
$("a[href='#menu']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
});