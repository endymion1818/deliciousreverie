---
categories:
- development
date: "2015-02-15T15:21:21+01:00"
description: On a recent project for international research machine builder Anton
  Paar, I  used the new flex-box CSS module for the first time. Here's how it went.
draft: false
tags:
- css
title: First Steps with Flexbox
---

**On a recent project for international research machine builder Anton Paar, I  used the new flex-box CSS module for the first time. Here's how it went.**

The flex box module has had a long gestation period, and there are 2 main specs of the module, so when researching methods of using it you have to be careful to find recent enough posts which outline the latest spec.

As always, [CSS Tricks](http://css-tricks.com/snippets/css/a-guide-to-flexbox/) was particularly useful, along with [Stack Overflow](http://stackoverflow.com/questions/tagged/flexbox) in getting familiar with the syntax and methods.

### The Problem

It's not a biggie, but I like things to line up nicely. As it stood, the four content boxes on the home page of Anton Paar UK's microsite would be populated by both static content and dynamic. We decided to use Flexbox to line the four columns up, something that has never been achieveable before in CSS without Javascript.

Here's the HTML:

```php
<div class="row home-features">
	<div class="col-md-3 home-feature">
		<div class="well">
			<?php
			if ( function_exists( 'dynamic_sidebar' ) ) {
				dynamic_sidebar( "home-1" );
		} ?>
		</div>
	</div>
	<div class="col-md-3 home-feature">
		<div class="well">
			<?php
			if ( function_exists( 'dynamic_sidebar' ) ) {
				dynamic_sidebar( "home-2" );
			} ?>
		</div>
	</div>
	<div class="col-md-3 home-feature">
		<div class="well">
			<?php
			if ( function_exists( 'dynamic_sidebar' ) ) {
				dynamic_sidebar( "home-3" );
			} ?>
		</div>
	</div>
	<div class="col-md-3 home-feature">
		<div class="well">
			<?php
			if ( function_exists( 'dynamic_sidebar' ) ) {
				dynamic_sidebar( "home-4" );
			} ?>
			</div>
		</div>
	</div>
</div>
<!--/.row -->
```

As you can see from the following screenshot from before the site went live, the problem was that the 4 columns weren't lining up. This has long been almost impossible to do in HTML / CSS, certainly without misappropriating the `position: absolute` property.

![Anton Paar UK Microsite without using flex-box](/resources/antonpaar-before.png)

But using Flexbox allowed us to simplify the code by removing the `well` DIVs as well as provide a solution to the problem:

```css
.home-features {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flexbox;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  padding: 0 10px;
}
.home-feature {
  -webkit-box-flex: 1;
  -moz-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
}
```

We added this attribute under a `media-query` of `(min-width: 992px)` so that the columns would stack at smaller viewport sizes.

![Anton Paar UK Microsite after using flex-box](/resources/antonpaar-after.png)


This exercise has proved to be a great solution to an ongoing problem in web development.

After using it on this project I really don't want to go back, which is a shame because there are [still some caveats with Safari (Both Mac OS X and iOS)](http://codepen.io/endymion1818/pen/xbPRWd "Flexbox safari test on CodePen").

In fact, this blog has a stylesheet for Flexbox which I'm hoping to implement soon with a fallback for Safari (without browser sniffing).
