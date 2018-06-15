$(function() {
	
	$('.h-nav__button').on('click', function() {
		$('.header__right').fadeIn();
		$('body').css({
			'overflow':'hidden'
		});
		return false;
	});

	$('.h-nav__close').on('click', function() {
		$('.header__right').fadeOut();
		$('body').css({
			'overflow':'auto'
		});
		return false;
	});

});