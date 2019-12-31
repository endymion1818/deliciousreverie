---
categories:
- development
date: "2017-05-21T15:21:21+01:00"
description: One thing I've tried to do more of is to use animations on frontend projects
  I've been involved with. GreenSock animation library is a great way of standardising
  and improving on animations that otherwise wouldn't be available on all browsers.
draft: false
tags:
- JavaScript
- SVG
- animation
title: SVG Animation on Hover with GreenSock
---
**One thing I've tried to do more of is to use animations on frontend projects I've been involved with. GreenSock animation library is a great way of standardising and improving on animations that otherwise wouldn't be available on all browsers.**

Animations add another dimension to your projects that helps users and can provide either an extra bit of feedback, extra charachter, and even increase conversions. 

I really love GreenSock for it's performance and range of animations. I particularly like their modular approach to the library. For example, if you have something relatively straightforward in mind, you can just use the "Tween Lite" plugin, which is 27kb minified. If you need more flexibility with timelines, you can add Timeline Lite, a further 12kb.

This means that you're not tied to a monolithic platform that covers all bases. You can customise and work towards a performance budget whilst still using some great features.

GreenSock also works really well with ScrollMagic to make rich interactive experiences. It's often the combination of these libraries that result in great experiences that are often featured on the [Website Awwards](https://www.awwwards.com) site.

## Example

For a recent project, I wanted to add some hover effects to a UI element that made it seem as if it was almost a fluid change of state. The element was contained in an SVG shape with 2 layers, the background and the graphic.

<svg class="connectcircle connectcircle--data" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="400"
     viewBox="0 0 800 800" style="enable-background:new 0 0 800 800;" xml:space="preserve">
<path class="semicircle" fill="#d7d7d7" d="M621.3,592.6c-49.1,45.9-112.9,71.1-179.8,71.1c-145.4,0-263.6-118.3-263.6-263.6
    c0-145.4,118.3-263.6,263.6-263.6c72.5,0,142.7,30.5,192.5,83.8l21.1,22.6l96.5-96.5l-20-21.1c-76.4-80.6-179.5-125-290.1-125
    c-220.6-0.2-400,179.3-400,399.8S220.9,800,441.4,800c102.6,0,200.2-39,274.9-109.8l22.3-21.1l-96.2-96.2L621.3,592.6z"/>
<ellipse class="disc" cx="441.9" cy="400.1" rx="265.8" ry="264.3" fill="#b52172"/>
<g>
    <g>
        <path class="cloud" fill="white" d="M417.1,530v-91.8c0-3.2-2.6-5.7-5.7-5.7h-38.2c-3.2,0-5.7,2.6-5.7,5.7c0,3.2,2.6,5.7,5.7,5.7h32.5V530
            c-10.9,2.6-19.1,12.4-19.1,24.2c0,13.7,11.1,24.8,24.8,24.8c13.7,0,24.8-11.1,24.8-24.8C436.2,542.5,428,532.6,417.1,530z
             M411.3,567.5c-7.4,0-13.4-6-13.4-13.4c0-7.4,6-13.4,13.4-13.4c7.4,0,13.4,6,13.4,13.4C424.7,561.5,418.7,567.5,411.3,567.5z
             M478.2,530v-91.8c0-3.2-2.6-5.7-5.7-5.7h-38.2c-3.2,0-5.7,2.6-5.7,5.7c0,3.2,2.6,5.7,5.7,5.7h32.5V530
            c-10.9,2.6-19.1,12.4-19.1,24.2c0,13.7,11.1,24.8,24.8,24.8c13.7,0,24.8-11.1,24.8-24.8C497.3,542.5,489.1,532.6,478.2,530z
             M472.5,567.5c-7.4,0-13.4-6-13.4-13.4c0-7.4,6-13.4,13.4-13.4c7.4,0,13.4,6,13.4,13.4C485.8,561.5,479.8,567.5,472.5,567.5z
             M575.6,491.2c-11.7,0-21.6,8.2-24.2,19.1h-12.1v-72c0-3.2-2.6-5.7-5.7-5.7h-38.2c-3.2,0-5.7,2.6-5.7,5.7c0,3.2,2.6,5.7,5.7,5.7
            h32.5v72c0,3.2,2.6,5.7,5.7,5.7h17.9c2.6,10.9,12.4,19.1,24.2,19.1c13.7,0,24.8-11.1,24.8-24.8S589.3,491.2,575.6,491.2z
             M575.6,529.4c-7.4,0-13.4-6-13.4-13.4s6-13.4,13.4-13.4c7.4,0,13.4,6,13.4,13.4S583,529.4,575.6,529.4z M607.8,343.4
            c-7.7-9.6-18.2-16.7-29.9-20.3c-1.3-27.1-12.6-52.4-32-71.7c-20.4-20.3-47.6-31.4-76.4-31.4c-37.8,0-72.8,19.7-92.5,51.8
            c-4.8-1.5-9.8-2.3-14.8-2.3c-23.4,0-43.5,16.5-48.4,39c-30.1,7.8-51.5,35.2-51.5,66.6c0,37.9,30.9,68.8,68.8,68.8h13.3v66.3h-12.1
            c-2.6-10.9-12.4-19.1-24.2-19.1c-13.7,0-24.8,11.1-24.8,24.8s11.1,24.8,24.8,24.8c11.7,0,21.6-8.2,24.2-19.1h17.9
            c3.2,0,5.7-2.6,5.7-5.7v-77.8c0-3.2-2.6-5.7-5.7-5.7h-19c-31.6,0-57.4-25.7-57.4-57.3c0-27.3,19.4-50.9,46.1-56.2
            c2.4-0.5,4.2-2.4,4.6-4.9c2.5-18.8,18.7-33.1,37.7-33.1c5.2,0,10.3,1,15.1,3.1c2.7,1.2,5.9,0.1,7.3-2.5
            c17.1-30.9,49.7-50.1,85-50.1c53,0,96.5,43.1,97,96.1c0,2.6,1.9,4.9,4.4,5.5c22.9,5.3,39,25.5,39,49c0,27.8-22.6,50.4-50.4,50.4
            h-3.1c-3.2,0-5.7,2.6-5.7,5.7c0,3.2,2.6,5.7,5.7,5.7h3.1c34.1,0,61.8-27.7,61.8-61.8C621.4,368.1,616.6,354.3,607.8,343.4z
             M308.2,529.4c-7.4,0-13.4-6-13.4-13.4s6-13.4,13.4-13.4c7.4,0,13.4,6,13.4,13.4S315.6,529.4,308.2,529.4z M541.7,333.5
            L541.7,333.5c3.2,0,5.8-2.6,5.7-5.8c-0.1-9.4-1.9-18.7-5.3-27.4c-1.2-2.9-4.5-4.4-7.4-3.3c-2.9,1.2-4.4,4.5-3.3,7.4
            c2.9,7.5,4.4,15.3,4.5,23.4C536,331,538.6,333.5,541.7,333.5z M520.8,286.3c1.1,1.4,2.8,2.1,4.4,2.1c1.3,0,2.6-0.4,3.6-1.3
            c2.4-2,2.8-5.6,0.8-8.1c-14.9-18.1-36.8-28.4-60.1-28.4c-3.2,0-5.7,2.6-5.7,5.7c0,3.2,2.6,5.7,5.7,5.7
            C489.4,262,508.1,270.9,520.8,286.3z"/>
    </g>
