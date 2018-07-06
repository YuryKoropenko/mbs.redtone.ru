if (screen.width < 992) {
	$('*').removeClass('btn-glitch');
}
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


	let canvas = document.querySelector('canvas')
	let ctx = canvas.getContext("2d")
	canvas.width = canvas.offsetWidth
	canvas.height = canvas.offsetHeight
	let dim = 8
	let ratio = .43
	let dimOffset = dim
	let maxWidth = canvas.width / (dim * ratio)
	let maxHeight = canvas.height / dim
	var fps = 30;
	let interval = 1000/fps
	let then = Date.now()

	ctx.font = "normal " + dim + "px Montserrat"

	function render(){
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for(let i = 0; i < maxHeight; i++){
			ctx.fillText(  randomString(maxWidth, "aA#!"), 0, (i * dim) + dimOffset)
		}
	}

	function randomString(length, chars = "aA#!") {
		var mask = ''
		if (chars.indexOf('a') > -1) mask += 'abcdefghijklmnopqrstuvwxyz'
			if (chars.indexOf('A') > -1) mask += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
				if (chars.indexOf('#') > -1) mask += '0123456789'
					if (chars.indexOf('!') > -1) mask += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\'
				var result = ''
				for (var i = length; i > 0; --i) result += mask[Math.floor(Math.random() * mask.length)]
					return result
			}


			function update() {
				let now = Date.now()
				let delta = now - then
				if (delta >= interval) {
					then = now - (delta % interval)
					render()
				}
				window.requestAnimationFrame(update)
			}
			window.requestAnimationFrame(update)


		});