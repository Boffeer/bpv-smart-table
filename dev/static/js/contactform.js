jQuery(document).ready(function ($) {

	$(".callback-form").submit(function () {
		var str = $(this).serialize();

		$.ajax({
			type: "POST",
			url: "static/php/callback.php",
			data: str,
			success: function ()
			{
				$('.callback-phone-field').fadeOut(300);
				$('.callback-send').fadeOut(300);
				$('.burger-inner-wrap').fadeOut(300);
				$('.callback-message').html('Ваша заявка принята, мы скоро перезвоним');
				setTimeout(function(){
					$(".callback-form-wrap").fadeOut(300);
					}, 3000)
			}
		}
		);
		return false;
	});
});