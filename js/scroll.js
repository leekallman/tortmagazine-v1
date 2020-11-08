$(document).on('scroll', function(){
    //the scrollTop method gives us back a pixel value for how far
  // it is to the top of the page (from our scroll position)
  var pixelsFromTop = $(document).scrollTop()
  $('.progress').text(pixelsFromTop + ' pixels from top')
  
  if (pixelsFromTop > 50) {
      $('header').addClass('hidden')
      } else {
       $('header').removeClass('hidden')
      }

  var documentHeight = $(document).height()
  var windowHeight = $(window).height()
  var difference = documentHeight - windowHeight
  var percentage = 100 * pixelsFromTop / difference
  console.log(percentage)
    $('.bar').css('width', percentage + '%')
  })

$(document).on('scroll', function(){
  $('.about-values').css("left", Math.max(1300 - 0.5*window.scrollY, 0) + "px")

})