$(document).ready(function(){
	

$(".container").click(function() {
	$(".logo-image").fadeOut('slow');
	});

$(".container").click(function() {
	$(".logo-image").fadeIn(3000);
	});

$(".logo-image").hover(function() {
	$(".logo-image").animate ({opacity: 0.8}, 3000);
	});

});