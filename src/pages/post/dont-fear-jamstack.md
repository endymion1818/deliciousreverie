---
title: "Don't fear the JAMStack"
description: "WordPress has long been the de facto publishing platform for the web. But many developers are hearing more about the JAMStack. Here's why I switched, and my take on where I think things are going to go from here."
categories:
  - development
tags:
  - wordpress
  - jamstack
date: "2020-09-03T11:21:21+01:00"
---

**WordPress has long been the de facto publishing platform for the web. But many developers are hearing more about the JAMStack. Here's why I switched, and my take on where I think things are going to go from here.**

I would like to acknowledge and address some recent efforts of those in WordPress circles to be vocal against the new approaches to publishing that have arisen in recent years, most significantly these 2 that I've seen:

- ["WordPress Co-Founder Matt Mullenweg Is Not a Fan of JAMstack"](https://thenewstack.io/wordpress-co-founder-matt-mullenweg-is-not-a-fan-of-jamstack/)
- [Tweet: "Switching back to WordPress after a year on Hugo"](https://twitter.com/photomatt/status/1301419020827074560?s=21)

First of all, I must acknowledge a debt of gratitude to WordPress. The efforts the team have made to democratise publishing over the past 20 years have been hugely successful, and I still am really happy that there's a solution out there that people with little technical knowledge can utilise. No other publishing platform has done that, and even now its real competitors cannot achieve this because they are closed silos.

However, a democracy can never consist of one. A lot has happened in recent years which has preceded a sea change for a lot of developers to the JAMStack, a myriad of alternative separate technologies &ndash; one that still _includes_ WordPress, but which is radically different from the approach it has taken.

## Progression

For me, this change happened when I realised I was struggling to progress as a developer, or even to find enjoyable work, where I could produce things I could be proud of. And that in order to move forward, I needed to move away from that platform. I found 3 things that were damaging my development career:

1. The WordPress API is often inconsistent. `get_the_content()` vs `the_content()`, `WP_Post` vs `WP_Term`, differing returns (sometimes _void_, sometimes not) for different `get_*()` functions ... trying to find my way around this API could never help someone cultivate good development habits, or understand how an API _should_ work.

2. WordPress hasn't moved on from PHP 5. This means learning newer aspects of the language has been impossible and left me unprepared to work on other platforms. I could only get another job working with WordPress, which meant I was unlikely to ever move out of the cottage industry that provides.

3. WordPress development practices haven't moved with the times. I worked for a short time on a Laravel project, and I was dumbfounded by things I had to learn, like build pipelines, database migrations, object oriented language principles, and even how to use a package manager.

In short, I was faced with a decision: either continue to develop solely with WordPress for the rest of my career, or make the jump. I had already seen a large number of developers grow dissatisfied because of these issues, and similarly move off the platform.

I decided to do the same just around the time that Gutenberg was being released.

## Gutenberg

Whilst the new editor interface, Gutenberg, was a big step forward for users of the platform, it's no secret that it alienated a lot of developers.

Largely this was because of the ease with which page layouts could be created without developer input, bypassing the finesse and structure that a developers' input brings to a website. Now it's even easier for individuals to create blogs under their own steam.

I am overall pleased with this idea because it pulls the rug out from under a lot of cheap, low quality "web design" agencies that have built their empires on the free platform for many years. I've worked for a range of these companies and I personally would be happy to see them pivot or be made extinct.

But that also means there's a lot less work for a developer to do ... so not only has WordPress been keeping developers in a cottage industry, it is also forcing people _out_ of that industry at an increasing rate.

When I looked to the horizon, my colleagues and I could see a world where WordPress was once again the de facto standard for small customers who needed a quick platform, and where agencies turn to using alternatives.

I needed to skill up quickly.

## Voting Pebbles

There's still room for WordPress in the new landscape of the JAMStack world. The WP GraphQL plugin is great for sourcing content. But yes, there are a lot more alternatives that have the economies of scale and financial power to pivot much more quickly than WordPress has.

A lot of progress has been made towards finding a better editor experience ... but we haven't quite solved it yet. I think projects like TinaCMS from Forestry are going to be the next iteration, and have the potential to bring an even better editing experience to users than WordPress can provide.

In the meantime, developers like me will continue to push the JAMStack agenda. Why? Because we have been pushed out of our cottage industry, and we need to continue to work, and to enjoy our work. And because we do have a lot of buying power for our clients, stakeholders and family and friends whom we build for.

WordPress is no longer my favourite option. But it is still an option.

You started the avalanche, and it's too late for the pebbles to vote.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/60loeoblu0M" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

(Wow there really _is_ a Babylon 5 quote for every occasion.)

<small>with thanks to the TND community, specifically Frank Taillandier for the title!</small>
