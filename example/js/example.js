/**
 * jQuery Toggle Display Animate Example
 *
 * Author: Marc Newton <php@marcnewton.info>
 * Website: http://marcnewton.co.uk
 */

$(document).ready(function() {

	$('div.example').on('click', 'button', function (e) {

		e.preventDefault();

		var option = $.extend({
			fire: null
		}, $(this).data());

		var element = $(option.fire);

		if(!element.length && console) {
			console.error('Element not found for fire event... ' + option.fire);
		}

		element.toggleDisplayAnimate({
			onStart: function() {

				if(confirm('Are you sure you want to open the dashboard?')) {

					element.on('click', '.close', function() {

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

	});

});