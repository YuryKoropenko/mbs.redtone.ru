// Glitch Timeline Function
var $text = document.querySelector('.btn-glitch-active'),
    $filter = document.querySelector('.svg-sprite'),
    $turb = $filter.querySelector('#filter feTurbulence'),
    turbVal = { val: 0.000001 },
    turbValX = { val: 0.000001 };

var glitchTimeline = function() {
    var timeline = new TimelineMax({
        repeat: -1,
        repeatDelay: 2,
        paused: true,
        onUpdate: function () {
            $turb.setAttribute('baseFrequency', turbVal.val + ' ' + turbValX.val);
        }
    });

    timeline
        .to(turbValX, 0.1, { val: 0.5 })
        .to(turbVal, 0.1, { val: 0.02 });
    timeline
        .set(turbValX, { val: 0.000001 })
        .set(turbVal, { val: 0.000001 });
    timeline
        .to(turbValX, 0.2, { val: 0.4 }, 0.4)
        .to(turbVal, 0.2, { val: 0.002 }, 0.4);
    timeline
        .set(turbValX, { val: 0.000001 })
        .set(turbVal, { val: 0.000001 });

    // console.log("duration is: " + timeline.duration());

    return {
        start: function() {
            timeline.play(0);
        },
        stop: function() {
            timeline.pause();
        }
    };
};

btnGlitch = new glitchTimeline();


$('.btn-glitch').on('mouseenter', function () {
          $(this).addClass('btn-glitch-active');
          btnGlitch.start();
    });
$('.btn-glitch').on('mouseleave', function () {
        var $this = $(this);
        if ( $this.hasClass('btn-glitch-active') ) {
            $this.removeClass('btn-glitch-active');
            btnGlitch.stop();
        }
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