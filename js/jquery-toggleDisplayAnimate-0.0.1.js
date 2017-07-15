/**
 * jQuery Toggle Display Animate
 *
 * Author: Marc Newton <php@marcnewton.info>
 * Website: http://marcnewton.co.uk
 *
 * TODO : Animation que (daisy chain element animations)
 *
 */

/**
 * Allows the testing of event availability before the document is ready.
 */
var eventIs = function()
{
	this.element = document.createElement('animator');

	this.event = {
		animation: null,
		transition: null
	};
};

/**
 * Test the availability of animation end events.
 * @returns {null|string}
 */
eventIs.prototype.animation = function()
{
	if(this.event.animation !== null) {
		return this.event.animation;
	}

	var key;

	var animations = {
		animation: 'animationend',
		OAnimation: 'oAnimationEnd',
		MozAnimation: 'animationend',
		WebkitAnimation: 'webkitAnimationEnd'
	};

	for (key in animations){
		if (this.element.style[key] !== undefined) {
			this.event.animation = animations[key];
			break;
		}
	}

	return this.event.animation;
};

/**
 * Test the availability of transition end events.
 * @returns {null|string}
 */
eventIs.prototype.transition = function()
{
	if(this.event.transition !== null) {
		return this.event.transition;
	}

	var key;

	var transitions = {
		transition: 'transitionend',
		OTransition: 'oTransitionEnd',
		MozTransition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd'
	};

	for (key in transitions){
		if (this.element.style[key] !== undefined) {
			this.event.transition = transitions[key];
			break;
		}
	}

	return this.event.transition;
};

jQuery.eventIs = new eventIs();

/**
 * Fires animation for forward play
 *
 * @option revert bool Default true, If false the revert animation will not execute
 *
 * @returns {jQuery}
 */
jQuery.fn.toggleDisplayAnimate = function()
{
	var self = this;

	var event = jQuery.eventIs.animation() + ' ' + jQuery.eventIs.transition();

	var option = $.extend({
		revert: true
	}, this.data());

	// Play forward animation
	if(!this.hasClass('display')) {

		this.addClass('animated display');

		this.one(event, function() {
			self.removeClass('animated');
		});

		return this;
	}

	// If revert animation is enabled
	if(option.revert)
	{
		// Play revert animation
		this.one(event, function() {
			self.removeClass('revert display');
		}).addClass('revert');

		return this;
	}

	// If revert is disable
	this.removeClass('animated display');

	return this
};