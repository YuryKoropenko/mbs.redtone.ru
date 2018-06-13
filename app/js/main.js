$(function() {
	
	$('.h-nav__button').on('click', function() {
		$('.h-nav').fadeIn();
		$('body').css({
			'overflow':'hidden'
		});
		return false;
	});

	$('.h-nav__close').on('click', function() {
		$('.h-nav').fadeOut();
		$('body').css({
			'overflow':'auto'
		});
		return false;
	});

});