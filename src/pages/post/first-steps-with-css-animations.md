---
categories:
- development
date: "2015-04-14T15:21:21+01:00"
description: CSS Animations are quickly complimenting if not replacing Javascript
  for generating a little bit of on-page whizz (that's the technical term). This is
  the first time I've delved into the syntax for CSS Animations that I hope can replace
  the tired carousels resident on many websites. Here's how I implemented it.
draft: false
tags:
- css
title: First Steps with CSS Animations
---

**CSS Animations are quickly complimenting if not replacing Javascript for generating a little bit of on-page whizz (that's the technical term). This is the first time I've delved into the syntax for CSS Animations that I hope can replace the tired carousels resident on many websites. Here's how I implemented it.**

First of all, I've stuck to using CSS for this project although I'm using SASS for this site. The reason is that I wanted to get familiar with the CSS syntax first. I don't want to chain myself to SASS because it's one step removed from what the browser renders. Anyway, that's a story for another day.

### Step 1: Scope the Animation

Being a small marketing agency we're still formulating the best way to approach website builds. So this project came to me with a visual design but no scope. The designs showed what was required, that the circular images would change to reveal text on flat background.

What they weren't so good at displaying is the end state of the animation. Would it roll around again? The plan was originally for a Javascript carousel here, so I could make some assumptions about the functionality based on that.

### Step 2: The HTML

```html
<div class="container">
    <a href="services.php">
      <div class="col-sm-3 home-circle" id="one">
          <img class="bottom" id="five" src="/assets/img/property1.png">
      </div>
    </a>
    <a href="services.php">
      <div class="col-sm-3 home-circle" id="two">
        <img class="bottom" id="six" src="/assets/img/property2.png">
      </div>
    </a>
    <a href="services.php">
      <div class="col-sm-3 home-circle" id="three">
        <img class="bottom" id="seven" src="/assets/img/property3.png">
      </div>
    </a>
    <a href="services.php">
      <div class="col-sm-3 home-circle" id="four">
        <img class="bottom" id="eight" src="/assets/img/property4.png">
      </div>
    </div>
  </a>
  </div>
```

This took me a few attempts to work out. I try to avoid using `position:absolute` wherever possible, so in this case I used a `background-image` on the parent `div` with an `img` inside.

### Step 3: Declaring the First Animation

```css
@-webkit-keyframes fadeOut { from { opacity:1; } to { opacity:0; } }
@-moz-keyframes fadeOut { from { opacity:1; } to { opacity:0; } }
@keyframes fadeOut { from { opacity:1; } to { opacity:0; } }
@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@-moz-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }

.home-banner .container a .col-sm-3 {
   opacity:0;
   -webkit-animation:fadeIn ease-in 1;
   -moz-animation:fadeIn ease-in 1;
   animation:fadeIn ease-in 1;

   -webkit-animation-fill-mode:forwards;
   -moz-animation-fill-mode:forwards;
   animation-fill-mode:forwards;

   -webkit-animation-duration:1s;
   -moz-animation-duration:1s;
   animation-duration:1s;
  }
```

Because I'm a visually-minded person, I decided to break my CSS into two parts and to declare the animations in areas that would help me logically follow what was displaying on the site, even if it would be slightly less efficient. I'm sure that as I get more used to the syntax I'll change this practice to be as efficient as possible (and to use SASS).

### Step 4: Timing

I've heard it said a few times that timing is the hardest thing to get right in an animation. It was quite difficult to work out the gaps that their should be between each animation state, and took quite a few goes before it appeared to flow smoothly, almost as if there was a short increase in speed in the middle two animations, although this is just a perception.

```css
.home-banner #one {
  background:url('/assets/img/propcons.svg') center no-repeat;
  background-size: 100%;

  -webkit-animation-delay: 0.4s;
  -moz-animation-delay: 0.4s;
  animation-delay: 0.4s;
}
.home-banner #two {
  background:url('/assets/img/charsurv.svg') center no-repeat;
  background-size: 100%;

  -webkit-animation-delay: 0.8s;
  -moz-animation-delay: 0.8s;
  animation-delay: 0.8s;
}
```


What I was very conscious of was that the delay between the first animation (the property images) appearing, and the second (the text overlays) needed to be a) slow enough so the client felt they had good value out of the images we had provided and b) fast enough that visitors would see the second transition before they scrolled further down the page.

So we settled on .6 seconds, which seemed to be the optimum delay we could achieve without investing in further research.

Here's the result (sorry for the high compression - wanted to keep a smaller file size as possible!

![Animation demo](/resources/wdb.gif)

### Browser Caveats

What we noticed going through the testing phase was that certain aspects of the animation spec are still under development. Some things like `animation-reverse` aren't supported in Vivaldi or Mobile Chrome (tested on iOS 8). But we felt that since the animation still works to a fair degree, it would be reasonable to keep using it.

### CSS Animations - The Way Forward

I got a huge amount of satisfaction trying out the CSS Animation spec. This isn't only due to my lack of JavaScript skills (which are steadily improving) but also my desire to build high quality websites that are as lightweight as possible.

The outcome was so well recieved by our team involved that it's opened our designers and other stakeholders eyes to the options available to them:- they now have many, many more options at their fingertips instead of only the aged and worn carousel default.

This demonstrated for me that even though it is often difficult to step out of our comfort zone, but the rewards of doing so are often great.

I'd love to know how you would improve on this code, or if you've used CSS Animations in a way that has challenged you recently.

[Get in touch with me on Twitter](https://twitter.com/muzzlehatch_ "Benjamin Read on Twitter") if you have!
