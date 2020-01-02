---
categories:
- development
date: "2019-02-06T14:21:21+01:00"
description: When you start a Node web server using it's HTTP interface you will by
  default run on a specific host that resolves to  `127.0.0.1`, your localhost. Here's
  how to access your NodeJS server on Mac in Windows using Parallels.
draft: false
tags:
- tools and processes
title: Accessing Localhost in Parallels
---
**I just obtained a licence for Parallels for my work computer, and it was a doddle to set up. I didn't realise before now that Parallels will also download and install Windows 10 for you as part of the installer. This was a smooth move. But, when I went to preview my site in IE11 ... nothing happened.**

When you start a Node web server using it's HTTP interface you will by default run on a specific host that resolves to  `127.0.0.1`, your localhost. This isn't shared by your Windows OS although I don't know if there's a way to forward through to there from MacOS.

So typing in `http://localhost:8000` was never going to work. After much googling I found [this post on the Parallels forum](https://forum.parallels.com/threads/accessing-localhost.258362/) that referenced Angular's cli tool an demonstrated that you could pass a flag to change the host IP.

I thought to myself that the Angular CLI probably uses the same common code (Node's HTTP interface) and tried that in my app:

```bash
gatsby serve --host=0.0.0.0
```

This little trick mentioned in the forum means that the server will allow access on any port, not just on localhost. So now I had to find out what port Parallels would accept.

Following that thread down, I found this IP address mentioned by one of the Parallels developers: `10.211.55.2`. Aha, that worked.

So in future, if you're running a NodeJS server on their mac and wants to view the site on Windows using Parallels, first spin up your server with the `--host=0.0.0.0` (that's four dots and four zeros) and visit the following address in the browser on Windows:

```bash
http://10.211.55.2:8000 // or whatever your port is.
```