</g>
</svg>

## A fluid-feeling interaction

I found that there are a few caveats when working with SVGs. The first is how to scale from the center of the animation. To do that you can add `transformOrigin: 50% 50%` to the properties you're applying. That will find the center of the SVG element, and animate from there.


Initially, to animate this I tried to create one timeline that targeted both elements, but this resulted in an effect that looked artificial, since the animations didn't overlap each other. One scale effect was applied to one element. It was only after that that the other scale effect started.

```js

var connectCircles = new TimelineMax();

connectCircles.staggerTo($(this).find(".cloud, .microphone, .handset"), 0.3, { 
          scaleX: 1.2,
          scaleY: 1.2,
          ease: Elastic.easeOut,
      transformOrigin:"50% 50%"
          }).staggerTo($(this).find(".disc"), 0.6, { 
          scaleX: 1.2,
          scaleY: 1.2,
          ease: Elastic.easeOut,
      transformOrigin:"50% 50%"
          })
        };
```

<p data-height="265" data-theme-id="0" data-slug-hash="dWQevw" data-default-tab="html,result" data-user="endymion1818" data-embed-version="2" data-pen-title="greensock hover group svg — one timeline" class="codepen">See the Pen <a href="http://codepen.io/endymion1818/pen/dWQevw/">greensock hover group svg — one timeline</a> by Ben Read (<a href="http://codepen.io/endymion1818">@endymion1818</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

To resolve this issue, I split the functions into seperate timelines that allowed them to run seperately:

```js

var connectCircles = new TimelineMax();
var connectShapes = new TimelineMax();

connectCircles.staggerTo($(this).find(".cloud, .microphone, .handset"), 0.3, { 
          scaleX: 1.2,
          scaleY: 1.2,
          ease: Elastic.easeOut,
      transformOrigin:"50% 50%"
          });
          
      // second timeline
      connectShapes.staggerTo($(this).find(".disc"), 0.6, { 
          scaleX: 1.2,
          scaleY: 1.2,
          ease: Elastic.easeOut,
      transformOrigin:"50% 50%"
          })
        };
```

That way, when we run the animation, the two timelines run independently from each other:


<p data-height="265" data-theme-id="0" data-slug-hash="xgEYqG" data-default-tab="js,result" data-user="endymion1818" data-embed-version="2" data-pen-title="greensock hover group svgs" class="codepen">See the Pen <a href="http://codepen.io/endymion1818/pen/xgEYqG/">greensock hover group svgs</a> by Ben Read (<a href="http://codepen.io/endymion1818">@endymion1818</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

Getting the timing right in animations is one of the hardest things, and takes the longest amount of time. It took me quite a bit of experiementation and asking for feedback to arrive at the duration of each transition so that it appeared that the effects were interacting with each other in a natural way.

A lot of animation is fooling the eye into thinking it's real. Our brains recognise natural interactions which follow our experience of phyiscal reality, for example, the way a water droplet responds when you touch it. But if you get it wrong by a fraction, it looks strange or unfamiliar, and it can have an adverse effect on your audience.

## Conclusion

I've had so much fun with this you wouldn't believe. I am really excited about animations and look forward to working with GreenSock and the Web Animations API more in the future.