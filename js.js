$(document).ready(function() {
	$('.icon-header').click(function(){
		let section = $(this).data("scroll");
		$('html, body').animate(
			{scrollTop: $('.'+section).offset().top - 85}
		,800);
	});
});


