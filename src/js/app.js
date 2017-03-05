import jQuery from 'jquery';

window.jQuery = jQuery;
window.$ = jQuery;

import slick from 'slick-carousel';

$(document).ready(function() {
	const slider = $('.js-slider');
	slider.slick({
		prevArrow: '<button class="slider__arrow slider__prev"></button>',
		nextArrow: '<button class="slider__arrow slider__next"></button>',
		dotsClass: 'slider__dots',
		dots: true,
		fade: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					adaptiveHeight: true
				}
			}
		]
	});
});