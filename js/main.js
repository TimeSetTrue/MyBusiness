$(function () {
	$(window).scroll(function() {
	    $('.backg').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
})

$(function () {
	$(window).scroll(function() {
	    $('.merit').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("rotateInDownRight");
	        }
	    });
	});
})

$(function () {
	$(window).scroll(function() {
	    $('.connect').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("rotateInUpRight");
	        }
	    });
	});
})

$(function () {
	$(window).scroll(function() {
	    $('.row__item').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("wobble");
	        }
	    });
	});
})

$(function () {
	$(window).scroll(function() {
	    $('.pictures__item').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("zoomIn");
	        }
	    });
	});
})