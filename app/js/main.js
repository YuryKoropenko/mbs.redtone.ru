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

	$('.p-sort__link').on('click', function() {
		$(this).parent('li').toggleClass('active');
		$(this).parent('li').children('.p-sort__hidden').stop(true, false).slideToggle();
		return false;
	});

	var wt = $('.p-participant__top').width();
	$('.p-participant__top').height(wt);

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