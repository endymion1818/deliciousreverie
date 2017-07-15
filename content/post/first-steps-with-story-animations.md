+++
date = "2017-07-15T15:21:21+01:00"
draft = false
title = "First Steps with Story Animations"
description = "For a while now I've really enjoyed tinkering with animations as a way to bring a lot more quality to my projects. But as well as providing interactivity, I was curious to explore another way animations can be used in a project: to tell a story."
categories = [
  "development"
]
tags = [ 
    "animation", 
    "svg",
    "greensock",
    "scrollmagic"
]

+++
**For a while now I've really enjoyed tinkering with animations as a way to bring a lot more quality to my projects. But as well as providing interactivity, I was curious to explore another way animations can be used in a project: to tell a story.**

I've discovered that animations can really make a project stand out from the competition, and I find myself driven to this field more and more. Partly, I want to do this to showcase what the web is really capable of in difference to other mediums. But, being practical about it, it's also a great way of getting users to stay on your site more and for it to be memorable.

The style I adopted for this site was heavily influenced by my love of the English and Welsh countryside. I've also been thinking a lot about the animation film "Watership Down" lately. I watched that film as a kid and it seems to have made a lasting impression on me. So I took the idea from those influences.

## Drawing the SVGs

I used both Affinity Designer and Sublime Text to manipulate some SVGs I shamefully got free from the internet. I'm sorry, I'm not proud of that fact, but time was not on my side.

Although you percieve there to be one tree that transitions from winter to summer, and one rabbit that moves across from one side of the screen to the other, there are actually 2 trees and 8 rabbits.

This is because the easiest way to create the perception of movement I have found is to change the opacity.

## Animating

Each element is changed by modifying the opacity in GreenSock Animation Platform, which is tied to ScrollMagic, in order to perform the animations not on a timeline, but on scroll.

```js
window.onload = function(){

  // smController = new ScrollMagic.Controller();
  smTreeController = new ScrollMagic.Controller();
  smRabbitController = new ScrollMagic.Controller();

  // getters
  var trigger = document.getElementById('main');

  var treeSummer = document.getElementById('tree-summer');
  var treeWinter = document.getElementById('tree-winter');

  var rabbit0 = document.getElementById('rabbit-0');
  var rabbit1 = document.getElementById('rabbit-1');
  var rabbit3 = document.getElementById('rabbit-3');
  var rabbit4 = document.getElementById('rabbit-4');
  var rabbit5 = document.getElementById('rabbit-5');
  var rabbit6 = document.getElementById('rabbit-6');
  var rabbit8 = document.getElementById('rabbit-8');

  // from winter to summer
  var treeWinterToSummer1 = new ScrollMagic.Scene({
    triggerElement: trigger,
    duration: '100%',
    offset: '400%'
  })
  .setTween(treeSummer, { opacity: 0.6 })
  .addTo(smTreeController);

  var treeWinterToSummer2 = new ScrollMagic.Scene({
    triggerElement: trigger,
    duration: '100%',
    offset: '500%'
  })
  .setTween(treeWinter, { opacity: 0 })
  .addTo(smTreeController);

  // 0
  var heyRabbit0 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '500%',
    duration: '15%'
  })
  .setTween(rabbit0, { opacity: 0.6 })
  .addTo(smRabbitController);

  var byeRabbit0 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '600%',
    duration: '15%'
  })
  .setTween(rabbit0, { opacity: 0 })
  .addTo(smRabbitController);

  // 1
  var heyRabbit1 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '650%',
    duration: '15%'
  })
  .setTween(rabbit1, { opacity: 0.6 })
  .addTo(smRabbitController);

  var byeRabbit1 = new ScrollMagic.Scene({
    triggerElement: trigger,
    offset: '750%',
    duration: '15%'
  })
  .setTween(rabbit1, { opacity: 0 })
  .addTo(smRabbitController);

// and so on...

};
```
There were actually 2 versions of this animation. I played with greensock to tween the appearance and disappearance of the rabbits. However, I decided against this approach beacuse in order to make the last-but-one rabbit stay in view for longer, I would have to set a pin, and release it later.

I didn't think this approach was robust enough, especially since I want to build on this animation in the future. Having lots of spurious divs positioned around my dom didn't feel right.

## Performance Considerations

Loading up these libraries does have a performance cost of course. A cost that is most noticeable on mobile devices. So instead of enqueueing my Javascript in the normal way, I've been working on a script that writes the tag into the DOM once you're at a certain breakpoint: 

```js
// in the footer file:
<script type="text/javascript">
// Mustard Cutting for fancy anims
if ('querySelector' in document && 'addEventListener' in window) {
    var windowWidth = document.body.clientWidth;
    if(windowWidth > 1024){

        // add class to HTML tag
        (function(H){H.className=H.className.replace(/\bno-js\b/,'js')})(document.documentElement);

        // local scripts
        document.write(unescape("%3Cscript src='{{ .Site.BaseURL }}/js/deliciousreverie-noncriticalscripts.min.js' type='text/javascript' defer%3E%3C/script%3E"));
        }
};
</script>
```

I further scoped this hit by adding a partial to the footer in hugo, so that the partial containing the SVG would only load on the home page.

The home page loading time hovers around 3 seconds on desktop now. I know it could be better, but frankly, I feel the hit is worth it for something that I think will add plenty of value to my site.

## Accessibility

I don' think there are accessibility concerns with this project. The animation is purely illustrative and shouldn't affect screen readers or sight impaired ... I hope!

Please don't hesitate to let me know if it does.

## Future Plans

I already have plans for similarly-themed animations on other pages on the site, and have started building a bird that will fly across the screen, circle near the tree, and disappear off-screen.

These I'll hopefully get done before the kids leave home.