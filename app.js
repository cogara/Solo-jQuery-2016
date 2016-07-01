$(function() {
  var numRed = 0;
  var numBlue = 0;
  var numGreen = 0;
  var numYellow = 0;

  $('button').on('click',function() {
    var tempColor = $(this).data('color');
    $('.container').append('<div class="color-cube ' + tempColor + '" data-color="' + tempColor + '"></div>');
    $('.container div').fadeIn(200);
    console.log(tempColor);
    switch(tempColor) {
      case 'red':
        numRed++
        $('#red span').text(numRed);
        break;
      case 'blue':
        numBlue++
        $('#blue span').text(numBlue);
        break;
      case 'green':
        numGreen++
        $('#green span').text(numGreen);
        break;
      case 'yellow':
        numYellow++
        $('#yellow span').text(numYellow);
        break;
    }
  })


  $('.container').on('click', '.color-cube', function() {
    var tempColor = $(this).data('color');
    $(this).fadeOut(200);
    var tempElement = $(this);
    setTimeout(function() {
      $(tempElement).remove();
      console.log('removed');
    }, 200);
    switch(tempColor) {
      case 'red':
        numRed--;
        $('#red span').text(numRed);
        break;
      case 'blue':
        numBlue--;
        $('#blue span').text(numBlue);
        break;
      case 'green':
        numGreen--;
        $('#green span').text(numGreen);
        break;
      case 'yellow':
        numYellow--;
        $('#yellow span').text(numYellow);
        break;
    }

  })

})
