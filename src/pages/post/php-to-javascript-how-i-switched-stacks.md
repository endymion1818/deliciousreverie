---
categories:
- personal
- development
date: "2018-08-08T14:21:21+01:00"
description: The last 6 months has been a bit of a whirlwind for me. I have gone from
  working with agencies and using a mix of technologies, to JavaScript development
  in a fintech organisation. This has been largely due to my work with GatsbyJS and
  Serverless.
draft: false
tags:
- zopa
- indigotree
- gatsbyjs
- serverless
title: 'From PHP to JavaScript: How I Switched Stacks'
---
I've been working in web development for the past 8 years or so. Traditionally, I have worked at agencies, creating sites that have been designed in Photoshop, and built afterwards with a CMS integration such as Perch, WordPress, or similar, with occasional forays into Laravel.

During that time I've had the opportunity to work with JavaScript too. But understanding the language well seemed a bit beyond my grasp. One of the reasons for this was, I think, that I was trying to juggle several languages at once. I spent a lot of time understanding design patterns in PHP. Then, after I interviewed at Google, I decided to focus more deeply on CSS and HTML. And with these PHP projects, a lot was done in that language, leaving JavaScript as a vehicle for presentational enhancement only.

But then, because of concerns about WordPress' future, Indigo Tree, the agency I was working for, invested time for its developers into finding a possible alternative to that popular platform. Lead developer Chris Geary saw an opportunity here. Instead of trying to replace WordPress with another platform in a 1:1 comparison, he realised we could deliver serverless sites using some cutting-edge tools that were emerging.

## Investigating Serverless

This approach had the advantage of allowing a transition: the agency could keep selling and building WordPress sites (they'd been doing this for 10 years and were comfortable with it), but these sites would have a separate front-end using the headless CMS strategy. It also allowed them a marketing opportunity: headless was a buzzword, they could position themselves as a thought leader and gain reputation from that.

So began my journey to serverless. I was introduced to Netlify, and promptly moved my sites from PHP to static, which allowed me to see the benefits of continuous integration, and saving myself a monthly hosting fee in the process.

I experimented with Jekyll and Hugo, but I didn't see a future for me in either of these languages (Ruby and Go, respectively).

Then Chris started talking about Gatsbyjs. So I built a Gatsby site, FreeBabylon5.com. As mentioned, I hadn't done a huge amount of heavy lifting in JavaScript before. I'd only toyed with React. I had no idea what I was doing and that felt awesome.

As I learned Gatsbyjs I noticed a typo in the docs and submitted an issue. I was invited to fix the issue myself and submit a pull request. I had never done anything like this before! Cloning an open-source project, branching off so I could fix the issue, pushing up my code and submitting a Pull Request ... wow. With this new knowledge I felt like I was finally able to give back to some of the amazing tools I'd so often used in the past.

## Documenting the Experience

My personal view is that I should document everything I learn, in the hopes that someone else might be able to benefit from my experience. So I started writing about my explorations here on delicious reverie.

To my amazement the creators of Gatsbyjs read my post and asked me to publish it on the Gatsbyjs blog. This gave me more confidence to progress further along this path, invest in my own learning towards JavaScript and using Gatsbyjs for more projects.

Around the same time, my colleagues and I became more concerned for developers using WordPress. It seemed that many of them could soon be pushed out of that platform for reasons I'll explain in another post. We wanted to help them identify another route that would also encourage best practices in web development.

So I submitted a talk outline for WordCamp London, which is usually attended by 400-500 developers. I also approached print magazine Net on the same subject. Both the talk and the article were accepted. I soon found myself on the main stage at the conference delivering a 40-minute talk, and saw my material published in the print magazine.

I get so terrified about pushing myself forward in these ways, especially because I was new at all of this. But I felt I had something that could potentially help some other people. That motivated me to overcome my abject fear.

## Zopa's Serverless Initiative

Around this time peer-to-peer lender Zopa were looking to replace a Ruby app with a static website. So they approached me directly and called me for several weeks until I finally had time to hear what they were trying to say.

Zopa had already identified Gatsbyjs as their tool of choice because they had lots of in-house JavaScript and React expertise. They had partnered with an agency to design and build the site, and wanted me on board to help develop it  because of my experience with the framework. I'll be able to tell you more about the site when it launches, but it's been a great experience working with some excellent and incredibly smart people both at the agency and at Zopa.

I've had to learn a lot in a short space of time, but Zopa have been supportive and patient with my learning experience. In return, I've been able to help identify where Gatsby's APIs can be used to great effect instead of a custom solution that renders content on the frontend. I've been able to help other developers explore the GraphQL syntax and use Gatsbyjs's built-in IDE to query the data structure. And I've helped identify where opportunities to use functions hosted on other platforms enable us improve performance.

What I've most enjoyed is seeing those "wow" moments as developers really _get_ GatsbyJS, and how, because of it's approach to data, it's not just a static site generator, it's much more than that.

So now, instead of working with agencies on predominantly PHP projects I'm a JavaScript dev working in central London. The deadlines are just as tight, the pressure to deliver can sometimes be much more, and learning a complicated custom-built infrastructure has been a challenge. But I've really enjoyed experiencing things from this side of the fence.

I'm continuing to work with internal teams at Zopa to give them the opportunity to contribute to the project. I'm really hoping I can do more with GatsbyJS as a contributor. And I'm glad to say that in spite of missing the close-knit community of developers I've been around up until now, I'm happier being focused on JavaScript than I've ever been.
