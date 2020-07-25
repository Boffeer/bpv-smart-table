$(document).ready(function () {
    svg4everybody({});


//calculator

// ---- calculator radio check
$('.calculator-materials-item').click(function(){
	var target = $('#material-' + $(this).val());

	$('.material-img').not(target).hide(0);
	target.fadeIn(500);
});
});

