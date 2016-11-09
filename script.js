$("#goButton").click(function() {
     $('html, body').animate({
         scrollTop: $("#whoAmI").offset().top   }, 500);
 });

$(document).ready(function () {
	$('.fa-bars').click(function () {
		$(this).animate({
			left: '125px'
		},200);
		$('.left').animate({
			left: '0px'
		},200);
		$('.textLeft').animate({
			marginLeft: '15px'
		},200);
	});
	$('.fa-window-close-o').click(function () {
		$('.left').animate({
			left: '-125px'
		},200);
		$('.fa-bars').animate({
			left: '0px'
		},200);
	});
	$("#menuWho").click(function() {
     $('html, body').animate({
         scrollTop: $("#intrests_hobbies").offset().top   }, 500);
 	});
	$("#intrests").click(function() {
     $('html, body').animate({
         scrollTop: $("#whoAmI").offset().top   }, 500);
 	});
	$("#bitMore").click(function() {
     $('html, body').animate({
         scrollTop: $("#aBitMore").offset().top   }, 500);
	 });
	$("#Thanks").click(function() {
     $('html, body').animate({
         scrollTop: $("#thanks").offset().top   }, 500);
 	});
});