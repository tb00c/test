$(function() { 
  $("html").css({'font-size':100/750*$(window).width()+'px'});
  $(window).resize(function(){  
    $("html").css({'font-size':100/750*$(window).width()+'px'});
  });
  
  $('.tab li').click(function () {		
		$(this).addClass("on");
	});
  $('.tab li').eq(0).click(function () {		
		$(this).siblings("li").removeClass("on");		
	});
  $('.tab li').eq(1).click(function () {		
		$('.tab li').eq(0).removeClass("on");		
	});
  $('.tab li').eq(2).click(function () {		
		$('.tab li').eq(0).removeClass("on");		
	});
$(".show").click(function(){
  $(".alertBox").show();
});
$(".show2").click(function(){
  $(".alertBox2").show();
});
$(".close").click(function(){
  $(".alertBox").hide();
  $(".alertBox2").hide();
});

});


