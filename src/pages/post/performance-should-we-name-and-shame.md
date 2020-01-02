---
categories:
- development
date: "2017-06-16T15:21:21+01:00"
description: As a conscientious developer, I've become more determined to put performance
  front & center on new projects I create. As an industry, we've had more and more
  focus on this issue, and it's often the topic of conference talks and articles.
  But I think it could be time to go further than we have in the past.
draft: false
tags:
- performance
title: 'Performance: Should We Name and Shame?'
---
**As a conscientious developer, I've become more determined to put performance front & center on new projects I create. As an industry, we've had more and more focus on this issue, and it's often the topic of conference talks and articles. But I think it could be time to go further than we have in the past.**

In my day job I get to analyse a lot of websites. I often get the opportunity to perform an in-depth analysis of a given site, which involves a code quality review, SEO analysis, and a performance analysis.

Sometimes the performance review shocks me a little.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">As much as I hate to say it, we really need to start naming &amp; shaming devs who do this. I think it&#39;s massively hurting our credibility. <a href="https://t.co/f1nNswmhgE">pic.twitter.com/f1nNswmhgE</a></p>&mdash; Benjamin Read (@muzzlehatch_) <a href="https://twitter.com/muzzlehatch_/status/874593109052723201">June 13, 2017</a></blockquote> 

This site, in case you aren't able to see the image in the above tweet, has a load time of 41.56 seconds, makes 77 HTTP requests,  and is 21MB in size. All this despite it's simple nature as a brochure site with nothing special except text and a few images. The only animation is a page transition which seems to have been implemented to mask the poor performance of the site.

The subsequent rebuild I've been working on hasn't gone live yet, but based on previous projects I can say with confidence that it's probably going to load in under 2 seconds.

## What Went Wrong

How does a project end up this badly?

I typically work in the "brochure website" sector of web development. We turn out 3-4 of them on an average week. The advantage with this sector is that with such a huge churn, you can experiment with something on one project, and if it works well, you can implement it on the next project.

But the temptation is that you can work with diminishing quality because you are pushing out essentially the same code base, with a few cosmetic changes, so you have a bloated project that attempts to cater for everything you might do.

The other factor, which is a lot more dangerous, is that other, _less scrutable_ companies, know that they can use commercially available themes and plugins to build whatever is needed, "without ever having to touch a line of code".

These are the organisations that I think need a bit more attention.

## Name And Shame

I'm sorry, I'm not trying to be inflammatory here. I don't want to victimise well intentioned individuals who have no budget and are creating a website for something they passionately believe in or want to support.

But I do think there's a place for a "website performance league table" of sorts, where the worst **comercially sold** websites we find get a mention, and the slowest ones get to the top of the list.

I'm hoping this could be a way of motivating people who should know better to do better. And to raise awareness to individuals who could easily become victims of this practice that this is something they should specifically ask for when commissioning a website.

## Reward and Compliment

What I'm also hoping to suggest is that we as an industry reward good performance. I reached out to a number of organisations that I thought might be interested in following this up, including Awwards, an organisation that celebrates beautiful and interesting website UIs.

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I&#39;m wondering if <a href="https://twitter.com/AWWWARDS">@AWWWARDS</a>, <a href="https://twitter.com/webawards">@webawards</a> or <a href="https://twitter.com/WebGuildSeal">@WebGuildSeal</a> would ever get involved to promote / reward good performance practice <a href="https://twitter.com/hashtag/perfmatters?src=hash">#perfmatters</a></p>&mdash; Benjamin Read (@muzzlehatch_) <a href="https://twitter.com/muzzlehatch_/status/874657130367913984">June 13, 2017</a></blockquote> 

And Awwards replied!

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">We 100 % agree it&#39;s our responsibility to promote good performance practice, see our developer jury guidelines <a href="https://t.co/Yzxo6FxwIx">https://t.co/Yzxo6FxwIx</a></p>&mdash; Awwwards (@AWWWARDS) <a href="https://twitter.com/AWWWARDS/status/874896069024509954">June 14, 2017</a></blockquote>

If you're interested in web performance, I think this document could be a good place to start making yourself aware of what could to be done. Awwards further replied saying that they had something in the pipeline about this topic.

## Pain Points

Like I said, I tend to work in a sector of the web industry that is pretty stuck with smaller, repeatable builds on familiar platforms. For us, we aren't able to do extensive testing using XDEBUG, of spinning up AWS and using lambda functions, or using load balancing on multiple servers. It's just not going to happen for most of us.

But there are things we can do within our industry to promote better practices, to raise the bar for web development by educating ourselves, our PMs and our business owners to promote better performance practices:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Main things I would say: educate dev teams &amp; clients. Read <a href="https://twitter.com/ResponsibleRWD">@ResponsibleRWD</a> &amp; act on it wherever possible. Use <a href="https://t.co/288vNrRuYJ">https://t.co/288vNrRuYJ</a>.</p>&mdash; Benjamin Read (@muzzlehatch_) <a href="https://twitter.com/muzzlehatch_/status/874617990653890560">June 13, 2017</a></blockquote> 

I haven't acted on this league table idea. But I am gathering a catalogue of the worst sites I find, and may publish it at some point.

On the other hand, promoting performance within the industry is a good way of positively affecting those I associate with to focus on performance, sell it to their clients as a benefit, and to do better when building sites in the future.

It's something we should all be intensely interested in doing.

**Update: 2nd July 2017**
I have decided against this idea. I think perhaps this idea is taking the principle too far. I spoke to a friend who hosts Relative Paths podcast, and decided that it would be best to shelve the idea. I don't wish to cause conflict in an already divisive environment.

I wish to say that websites with poor performance aren't usually the result of a choice developer makes about a website, in my experience. Rather, it's been the cumulative poor decicions of agencies (not individuals) who build websites for one person: the client, or the MD who has commissioned the project, and not with the ordinary visitor in mind.

Google recently launched a tool which excellently captures the essence of my idea: Test My Site with Google shows pretty clearly where a site is positioned in terms of performance.

I really think that this tool can be a good way of promoting performance best practice within our industry.

[> Test My Site With Google](https://testmysite.withgoogle.com/intl/en-gb)


<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

