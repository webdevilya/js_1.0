$(document).ready(function() {
	 $('.main_btna, .contact, a[href ^= "#sh"]').on("click", function(){
		$('.overlay').fadeIn('slow');
		$('.modal').animate({
				opacity: "show",
				height: "show"
		}, 1000);
	});
	 $('.close').on("click", function(){
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');
	});
	 $('button[href ^= "#sub"').on("click", function(){
		$('.overlay').fadeOut('slow');
		$('.modal').slideUp('slow');
	});
});