// This javascript file initiates slick using slick.min.js.

$(document).ready(function(){
  // Initialize slick
  $('.slick-container').slick({
    infinite: false,
    edgeFriction: 0,
    prevArrow: false,
    nextArrow: $('.button-right'),
    dots: true,
    customPaging : function() {
      return '<span class="slick-dot"></span>'
    },
    appendDots: $("footer")
  });
});
