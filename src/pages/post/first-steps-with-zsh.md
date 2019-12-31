---
categories:
- development
date: "2016-08-24T15:21:21+01:00"
description: I'm one of those guys (coming from a design background) that was terrified
  of the command line. Literally, terrified. I knew enough that simple commands could
  irreparably break my computer, and that scared me. But gradually, I've begun to
  use more command line tools, and recently discovered ways to make my workflow easier
  by using zsh terminal commands.
draft: false
tags:
- command line
title: First Steps with zsh
---

**I'm one of those guys (coming from a design background) that was terrified of the command line. Literally, terrified. I knew enough that simple commands could irreparably break my computer, and that scared me. But gradually, I've begun to use more command line tools, and recently discovered ways to make my workflow easier by using zsh terminal commands.**

I started using the terminal because of the benefits of build tools. I use Grunt in everyday production of my websites now, to minify & concat my JS and SASS files, and sometimes to minify images and SVGs. If it hadn't been for these benefits, I doubt I would have ever used the terminal in the way I do now.

###GIT in its Native Environment
I recently ditched my 2 git graphical user interface programs (Github and Git Kraken) in favour of using the terminal. I liked how I could have more control over my commits this way, and not have the extra overhead of another program open whilst I'm trying to work (I have a very minimalist approach to working, as far as that's possible).

Git on the command line is fantastically useful, and I've never been more comfortable stashing, switching branches and doing all kinds of fancy things ... but I always wanted my terminal to do something more.

I find the following things really useful:

`[8:45|`

This is the time I ran the command. So if I'm working through a project I can see exactly what time something was done ... this gets useful if you're tracking how long a certain task has taken, especially if your time is billable.

`~/S/ech-ech`

The next bit shows the current path in an abbreviated form. For example, the `/S/` refers to the "Sites" directory.

Following that is the git information I was telling you about:

`git:(master)`

This shows that the current directory is a git project, and that the current branch is one called master.

This reference, in purple in the screenshot:

` 0dd6b659`

Is the commit hash. I use this to track my commits through the day, and can easily scan up & down my commit history to see what changes are made, when.

###A Note about Tools
To get this functionality, I'm using a tool called [Oh My zsh](http://ohmyz.sh "Oh My ZSH website"), a tool which has hundreds of themes  , of which I'm using this one: https://github.com/calebmeyer/cpm-zsh-theme, which you have to install manually (instructions are on the readme file).

I also enabled a few extra plugins for git functionality by adding this to the .zshrc file: `plugins=(git git-extras git-remote-branch)`

I would never have become this confident were it not for this course on Udemy: https://thoughtbot.com/upcase/videos/git-workflow. Check it out! There's lots more in the course, including some snippets you can run so that you can use git even more effectively.

###Confidence in Progress
I'm still working on using the command line effectively. I've recently decided to start using webp images in my website builds ... there's a command-line tool that [converts jpg files to webp](https://developers.google.com/speed/webp/docs/cwebp "webp processor command line tool from Google") and a script here that allows you batch process all images in a directory: http://stackoverflow.com/questions/26565191/batch-process-png-to-webp

So, if you're not confident with the command line, there are many useful, time saving things you can do. Perhaps now is the time to give it a go?
