---
categories:
- design
- development
date: "2016-04-28T15:21:21+01:00"
description: Wordcamp London 2016 was a great chance to make new friends and learn
  some excellent insights about running a successful agency, wordpress security and
  the necessity of backups, and some other stuff I've already started to use on a
  daily basis. Here's my roundup.
draft: false
tags:
- conference writeup
title: WordCamp London 2016 Writeup
---

**Wordcamp London 2016 was a great chance to make new friends and learn some excellent insights about running a successful agency, wordpress security and the necessity of backups, and some other stuff I've already started to use on a daily basis. Here's my roundup.**

This year was my first WordCamp meet up, so felt a bit weird as I didn't know anybody who was going. But right from the beginning I was met by friendly smiles and easy conversation, as well as great diversity.

After the short keynote and meeting a few sponsors, I sat down to listen to the first talk I chose to attend:

###Moove: Building An Innovative Agency

The full transcript is [on the Mooove website](http://www.mooveagency.com/8-insights-how-to-build-innovative-digital-agency/ "Moove: How To Build an Innovative Digital Agency"), but what I really appreciated about their story was that Ilona and Adrian had a solid project management approach from the beginning. This allowed them to innovate on their approach to web design, which means they were able to challenge conventions more, to the point they're now giving back to the Wordpress community and releasing their own plugins.

Takeaway:
<blockquote>
#"Your portfolio will always get you your next project"
</blockquote>

I loved how each of their case studies was a microsite, enabling them to showcase projects in a truly innovative way.

All the way along, they have never stopped innovating and kept their standards high.

###Transients

This very technical talk by Julian Porter discussed how to use [Transients](https://codex.wordpress.org/Transients_API "Transients API on wordpress.org") in a database cache to reduce load times. Julian especially recommended this method for storing what was coming in from other external services, such as social media as this resulted in the highest performance gain.

When using we have to make sure to check with `false`, otherwise `get_transient` request will keep looping if there's nothing there.

Takeaways: I'm still not sure about using this technology myself, would love to give it a try.

###Hacked Off: Dealing with a Hacked Wordpress Site

[Tim Nash](http://timnash.co.uk "Tim Nash's personal website") gave this lively and hilarious presentation. Tim hilighted that Wordpress _is_ secure, but once you add your theme, a plugin, risks start creeping in. The good and bad thing about PHP is that it's very easy to do *anything*, including hacking a site, which he demonstrated. It took less than 2 minutes.

Tim had 6 points for how to recover:

1. Isolate — remove site from the server
2. Identify — find out what went wrong. Look for 1 file that has a later time stamp by using `wp-core verify checksums` if you have [wp-cli](http://wp-cli.org "Wordpress Command Line Interface") installed.
3. Restore — from your daily backups. You do have daily backups, don't you?
4. Check — change all passphrases (phrases - not words) and verify site works
5. Remove from blacklists. All of them. (_This takes an awful lot of effort, as I know from experience._)
6. Prevention — keep your site up to date. *Update core frequently* Update to a more recent version of PHP.

Takeaways: I've already started using [WP Scan](http://wpscan.org "WP Scan website") and yes, I'm taking more regular backups too ...

###A World Without Bugs

[Mike Selander gave this presentation](http://mikeselander.com/presentations/world-without-bugs/#/1 "A World Without Bugs"), which hilighted that bugs creep in from the very start, with the foundation of a project. If there's not a solid foundation, the building can come crashing down before you realise it.

We can begin with standardising how we write code, with a guiding document on how to style, performance tuning and test.

Takeaway: Mike said that because he has a consistent approach for building websites, he is very familiar with his code base. This means that he can quickly identify issues, and then roll out improvements to other sites built with this framework.

###Debugging with Chrome Dev Tools

[Katie Fenn's talk](https://slidr.io/katiefenn/chrome-devtools-inside-out-wordcamp-london-2016#1 "Debugging in Chrome Dev Tools") took us through how to use `debugger;` instead of `console.log()` to pause the state of our JS mid-flow, so that we could interact with vars and see what functions are currently running.

<blockquote>
#"Let's solve the problem and not make it any worse by guessing"
— Gene Katz
</blockquote>

With this command, you can also set conditions, so only pause if a condition is met. Very useful.

###Guilt Free Coding

I loved Jason Agnew's honest and humorous approach to guilt free coding, which gave me some insights into team working as well as tips for improving how I write approach a project.

I guess there are two types of developers: the "fast and loose" guys who get the job done very quickly, but perhaps the code isn't as high quality as it could be, it isn't annotated, and it's harder for others to follow.

Then there are another type, who are perhaps painfully slow, but do things properly so the project can be maintained long-term.

Jason said that he got upset with another dev who would always refactor his code ... but after a while he realised this was so the dev felt he could save himself time long term, he wouldn't have to keep trying to make sense of "messier" code.

However, the key thought was that if you're going to do that refactor, it would be best to discuss it with the originator first, otherwise communication could break down quite easily.

Takeaway:
**Prior
Preparation
Prevents
Poor
Performance**

###Design Patterns

[Tammie Lister](https://speakerdeck.com/tammielis/design-patterns "Design Patterns slides") took us through several projects to identify their patterns. She deconstructs sites so that she's able to see the base elements, and how they are used.

I loved Tammie's analogy of a Lego set. If you buy a lego set, you're not buying a pirate ship, you're buying the _potential_ for a pirate ship, but also myriad other things you could also build.

The lego set is similar to our pattern library:- its a focused, consistent version of the site that can be used in so many different ways.

<blockquote>
#"we define our design in a single location and use a system to cascade it down to all platforms. We call it our Single Source of Truth"
— Salesforce Living Design Systems
</blockquote>

Tammy also released this builder for the Underscores theme, which allows you to preselect framework styles for your project, and roll your own:

[components.underscores.me](http://components.underscores.me "Underscores Components")

###Roundup

As you can see, there was loads of good stuff, I've already started using WP-cli, WP Scan and several other methods and ideas—and I only attended 1/3 of the talks that were held.

I'm going to be making this a regular event in my calendar, I think :-)
