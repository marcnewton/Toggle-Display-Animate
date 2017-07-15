/**
 * jQuery Toggle Display Animate Example
 *
 * Author: Marc Newton <php@marcnewton.info>
 * Website: http://marcnewton.co.uk
 */

$(document).ready(function() {

	$('button').on('click', function (e) {

		e.preventDefault();

		$('#dashboard').toggleDisplayAnimate('dashboard').one('click', '.close', function() {
			$('#dashboard').toggleDisplayAnimate('dashboard');
		});

	});

});