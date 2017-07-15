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

		element.toggleDisplayAnimate().one('click', '.close', function() {
			element.toggleDisplayAnimate();
		});

	});

});