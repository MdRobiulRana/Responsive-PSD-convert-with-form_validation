(function($){
	'use strict';

$('.web-menu-icon i.fa-bars').on('click', function(){
	$('.web-header-menu').fadeIn();
	$('.web-menu-icon i.fa-bars').fadeOut();
	$('.web-menu-icon i.fa-times').fadeIn();
});
$('.web-menu-icon i.fa-times').on('click', function(){
	$('.web-header-menu').fadeOut();
	$(this).fadeOut();
	$('.web-menu-icon i.fa-bars').fadeIn();
})

$(window).scroll(function(){
	var scrollSize = $(window).scrollTop();

	if(scrollSize > 600){
		$('.scroll').fadeIn();
	}
	else{
		$('.scroll').fadeOut();
	}
})
$('.scroll i').on('click', function(){
	$('html').animate({scrollTop:0});
})

$(window).resize(function(){
	var screenSize = $(window).width();

	if(screenSize > 991){
		$('.web-header-menu').removeAttr('style');
	}

})

})(jQuery);