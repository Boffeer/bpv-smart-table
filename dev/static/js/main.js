$(document).ready(function(){
    svg4everybody({});
	//calculator
	// ready end
});

// forms
var costSubmitted = false;

// ---- calculator cost
var cost = 0,
	materialModifier = [0, 100, 200, 300, 400, 500, 600, 700, 800],
	frameModifier = [0, 10, 20],
	sizeModifier = [0, 1, 2, 3, 4],
	currentMaterial = 0,
	currentFrame = 0,
	currentSize = 0,
	currentCost = 0,
	costPlace = document.querySelector('.calculator-cost__info');

function getCurrentCost() {
	return currentCost = cost + currentMaterial + currentFrame + currentSize;
}

// ---- calculator radio check
$('.calculator-materials-item').click(function(){
	var material = $('#material-' + $(this).val()),
			materialAr = $(this).val();
	$('.material-img').not(material).hide(0);
	material.fadeIn(500);

	// console.log(materialModifier[materialAr]);
	// console.log(getCurrentCost())
	return currentMaterial = materialModifier[materialAr];
});


$('.calculator-frame-item').click(function(){
	let modifier = $('#frame-' + $(this).val()),
		modifierAr = $(this).val();
	$('.frame-img').not(modifier).hide(0);
	modifier.fadeIn(500);
	console.log(frameModifier[modifierAr]);

	return currentFrame = frameModifier[modifierAr];
});

$('.calculator-size-item').click(function(){
	let modifierAr = $(this).val();
	console.log(sizeModifier[modifierAr]);
	return currentSize = sizeModifier[modifierAr]
});


$('.calculator-check').click(function()
{
	$('.calculator-cost__info').val(getCurrentCost()).change();
});

$('.calculator-cost__info').val(materialModifier[1] +
	frameModifier[1] + sizeModifier[1]).change();
	
$('.calculator-form').submit(function(e) {
    $(':disabled').each(function(e) {
        $(this).removeAttr('disabled');
    })
});