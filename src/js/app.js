// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

console.log('Hello, World!');

$(document).ready(function (){
	$('.slider').slick();
});

$(document).ready(function (){
	$('.slider__bottom').slick({
		slidesToShow: 3,
	});
});

