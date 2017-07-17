/**
 * jQuery Toggle Display Animate
 *
 * Author: Marc Newton <php@marcnewton.info>
 * Website: http://marcnewton.co.uk
 *
 */

;(function($) {

	/**
	 * Allows the testing of event availability before the document is ready.
	 */
	var animationEvents = function()
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
	animationEvents.prototype.animation = function()
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
	animationEvents.prototype.transition = function()
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

	$.animationEvents = new animationEvents();

	$.fn.chainAnimation = function()
	{
		// TODO iterate multiple objects
		
		var params;
		var element = $(this);

		var option = {
			next: element.data('animate-next'),
			delay: parseInt(element.data('animate-delay'), null),
			on: element.data('animate-on')
		};

		var event = function() {
			$(option.next).chainAnimation();
		};

		if(option.on === 'start') {

			params = {
				onStart:event,
				onStartDelay:option.delay
			};

		} else {

			params = {
				onEnd:event,
				onEndDelay:option.delay
			}
		}

		element.toggleDisplayAnimate(params);

		return true;

	};

	/**
	 * Fires animation for forward play
	 *
	 * @option revert bool Default true, If false the revert animation will not execute
	 * @option onStart bool|string|function
	 * @option onStartDelay int time in ms to delay event callback
	 * @option onEnd bool|string|function
	 * @option onEndDelay int time in ms to delay event callback
	 *
	 * @param params array|object
	 *
	 * @returns {jQuery}
	 */
	$.fn.toggleDisplayAnimate = function(params)
	{
		var event = $.animationEvents.animation() + ' ' + $.animationEvents.transition();

		if(this.animationDelay !== undefined){
			clearTimeout(this.animationDelay);
		}

		var data = {
			revert: this.data('animate-revert'),

			onStart: this.data('animate-start'),
			onStartDelay: this.data('animate-start-delay'),

			onEnd: this.data('animate-end'),
			onEndDelay: this.data('animate-end-delay')
		};

		this.animationOption = $.extend({
			revert: true,
			onStart: false,
			onStartDelay: 0,
			onEnd: false,
			onEndDelay: 0
		}, data, params);

		var self = this;

		// If callback returns false then do not run any animations else continue.
		if(!callback(self, 'onStart')) {
			return this;
		}

		// Play forward animation
		if(!this.hasClass('display')) {

			this.addClass('animated display');

			this.one(event, function() {

				if(!callback(self, 'onEnd')) {
					return false;
				}

				self.removeClass('animated');
			});

			return this;
		}

		// If revert animation is enabled
		if(this.animationOption.revert)
		{
			// Play revert animation
			this.one(event, function() {

				if(!callback(self, 'onEnd')) {
					return false;
				}

				self.removeClass('revert display');

			}).addClass('revert');

			return this;
		}

		// If revert is disable
		this.removeClass('animated display');

		return this
	};

	/**
	 *
	 * @param object object The element animation instance
	 * @param action string The event type to trigger.
	 * @returns boolean Returns false if event is not a function else returns value from callback function, Always returns true if a callback delay is used.
	 */
	function callback(object, action)
	{
		var event = object.animationOption[action];

		// No callback configured so return true to continue.
		if(event === false) {
			return true;
		}

		var keyDelay = action + 'Delay';
		var delay = object.animationOption[keyDelay];

		if(typeof event === 'string') {
			event = window[event];
		}

		if(typeof event === 'function') {

			if(delay !== 0) {
				object.animationDelay = setTimeout(event,delay);
				return true;
			}

			return event();
		}

		return false;
	}

})(jQuery);