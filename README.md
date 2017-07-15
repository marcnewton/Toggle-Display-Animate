# Toggle Display CSS3 Animation

Allow keyframe CSS3 animations and reversal of animations to run on elements styled with display property.

Modern Browsers, Lightweight, Device Friendly, Skeleton Script. 

## Usage Case

- The need to create lightweight bespoke animation solutions.
- Have an html element hidden on the page using display:none;
- On an event to `display:block;` or `display:flex;` etc. the element followed by a CSS3 Animation.
- Animation to run in reverse or run different animation and then `display:none;` at the end of the animation.

[View Demo](http://marcnewton.co.uk/projects/toggle-display-animate/)

## TODO

- Write instructions on how to use the source code
- Daisy chain animation events
- Create Plan JavaScript stand alone version.

## Dependencies

- Any version of [jQuery](http://jquery.com/download/) loaded in the page `<head>` - _Tested with v3.2.1_ (Only required if using version for jQuery)

## Quick Installation

Only required file from the project is `js/jquery-toggleDisplayAnimate.js` or `js/toggleDisplayAnimate.js (TODO)`

**jQuery Extension**
```markdown
<script type="application/javascript" src="js/jquery-toggleDisplayAnimate.js"></script>
```

**JavaScriptStandalone**
```markdown
TODO - Create pure standalone javascript version
```

## How to use

TODO - Write basic usage example

## Creating Animations

You can use `animation/mixins.less` to help you write cross compatible animations.

Place the above script before the closing `<body>` tag or after jQuery.

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

## Android 6.0.1
- *Google Chrome* v59 - v60

If a browser does not support CSS3 Animations then the elements will simply toggle their display state only with no animation.

There is no plan to create fallback Javascript based animations, There are other heavy weight projects this script is intended for modern browsers only.

## Special Thanks

[Mac Koniarek]()https://github.com/d0hn) - Testing browser compatibility on Mac OSX