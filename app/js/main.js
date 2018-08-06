
if ($(window).width() < 1025 && $(window).height() < 1025) {
	$('*').removeClass('btn-glitch');
}
$(function() {
	/*map*/
	$('.map-jspopup').hover(function() {
		$(this).children('.p-map__popup-wp').stop(true, false).fadeIn();
	}, function() {
		$(this).children('.p-map__popup-wp').stop(true, false).fadeOut();
	});
	$('.map-jspopup area').on('click', function() {
		return false;
	});

	$('.m-map__close').on('click', function() {
		$('.m-map__popup').fadeOut();
		return false;
	});
	
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
/*
	$('.p-sort__link').on('click', function() {
		$(this).parent('li').toggleClass('active');
		$(this).parent('li').children('.p-sort__hidden').stop(true, false).slideToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.p-sort__hidden').length) return;
				$('.p-sort__item').removeClass('active');
				$('.p-sort__hidden').slideUp();
				event.stopPropagation();
			});
		return false;
	});
*/
	$('.p-sort__link').on('click', function() {
		$('.p-sort__item').removeClass('active');
		$(this).parent().toggleClass('active');
		$(document).click(function(event) {
			if ($(event.target).closest('.p-sort__item').length) return;
				$('.p-sort__item').removeClass('active');
				event.stopPropagation();
			});
		return false;
	});
	$('.p-sort__close').on('click', function() {
		$(this).parent().removeClass('active');
		return false;
	});

	var wt = $('.p-participant__top').width();
	$('.p-participant__top').height(wt);

	$('.h-nav__button').on('click', function() {
		$(this).addClass('active');
		$('body').addClass('active-mobmenu');
		$('.active-mobmenu__bg').show();
		$('.header__right').show();
		return false;
	});
	$('.active-mobmenu__bg').on('click', function() {
		$('.h-nav__button').removeClass('active');
		$('body').removeClass('active-mobmenu');
		$(this).hide();
		$('.header__right').hide();
	});

	$('.h-nav__close').on('click', function() {
		$('.header__right').fadeOut();
		$('body').css({
			'overflow':'auto'
		});
		return false;
	});

	$(window).scroll(function() {
		if ($(window).width() > 991) {
			var scroll = $(window).scrollTop(); 
			if(scroll >= 120) {
				$('.header-scroll').addClass('header-fixed');
				$('.header-scroll').show();
			} else {
				$('.header-scroll').removeClass('header-fixed');
				$('.header-scroll').hide();
			}
		}
	});

	$('.p-popup__input-mask').mask('+7 (999)999-99-99');
});