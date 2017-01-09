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
		centerMode: true,
		centerPadding: '35%',
		autoplay: true,
		responsive: [
		    {
		      breakpoint: 999,
		      settings: {
		        infinite: true,
		        centerPadding: '30%'
		      }
		    // },
		    // {
		    //   breakpoint: 600,
		    //   settings: {
		    //   }
		    // },
		    // {
		    //   breakpoint: 480,
		    //   settings: {
		    //     slidesToShow: 1,
		    //     slidesToScroll: 1
		    //   }
		    }
		]
	});
});

