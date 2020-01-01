---
categories:
- development
date: "2015-09-10T15:21:21+01:00"
description: Bootstrap 4 was released last week, and I downloaded it straight away,
  plugging it into my Wordpress base theme. Some things that have been added to the
  project are really good ... but the team have made some interesting design choices
  in what they've changed ...
draft: false
tags:
- css
- bootstrap
title: Bootstrap 4 Alpha Review
---

**Bootstrap 4 was released last week, and I downloaded it straight away, plugging it into my Wordpress base theme. Some things that have been added to the project are really good ... but the team have made some interesting design choices in what they've changed ...**

I'm starting to get away from Bootstrap in production sites. I have become a bit more fussy about what freedom I have with what I develop in recent months. However, even if I never used them again, I would still look towards Bootstrap and Foundation as a sort of a 'benchmark' for what is currently best practice in the industry.

For example, I stopped supporting IE8 when Bootstrap stopped. It was clearly time to let it go. Now with Bootstrap 4 ... what do I need to let go of, or take hold of?

### Get it: ES6

The world is finally ready for ES6 implementation of JavaScript. All of Bootstrap's plugins have been written in the updated spec. This means that support for IE9 has been dropped too.

Goodbye, IE9.

### Get it: SASS

Unfortunately, LESS seems to have lost the battle when it comes to CSS preprocessors. The syntax is just that bit easier IMHO, even though the ease of use (the possibility of compiling on the front end with JavaScript) was a good idea, it just proved too slow.

SASS is the way forward ... well, at least until PostCSS is ready for the main stage... but that's another story.

### Drop it: Sub Navs

It's too easy to create sub navs in Wordpress, and generally users are finding them harder to use.

Also, I'm beginning to think that if you can't understand and convey your red routes in 3 - 6 links then you might be doing it wrong. Or your clients could benefit from a training session on information architecture.

### Change it: Hamburger Implementation

There's been a lot more talk about hamburgers, and how they don't convert so well lately. Facebook have dropped theirs in favour of tab icons. Many other sites have changed how they implement the "hamburger", and I have to say, I like it.

I'm going to try to use the hamburger to contain more "discoverable" content in future, stuff that's put there for regular visitors. This makes learning the site more fun as you get to know it, without penalising first-time or infrequent visitors who just need to finish their journey really fast.

See Luke Wroblewski's article [Obvious Always Wins](http://www.lukew.com/ff/entry.asp?1945 "LukeW: Obvious Always Wins").

### Get it: Cards

"Cards" — an interface element that splits relevant content up into visual containers — are everywhere. Not that ubiquity is necessarily a good thing, but they certainly are a useful design tool and really good for reducing cognitive load.

Cards clearly segment content into more easily digestible areas so that users can process what they're seeing faster, again reducing cognitive load. They also can provide a sense of visual depth to your site design.

I like them, and think this is a good design pattern which I'll be using more.

### Conclusion

Lots of nice things. Yay. Can't wait to see how this project pans out, and always maintain a sense of gratitute to @fat and @mdo who have raised the bar for web design in general.

Here's my implementation of v4 Alpha in a Wordpress theme:

[https://github.com/endymion1818/blazebase/tree/bootstrap4](https://github.com/endymion1818/blazebase/tree/bootstrap4 "")
