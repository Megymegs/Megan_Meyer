// Smooth scroll function for the 7 Nav bar tabs
$(function(){
  $("#Nav1").click(function(){
    $("html,body").animate(
      {scrollTop:$("#top_row").offset().top
    },"5000");return false
  })
});

$(function(){
  $("#Nav2").click(function(){
    $("html,body").animate(
      {scrollTop:$("#skills").offset().top
    },"5000");return false
  })
});

$(function(){
  $("#Nav3").click(function(){
    $("html,body").animate(
      {scrollTop:$("#middle_row").offset().top
    },"5000");return false
  })
});

$(function(){
  $("#Nav4").click(function(){
    $("html,body").animate(
      {scrollTop:$("#bottom_row").offset().top
    },"5000");return false
  })
});

$(function(){
  $("#Nav5").click(function(){
    $("html,body").animate(
      {scrollTop:$("#stats").offset().top
    },"5000");return false
  })
});

$(function(){
  $("#Nav6").click(function(){
    $("html,body").animate(
      {scrollTop:$("#top_row").offset().top
    },"5000");return false
  })
});

$(function(){
  $("#Nav7").click(function(){
    $("html,body").animate(
      {scrollTop:$("#contact").offset().top
    },"5000");return false
  })
});
// End of Nav bar functions

// Start of h4 overlay functions: download resume function and scroll to view work div
$(function(){
  $("#myWork").click(function(){
    $("html,body").animate(
      {scrollTop:$("#middle_row").offset().top
    },"5000");return false
  })
});

$(".downloadSpan").click(function(){
  var href = $('.downloadLink').attr('href');
  window.location.href = href;
});
// End of overlay functions

// start of progress bar function
$(function(){
  $('#sixty_five').animate({ width: "65%" }, 7000);
  $('#eighty').animate({ width: "80%" }, 7000);
  $('#seventy_six').animate({ width: "76%" }, 7000);
  $('#ninety_five').animate({ width: "95%" }, 7000);
  $('#one_hundred').animate({ width: "100%" }, 7000);
  $('#eighty_seven').animate({ width: "87%" }, 7000);
});
//end of progress bar script

// experiences script to alternate between work and Education
$("#work").click(function(){
  $('#educationHistory').hide();
  $('#workHistory').show();
  $('#work').css('color', '#ef304d');
  $('#work').css("background-color","lightgrey");
  $('#education').css('color', 'black');
  $('#education').css('background-color','white');
});

$("#education").click(function(){
  $('#educationHistory').hide();
  $('#workHistory').show();
  $('#educationHistory').css("display", "block");
  $('#workHistory').css("display", "none");
  $('#education').css('color', '#ef304d');
  $('#education').css('background-color','lightgrey');
  $('#work').css('color', 'black');
  $('#work').css('background-color','white');
});
// end of experiences script

// Count Up script for the References
$('.counter').each(function(){
  var $this = $(this),
  countTo = $this.attr('data-count');

  $({countNum:$this.text()}).animate({
    countNum: countTo
  },
  {
    duration: 5000,
    easing: 'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function(){
      $this.text(this.countNum);
    }
  });
});
// End of count up script


// start of script to expand and colapse art box div
$('#portfolio_image1').click(function() {
  $('#overlayArtBox').show(1200);
  $('#overlayArtBox').css("display", "block")
});

$('#close').click(function(){
  $('#overlayArtBox').hide(1200);
})
// end of art box script
