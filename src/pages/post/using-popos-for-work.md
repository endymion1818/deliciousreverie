---
categories:
- sysadmin
date: "2018-02-10T15:21:21+01:00"
description: In November last year I switched from using Windows at my place of work
  to using Pop!_OS by System76, an Ubuntu derivative designed for developers, researchers
  and scientists. What motivated me to make the switch? What benefits, and disadvantages,
  has it brought me?
draft: false
tags:
- system administration
- linux
title: Using Pop!_OS for Work
---

**In November last year I switched from using Windows at my place of work to using Pop!_OS by System76, an Ubuntu derivative designed for developers, researchers and scientists. What motivated me to make the switch? What benefits, and disadvantages, has it brought me?**

When I came to work at my current employer, I got given a PC to develop on. I was eager to fit in and please everyone, and accepted the situation with the single caveat that it had to run WSL (Windows Subsystem for Linux, commonly known as Linux on Windows).

## Using Windows Subsystem for Linux
I've enjoyed using WSL, and it certainly has made Windows much more painless to use as a developer. I spend a lot of my time in the terminal day-to-day, using various web development tools including git, node, yarn, and other tools such as WPScan to analyse legacy sites. But it does have certain limitations. For example, I could never get Mysql to work on the command line. Only Atom allowed me to open files straight into my text editor. WSL is a brilliant innovation and I hope the team continues to push the boundaries there.

But in the end, it wasn't quite enough for me. I also never got embedded into the Windows workflow. You know, little things like how windows layer on top of one another instead of occupying their own spaces. I never got over little things like that which interrupted my mental model of my workspace.

## Why Not MacOS?
For a _loooong_ time I've been a Macintosh afficionado, ever since my friend Martin Harries sold me a Performa in the early 90s. Although the OS is a great solution for a lot of individuals, and I can't argue that it's visually appealing.

But when you start getting under the hood you come up against its inadequacies.

I didn't like the absence of a package manager to maintain the OS from the command line. Also, a lot of the apps are a layer on top of command line programs which interfaces I now prefer for a lot of tasks.

## Enter Pop!_OS
Pop!_OS is billed as a system built for creators. It's interface is clean and out-of-the way, although it reflects well the 70s design ethos of its creators, System 76.

Where Pop! came into its own for me was it's inbuilt terminal. I started off downloading and configuring Hyper, my go-to choice on the Mac. But after a while this broke, leading me to use the native terminal. It didn't take me long to figure out this had already been configured really well with a lot of the extensions I would've added anyway.

The other great thing is the Super key. On Windows, the Super key will allow you to search your programs. On Mac, the super key with a modifier gives you either a search / app launcher, or it tabs through your open apps.

But on Ubuntu (of which Pop is a derivative), it serves both as an app launcher and zooms out all of your open apps, allowing you to visually switch between everything, or start a new workflow. It also gives you access to your desktop spaces so you can see other workflows in progress.

For my mental model this is absolute genius. I've got a pretty visual mind so seeing all my work spaces tiled out like this is really helpful in giving me some context.

![Super key depressed showing all windows zoomed out and all apps currently open](/images/pop-super-key.jpg "The POP OS Super key is ... well ... super!")

##### I am reminded to make a lightbox popout for images like this :-(

## Caveats, or How Not to Break Your Computer

For many people, using Windows or MacOS is insurance ... you know you're probably not going to be able to break the OS irrevocably, and if you do you can just restore it from the cloud. Ubuntu can have this kind of setup, however I ... haven't configured it. I have broken things a few times, mostly by revoking my own permissions to edit files or folders.

Hah, yeah, I'm such a newbie at this.

But on the other hand, I have always found a solution from the excellent community support forums, or helpful FOSS software maintainers.

Whilst there's cause for concern, I'm not worried to the point of paralysis. It's a bit like doing DIY. Yes, you can break stuff, but you have to try your best, and call in the experts when you get stuck.

One day, in the far distant future, I hope I can help others who might be in a similar position.

## App Availability

One thing that grates against the argument that you do need a bit of familiarity to aid your workflow is that a lot of the apps I'm used to using aren't available for Linux.

A good example is Sketch, which was my go-to design tool.

I've found a great replacement in [Figma](https://www.figma.com), which is superbly responsive on a browser if it doesn't currently have a native app. I'm also really looking forward to Alecaddd's [Akira](https://github.com/Alecaddd/akira), which is in beta but looks really really promising.

For raster graphics editing, I have used GIMP. As much as people rave about it, I have to say ... I hate it. It's just so counterintuitive. Instead, I've been using [Photopea](https://www.photopea.com), which opens just about any graphic format, and is a pretty decent editor in the style of Photoshop.

These tools have meant I hardly skip a beat when I am handed a set of design files.

## Conclusion

Pop!_OS is a smart, well designed release of Ubuntu which has sped up my workflow massively. I thoroughly enjoy using it. I'm seriously considering replacing my home laptop MacOS system in favour of it. The only thing that's holding me back is the thought that I might lose the ability to play the platform game Braid. That would be very sad, but not essential!
