function write(obj, sentence, i, cb) {
	if (i != sentence.length) {
		setTimeout(function () {
			i++
			// console.log('in timeout', i)
			obj.innerHTML = sentence.substr(0, i + 1) + ' <em aria-hidden="true"></em>';
			write(obj, sentence, i, cb)
		}, 100)
	} else {
		console.log(i)
		cb()
	}
}

function erase(obj, cb, i) {
	var sentence = obj.innerText
	if (sentence.length != 0) {
		setTimeout(function () {
			sentence = sentence.substr(0, sentence.length - 1)
			// console.log('in timeout', i)
			obj.innerText = sentence
			erase(obj, cb)
		}, 18 / (i * (i / 10000000)))
	} else {
		obj.innerText = " "
		cb()
	}
}
var typeline = document.querySelector("#typeline")

function writeerase(obj, sentence, time, cb) {
	write(obj, sentence, 0, function () {
		setTimeout(function () {
			erase(obj, cb)
		}, time)
	})
}

var sentences = [
	"стоя",
	"сидя"
]

var counter = 0

function loop() {
	var sentence = sentences[counter % sentences.length]
	writeerase(typeline, sentence, 3000, loop)
	counter++
}
loop()








$(document).ready(function () {
	svg4everybody({});

	// slider
	$('.trinkets-slider').slick({
		// centerMode: true,
		// centerPadding: '60px',
		slidesToShow: 3,
		arrows: true,
		infinite: false,
		responsive: [{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 3
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});

	$('.reviews-slider').slick({
		// centerMode: true,
		// centerPadding: '60px',
		slidesToShow: 2.1,
		arrows: true,
		infinite: false,
		responsive: [{
				breakpoint: 768,
				settings: {
					arrows: true,
					centerMode: true,
					centerPadding: '40px',
					slidesToShow: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					arrows: true,
					// centerMode: true,
					// centerPadding: '40px',
					slidesToShow: 1
				}
			}
		]
	});

	$('.who-slider').slick({
		dots: true,
		dotsClass: 'dots',
		arrows: false,
		infinite: false,
	});
	// ready end
});











//calculator
// forms
var costSubmitted = false;

// ---- calculator cost
var cost = 930,
	heightModifier = [0, 18, 36, 0],
	widthModifier = [0, 750, 800, 850, 900],
	lengthModifier = [0, [0, 60, 60, 70, 70],
		[0, 90, 90, 100, 100]
	],
	cornersModifier = [0, 5, 0],

	materialModifier = 0,
	frameModifier = 0,
	sizeModifier = 0,
	currentHeight = 18,
	currentMaterial = 0,
	currentFrame = 0,
	currentSize = 0,
	currentCost = 0,
	costPlace = document.querySelector('.calculator-cost__info');

function getCurrentCost() {
	return currentCost = cost + lengthModifier;
}


// ---- calculator radio check
// $('.calculator-height-item').click(function(){
// 	let modifier = $('#frame-' + $(this).attr('data-material')),
// 		modifierAr = $(this).attr('data-material');

// 	$('.frame-img').not(modifier).hide(0);
// 	modifier.fadeIn(500);
// 	console.log(modifier);
// 	console.log(frameModifier[modifierAr]);
// 	return currentFrame = frameModifier[modifierAr];
// });





$('.calculator-height-item').click(function () {
	var modifierHeight = $(this).data('height'),
		picked = $('.height-' + modifierHeight);
	// console.log(picked)

});











// $('.calculator-height-item').click(function(){
// 	let modifier = $('#frame-' + $(this).val()),
// 		modifierAr = $(this).val();
// 	$('.frame-img').not(modifier).hide(0);
// 	modifier.fadeIn(500);
// 	console.log(modifier);
// 	console.log(frameModifier[modifierAr]);
// 	return currentFrame = frameModifier[modifierAr];
// });

$('.calculator-width-item').click(function(){
	let modifierAr = $(this).val();
	console.log(sizeModifier[modifierAr]);
	return currentSize = sizeModifier[modifierAr]
});

$('.calculator-materials-item').click(function () {
	var material = $('#material-' + $(this).attr('data-material')),
		materialAr = $(this).attr('data-material');
	$('.material-img').not(material).hide(0);
	material.fadeIn(500);
	console.log(materialModifier[materialAr]);
	console.log(getCurrentCost())
	return currentMaterial = materialModifier[materialAr];
});


$('.calculator-frame-item').click(function () {
	let modifier = $('#frame-' + $(this).attr('data-frame')),
		modifierAr = $(this).attr('data-frame');
	$('.frame-img').not(modifier).hide(0);
	modifier.fadeIn(500);
	console.log(frameModifier[modifierAr]);

	return currentFrame = frameModifier[modifierAr];
});

// $('.calculator-size-item').click(function(){
// 	let modifierAr = $(this).val();
// 	console.log(sizeModifier[modifierAr]);
// 	return currentSize = sizeModifier[modifierAr]
// });


$('.calculator-check').click(function () {
	$('.calculator-cost__info').val(getCurrentCost()).change();
});

$('.calculator-cost__info').val(materialModifier[1] +
	frameModifier[1] + sizeModifier[1]).change();

$('.calculator-form').submit(function (e) {
	$(':disabled').each(function (e) {
		$(this).removeAttr('disabled');
	})
});


// toggler

$('.burger').click(function(){
	$(this).toggleClass('burger--acitve')
})

