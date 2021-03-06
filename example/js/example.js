/**
 * jQuery Toggle Display Animate Example
 *
 * Author: Marc Newton <php@marcnewton.info>
 * Website: http://marcnewton.co.uk
 */

(function($){

	$(document).ready(function() {

		$('div.example').on('click', 'button', function (e) {

			e.preventDefault();

			var option = $.extend({
				fire: null,
				demo: null
			}, $(this).data());

			var element = $(option.fire);

			if(!element.length && console) {
				console.error('Element not found for fire event... ' + option.fire);
				return false;
			}

			if(typeof $[option.demo] !== 'function')
			{
				console.error('Function not found... ' + option.demo);
				return false;
			}

			$[option.demo](element);

			return true;

		});

	});

	$.demoBasic = function(element)
	{
		element.toggleDisplayAnimate();
	};

	$.demoCallback = function(element)
	{
		element.toggleDisplayAnimate({

			onStart: function() {

				if(confirm('Are you sure you want to open the dashboard?')) {

					element.on('click', '.close', function(cta) {

						cta.stopPropagation();

						element.toggleDisplayAnimate({
							onStart: function() {

								if(confirm('Are you sure you close the dashboard?')) {
									element.unbind();
									return true;
								}

								return false;
							}
						});

					});

					return true;
				}

				return false;
			}
		});
	};

	$.demoCallbackDelay = function(element)
	{
		element.toggleDisplayAnimate({
			onEnd: function() {
				element.find('.message').html('Patience is bliss!')
			},
			onEndDelay: 2000
		});

	};

	$.demoDaisyChain = function(element)
	{
		element.toggleDisplayAnimate({
			onEnd: function() {

				$('#info-one').chainAnimation();

				element.on('click', '.close-advanced', function(cta) {

					$('#info-four').chainAnimation(true);

				});
			}
		});
	};

	$.demoDaisySequence = function(element)
	{
		element.toggleDisplayAnimate({
			onEnd: function() {
				element.find('.info').chainAnimation();
			}
		});
	};

	$('.example').on('click', '.close', function() {
		$(this).parent().toggleDisplayAnimate();
	});

})(jQuery);