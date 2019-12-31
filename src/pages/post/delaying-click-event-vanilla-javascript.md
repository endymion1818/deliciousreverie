+++
date = "2016-03-22T15:21:21+01:00"
draft = false
title = "Delaying click event in vanilla JavaScript"
description = "I was inspired by Rachel Nabors' site to add a short delay to users' clicking on a link on my website, so that I could add a brief animation that would run before the redirection took place. Here's how I did it"
categories = [
  "development"
]
tags = [ 
    "javascript", 
]
+++

**I was inspired by Rachel Nabors' site to add a short delay to users' clicking on a link on my website, so that I could add a brief animation that would run before the redirection took place. Here's how I did it.**

"Animation" seems to be the theme of my year. Animation is what I think is going to be one of the big differentiator on websites in the coming months and years. And I really, really love the CSS animations API.

I've used waypoints.js a lot lately so that I can run animations at different stages during the time that a user scrolls around my site. But for my personal blog, I wanted to do something a little trickier.

###My Requirements

I wanted to fade in page elements when the user arrives, and fade them out again when they left. I know that it could potentially have been easier to write this in jQuery using the `delay()` function, but I decided to go the route of a custom bit of JavaScript. It was a good practice exercise for me, and I don't want to load the jQuery library here unless I have to.

### The Code

It took me a while to come up with the strategy for this. I started looking at `onpageunload()`, hoping to add a delay to that. But that's quite locked down, and didn't work for my requirements.

After I had fiddled for a while, I ran up against a brick wall. For some reason, my JS event listener wasn't working properly.

So I turned to StackOverflow and posed the question, which helped immensely, and validated what I was already trying to do. [The thread is here if you'd like to read it](http://stackoverflow.com/questions/36125391/vanilla-js-delay-click-event-to-add-animation/36126631 "vanilla JS: delay click event").

#### Step 1

Reading some other posts on Stack Overflow helped me see that I needed to grab **all** of the `<a>` tags into a variable, then listen for an event.

```js
var links = document.getElementsByTagName('a');

for( var i=0,il = links.length; i< il; i ++ ){
links[i].onclick = clickHandler;
}
```

#### Step 2

Then, I needed a function called `clickHandler` that would fire on click:

```
function clickHandler(event) {

event.preventDefault();

var travelTo = this.getAttribute("href");
```
The first job of this handler was to stop the link from being followed, using `preventDefault()`, then to grab the link the user was going to so that we could use it later on.

#### Step 3

The next step was to add my animation class to the elements I wanted:

```js
var animOut = document.getElementsByClassName("animateOut");

// iterate `animOut` elements
for (var i = 0; i < animOut.length; i++) {
   // add `out` `className` to `animOut` element at index `i`
   animOut[i].classList.add("out");
};
```

This looks for each element that has a class of `animOut`, and adds a further class, `out` when the function runs.

#### Step 4

Next, we needed to send the user on their way using the `travelTo` variable we stored earlier and using  the `setTimeout` function to add a bit of a delay:

```js
setTimeout(function() {
  window.location.href = travelTo;
}, 1000);
```

I played with the durations quite a bit. It was important for me not to make the animation and/or the delay too long because I thought it would probably be distracting to the user. I reduced it from 1 second to just half a second for this very reason.

#### The Result

Well, click on a link and see it working!!

It was great to be able to work this out, and the Stack Overflow community once again proved to be a fantastic resource.

I must also credit Rachel Nabors for inspiring me, since I first saw this being used [on her website](http://rachelnabors.com/ "Rachel Nabors' portfolio site").

Here's the full code in a Gist if you'd like to adapt it for your site:
