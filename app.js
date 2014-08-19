var main = function () {
  $('.article').click(function() {
    $('.article').removeClass('current');
    $('.description').hide(); 
    $(this).addClass('current');
    $(this).children('.description').show();
  }); //end of click 
  $(document).keypress(function(event) {
  if(event.which === 111) {
    $('.current').children('.description').toggle();
    
    }
     else if (event.which === 110) {
        var currentArticle = $('.current');
        var nextArticle = currentArticle.next();
        currentArticle.removeClass('current');
        nextArticle.addClass('current');
    }
  })//end of keypress;

  
}//end of function;

$(document).ready(main)
    
