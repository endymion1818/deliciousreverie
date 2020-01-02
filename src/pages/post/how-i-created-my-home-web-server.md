---
categories:
- development
date: "2017-02-18T15:21:21+01:00"
description: Is it just me or does Apple's iCloud seem like a very simple solution
  to a problem all of us in a connected world face? That of storing, managing and
  sharing photos of our loved ones, holidays and interests with others? Instead of
  being faced with ever increasing charges from Apple to store my stuff, I decided
  to get a solution I could be more in control of.
draft: false
tags:
- system administration
title: How I Created My Home Web Server
---

**Is it just me or does Apple's iCloud seem like a very simple solution to a problem all of us in a connected world face? That of storing, managing and sharing photos of our loved ones, holidays and interests with others?**

Instead of being faced with ever increasing charges from Apple to store my stuff, I decided to get a solution I could be more in control of.

## You Will Need

I could have done this project by setting it up on my own existing home computer, but I already had a spare laptop that had been given to me. I also thought it would give me the freedom to wipe everything and start again if I messed it up irreversibly (which, coincidentally, did end up happening!).

I decided that I'd like to use the current LTS issue of Debian for my hosting platform. I liked the idea of using a bare bones OS, something that I hoped I would be able to customise and learn with. I installed this OS and got to know it, especially how to update and install core and third party packages.

The main commands for this are:

```bash
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get dist-upgrade
```

#### First hitch: Packages not upgrading

About the first thing I noticed when I went into the Terminal app from the GUI was this message that I could upgrade packages, but when I tried to install stuff, it said that no packages were updated.

After some research, I found out it was because I needed to extend the Sources list to include some other sources, [as explained on the wiki](https://wiki.debian.org/SourcesList).

I was then able to install the AMP stack (Apache, Mysql, Php) and it gave me immense pleasure to see a "hello world" message when I added a php file to the www directory.

#### Second hitch: Permissions

At this point, I found that I was having trouble getting the right permissions for PHP and MySQL to operate.

I didn't know at the time that the solution is to create a new group (its usually "www"), add the current user to the group, then add the user used by Apache (www-data) to this group.

#### Third hitch: Sharing

At this point, I got stuck trying to see how to see my website from another computer in my local network. It seemed that whatever IP I went to, nothing worked.

I went down a bit of a maze, installing Samba file sharing system before second-guessing myself into the belief that I had taken a serious wrong turn somewhere previously. And now I had Samba, NFS and other file sharing services turned on, potentially exposing my computer to weaknesses.

So in order to progress quickly and avoid having to retrace all my steps, I wiped the computer.

It might seem a little drastic, that, but it did get me out of that situation quickly!!

## Second Attempt

Even though there were a lot of reasons to like Debian I decided that the community support just wasn't there for me. It's not a criticism: those who use Debian really know what they're doing, but for that reason it's hard to find support for it.

Also, I knew that Ubuntu came with a lot of the things I would need preinstalled.

So I downloaded Ubuntu Server, reformatted my install USB, and started again!

This time I discovered the `ifconfig` command really quickly on support sites, and was very soon able to use SSH to log in to my new server. That was an amazing moment for me!

Soon after that, I installed RSA keys and was able to log in much more easily and safely to my device. I went on to install & configure my AMP stack, and this time view my Hello World app right from my laptop.

I uploaded a website I'd been building that would serve as a replacement for our current iCloud workflow, which required a few tweaks to permissions again (creating a group for www-data user as I mentioned above) and could access the site.

## Port Forwarding

I went into my router's control panel and turned on port forwarding for my web's default port. Almost instantly, I saw my website ... but could no longer access my routers control panel!!

This suits me for now, because I don't have to worry about any other ports being open, and so there's also less vulnerability for my router. But I also don't have SSH access from outside my home network.

I'm going to fix this, but I don't currently have the headspace to go in and configure it and my port forwarding again.

## Changing IP Addresses

At first, I was amazed at how quickly my home IP address would change. I realised that if I wanted to reduce outages, I needed a method to keep my site live enough for it to be useful by our family.

I now have a free plan with No-Ip, which has installed a program on my server to update a DNS server when my IP address changes. If this works successfully, I will likely get a paid pla, unless I can figure out how to do it myself!

#### Fourth hitch: Uploading files using the CMS
I how had a working website I could use and refine. But when I tried to upload files I came across an error where the file could be uploaded, but couldn't be moved to the content directory.

Again, this was a permissions issue I had, where I needed to give the "nobody" user the ability to write to disc. I did this by adding this account to the user group I had created earlier.

## Conclusions

Setting up my own home server has been frustrating at times, but its taught me a lot about the underlying technologies of the web.

Given that, I'd really like to try other projects in the future that will help me to better understand how browsers and the internet work.
