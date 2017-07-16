# Toggle Display CSS3 Animation

Allow keyframe CSS3 animations and reversal of animations to run on elements styled with display property.

Modern Browsers, Lightweight, Device Friendly, Skeleton Script. 

[View Demo](http://marcnewton.co.uk/projects/toggle-display-animate/)

[View Project Taska](https://github.com/marcnewton/Toggle-Display-Animate/issues)
---

## Usage Case

- The need to create lightweight bespoke animation solutions.
- Have an html element hidden on the page using `display:none;` *(Any method for hiding or displaying an object can be used!)*
- On an event to `display:block;` or `display:flex;` etc. the element followed by a CSS3 Animation.
- Animation to run in reverse or run different animation and then `display:none;` at the end of the animation.
- Can be used to trigger animation events in general. Showing and hiding elements is optional.

---

## Dependencies

- Any version of [jQuery](http://jquery.com/download/) loaded in the page `<head>` - _Tested with v3.2.1_
_jQuery only required if you are not using the standalone version_

---

## Quick Installation

Only required file from the project is `js/jquery-toggleDisplayAnimate.js` or `js/toggleDisplayAnimate.js (TODO)`

**jQuery Extension**
```html
<script type="application/javascript" src="js/jquery-toggleDisplayAnimate.js"></script>
```
Place the jQuery Extension script before the closing `<body>` tag or after jQuery.

---

**JavaScript Standalone**
```markdown
TODO - Create pure standalone javascript version
```
The standalone version can be placed in the document `<head>`

---

## Creating Animations

Example below uses `import/animation/mixins`; helps you to write cross browser compatible animations.

There are 3 special css class names used for the functionality:

* `.display` - (Optional) The visibility styling of the object using any css method to render it but can be used for anything.
* `.animatied` - The animation to use when displaying the element.
* `.revert` - (Optional) The animation to use when hiding the object.

**HTML Markup**

````html
<div id="my-element"></div>
````

**Creating a key frame (LESS)**
```css
.keyframes(myAnimation;{
	0% {
		opacity:0;
	}

	100% {
		opacity:1;
	}
});
```

**Applying Animation to element (LESS)**

```less
#my-element {

    display:none;

	&.animated {
		.animation('myAnimation');
		.animation-duration(0.5s);
	}

	&.revert {
		.animation('myAnimation');
		.animation-duration(0.3s);
		.animation-direction(reverse);
	}

	&.display {
		display:flex;
	}
}
```

**Trigger an animation**

```js
$(document).ready(function () {
    $('#my-element').toggleDisplayAnimate();
});
```

`toggleDisplayAnimate` toggles the `.display` class on the element.
Functionality is similar to [jQuery.toggleClass](http://api.jquery.com/toggleClass/).

It would be good to note at this point that since we are using class toggles only, it is possible to remedy other uses for `.display` and `.revet` other than to toggle element visibility.
You are only limited by you imagination

If triggered again before the animation is complete with `.revert` set and using *reverse* direction then the animation will stop and run backwards from its current keyframe position.

If `.revert` is not set, the animation stops and the css styles in class `.display` are dropped from the element.

---

## Tested browsers

### Windows
- *Google Chrome* v59 - v60
- *Microsoft Edge* v40
- *Internet Explorer* v11
- *Firefox* v41
- *Opera* v46

### Mac OSX
- *Safari* v10
- *Safari Technology Preview* v35 

### Android 6.0.1
- *Google Chrome* v59 - v60

If a browser does not support CSS3 Animations then the elements will simply toggle their display state only with no animation.

There is no plan to create fallback Javascript based animations, There are other heavy weight projects this script is intended for modern browsers only.

---

## Special Thanks

[Mac Koniarek](https://github.com/d0hn) - Testing browser compatibility on Mac OSX