$(document).ready(function() {
  $('.awesomeness_teller').on('click', function() {

  });

  $('.meal_teller').on('click', function() {
    $('h1').text(meal)
  })

  $('.skill_teller').on('click', function(){
    var skill = document.location.href.split('/')[4];
    $('h1').text(skill);
  });

  $('.awesomeness_teller').on('click', function() {
    var heading = $(this).data('heading');
    $('h1').text(heading);
  })


  // What other events do you need to bind to make the other pages work?
});

