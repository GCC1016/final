$(document).ready(function() {
	$(".start").click(function() {
		$(".start").animate({left: "-=3700px"}, 15000);
		$(".line").animate({left: "-=3700px"}, 15000);
		$(".window").animate({left: "-=3700px"}, 15000);
		$(".text").fadeOut(4000);
		$(".donor").delay(14000).fadeTo(700, 1);
		$(".when").delay(16000).fadeTo(700, 1);
		$(".another").delay(17000).fadeTo(700, 1);
		$(".learn").delay(19000).fadeTo(1500,1);
		$(".button").delay(21000).fadeTo(1500,1);
	});

});