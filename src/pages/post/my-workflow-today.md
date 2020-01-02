---
categories:
- development
date: "2015-11-17T15:21:21+01:00"
description: 'Workflows and tools are constantly changing. The tools we use and the
  workflow we have means we''ve simplified our build process and cut out some of the
  repetitive tasks, so that we can concentrate on simply doing the stuff we love as
  well as we can. This is my current set up:'
draft: false
tags:
- tools and processes
title: My Workflow Today
---

**Workflows and tools are constantly changing. The tools we use and the workflow we have means we've simplified our build process and cut out some of the repetitive tasks, so that we can concentrate on simply doing the stuff we love as well as we can. This is my current set up:**

### MAMP — for developing locally
Despite the learning curve, developing locally before you push your changes live avoids so many potential problems, and allows me to use some great pre-build tools that just don't work on servers that I have available.

I use MAMP because it was orginally built for the Mac and was the simplest one to use — and I tried a few. I recently bought the Pro version because it allows you to create virtual hosts. Virtual hosts make it much easier to go live (a lot less absolute URLs to change).

### Sublime Text — for coding
I've tried various tools for witing code, but keep coming back to Sublime Text. I really wanted to like Atom, but it was just too slow and buggy at the time. Sublime Text 3's extensions make a really great workflow that I've got really comfortable with (for the moment...)

### Sublime Text Extensions

##### Material theme
Material Theme — because I love dark backgrounds, I find it helps me to concentrate. Plus it has folder icons that help me to see what kind of file I'm looking at at a glance. I find it's quite common for a theme to have great code hinting in either JS or SASS, but rarely both. Material seems to get a good balance between the two.

##### GitGutter
This plugin allows you to see what lines have been changed since your last git commit. Really handy if you can't remember what you've done, or your working with a colleague who doesn't use git (it happens!).

###Grunt — for repetitive task running
I'm feeling a bit of pressure to move to Gulp for task running, but I have a well established workflow for Grunt which I don't want to rebuild at the moment ... so I'm going to stick with what I have!

I've included my current Gruntfile setup [in a gist](https://gist.github.com/endymion1818/e92d40bb91373559936b "grunt file gist")

##### Grunt-sass
Grunt-sass uses the libSass version of SASS compiler, which is now at feature parity with Ruby Sass. Although it does mean that compiling is much faster, it's not the reason I went with Grunt Sass. Not having Ruby as a dependency for my project is cleaner and less to maintain and could mean less potential conflicts in the future.

##### PostCSS / Autoprefixer
I moved to PostCSS for the use of Autoprefixer, which, as the name suggests, allows you to add browser-specific prefixes to your CSS. You can even specify how many previous browser versions you want to support. No more trawling through caniuse.com to figure out what prefixes you need. Want to clean up your code and remove old prefixes? You can do that really quickly with this tool.

PostCSS's creator seems to want PostCSS to do much more, but I find the documentation scant and folder structure (multiple nested 'node_modules' folders) a little jarring, so I haven't used it for anything else, although it shows great potential.

### GitHub Desktop — for version control
GitHub Desktop simplifies Git for me, something which I'm still not comfortable to use solely in the command line (although I do occaionally).

It does bother me that I'm only able to use GitHub accounts with GithubDesktop, so I've been investigating using something like Tower. I don't think I've got a good enough use case for this purchase at the moment really, and I do tend to think I should get used to the command line interface when it comes to GIT.

### Cyberduck — for file upload / download
I love the simplicity of Cyberduck, plus the whimsical yellow rubber duck sitting in your task bar raises a few eyebrows occasionally...

### Trello — for project management
Trello is a great project management tool. It's so flexible; for example, I've set it up as a Kanban board but if you prefer you can set up lists for today, tomorrow future etc or any way you like.

I will usually have 2 main boards: my current project board, and Project Overview board so I can track different projects and easily get a birds-eye view of where I am with each of my projects.

### BugHerd — for feedback and bug tracking
I love BugHerd. With this tool, you can include a script in your dev site and get users / clients / colleagues to click on the site, make annotations and collate these onto a project board. Then you can assign tasks out to different people or open a discussion about why you've built it this way...

### Affinity Photo & Designer — for wire framing & designing
Affinity is not as easy or as professional as using Photoshop and Illustrator — yet. I have become disillusioned with Adobe lately.

Affinity are providing an attractive solution which does work well despite the learning curve, and I'm really looking forward to their direct competitor to InDesign which should be in public beta soon.

## What about you?
Do you use any of these tools in a different way to me? Would you recommend another toolset that perhaps I haven't heard of? I'd love to hear what you think via Twitter.
