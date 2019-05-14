$(document).ready( function() {
  //test
  //$('main').hide(3000).delay(1000).show(500);

  //muis event
  $('figure img').mouseenter( function(){
    $(this).fadeTo(600, .01);
  }).mouseleave(function() {
    $(this).fadeTo(1000, 1);
  }).click( function() {
    $(this).next().toggle(700);
  });

  //footer
  $('footer').click( function() {
    $(this).animate( {
      top: '-=50px',
      opacity: '-=.2'
    }, 900)
  } ).dblclick ( function() {
    $(this).animate( {
      top: '0',
      opacity: '1'
    }, 900)
  });


  $(document).ready(function(e) {
      var unslider04 = $('#b04').unslider({
          dots: true
      }),
      data04 = unslider04.data('unslider');

      $('.unslider-arrow04').click(function() {
          var fn = this.className.split(' ')[1];
          data04[fn]();
      });
  });



});
