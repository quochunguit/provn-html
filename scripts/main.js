'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});





$('.slider-logo .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:5
        },
        600:{
            items:5
        },
        1000:{
            items:5
        }
    }
});



$('.ui.checkbox')
    .checkbox()
;

$(".md-checkbox-1 .field-true").click(function(){
    $(".md-checkbox-1 .field-true .md-check").addClass('active');
});
$(".md-checkbox-1 .field-false").click(function(){
    $(".md-checkbox-1 .field-true .md-check").removeClass('active');
});
$(".md-checkbox-2 .field-true").click(function(){
     $(".md-checkbox-2 .field-true .md-check").addClass('active');
});
$(".md-checkbox-2 .field-false").click(function(){
    $(".md-checkbox-2 .field-true .md-check").removeClass('active');
});
$(".md-checkbox-3 .field-true").click(function(){
     $(".md-checkbox-3 .field-true .md-check").addClass('active');
});
$(".md-checkbox-3 .field-false").click(function(){
    $(".md-checkbox-3 .field-true .md-check").removeClass('active');
});
$(".md-checkbox-4 .field-true").click(function(){
    $(".md-checkbox-4 .field-true .md-check").addClass('active');
});
$(".md-checkbox-4 .field-false").click(function(){
    $(".md-checkbox-4 .field-true .md-check").removeClass('active');
});
$(".md-checkbox-5 .field-true").click(function(){
   $(".md-checkbox-5 .field-true .md-check").addClass('active');
});
$(".md-checkbox-5 .field-false").click(function(){
    $(".md-checkbox-5 .field-true .md-check").removeClass('active');
});
$(".md-checkbox-6 .field-true").click(function(){
     $(".md-checkbox-6 .field-true .md-check").addClass('active');
});
$(".md-checkbox-6 .field-false").click(function(){
    $(".md-checkbox-6 .field-true .md-check").removeClass('active');
});


function fixH () {
  let vh = window.innerHeight * 0.01;
  // Then we set the value in the --vh custom property to the root of the document
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  var winH = window.innerHeight +'px ' ;
  var height_col_1 = $('.section-zone-6 .md-iframe-2 .content .md-row-1 .md-col-10').outerHeight();
  var height_col_2 = $('.section-zone-6 .md-iframe-2 .content .md-row-2 .md-col-3').outerHeight();
   $('.section-zone-6 .md-iframe-2 .content .md-row-1 .md-col-2').css("height",height_col_1);
  $('.section-zone-6 .md-iframe-2 .content .md-row-2 .md-col-2').css("height",height_col_2);
  $('.section').css('height', 'calc(var(--vh, 1vh) * 99.8');
  $('.section .md-iframe').css('height', 'calc(var(--vh, 1vh) * 99.8')
}
$( document ).ready(function(e) {
  fixH()
});
jQuery(window).on('load', function() {
  fixH()
})
jQuery(window).on('resize', function() {
  fixH()
});

$('.slider-zone-2 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.slider-zone-4 .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.slider-zone-5 .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


$('.slider-zone-6 .owl-carousel').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function openLink(url) {
  var win = window.open(url, '_self');
  win.focus();
}

new WOW().init();