// Smooth scroll function for the 7 Nav bar tabs
$(function(){
  $("#Nav1").click(function(){
    $("html,body").animate(
      {scrollTop:$("#top_row").offset().top
    },"5000");return false
  })
})

$(function(){
  $("#Nav2").click(function(){
    $("html,body").animate(
      {scrollTop:$("#skills").offset().top
    },"5000");return false
  })
})

$(function(){
  $("#Nav3").click(function(){
    $("html,body").animate(
      {scrollTop:$("#middle_row").offset().top
    },"5000");return false
  })
})

$(function(){
  $("#Nav4").click(function(){
    $("html,body").animate(
      {scrollTop:$("#bottom_row").offset().top
    },"5000");return false
  })
})

$(function(){
  $("#Nav5").click(function(){
    $("html,body").animate(
      {scrollTop:$("#stats").offset().top
    },"5000");return false
  })
})

$(function(){
  $("#Nav6").click(function(){
    $("html,body").animate(
      {scrollTop:$("#top_row").offset().top
    },"5000");return false
  })
})

$(function(){
  $("#Nav7").click(function(){
    $("html,body").animate(
      {scrollTop:$("#contact").offset().top
    },"5000");return false
  })
})
// End of Nav bar functions

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
