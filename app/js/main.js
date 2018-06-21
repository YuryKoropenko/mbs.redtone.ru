$(function() {
	
	$('.p-filter__item label').on('click', function() {
		$(this).children('svg').toggleClass('fa-square');
		$(this).children('svg').toggleClass('fa-check-square');
	});
	$('.p-filter__title').on('click', function() {
		$(this).parent('.p-filter__cat').toggleClass('show');
		$(this).parent('.p-filter__cat').children('.p-filter__list').slideToggle();
		$(this).parent('.p-filter__cat').children('.p-filter__block').slideToggle();
		return false;
	});

	$('.p-filter__mobbtn').on('click', function() {
		$(this).toggleClass('active');
		$('.p-filter').slideToggle();
		return false;
	});
	$('.p-filter__search').on('click', function() {
		$('.page__p-search').slideToggle();
		return false;
	});

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