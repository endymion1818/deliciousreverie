---
categories:
- development
date: "2018-07-06T14:21:21+01:00"
description: '''Form Follows Function'' goes the saying, but with HTML forms, it''s
  the other way round. At least in terms of what happens when you fill out a form,
  and then click the button to ''send'': a function processes the form. What happens
  during this process? Why is it necessary? What are some of the options for serverless
  form handling?'
draft: false
tags:
- understanding the web
- php
- serverless
title: How Website Forms Work
---
HTML Forms are one of the most fundamental elements in the web builder's toolbox. It would be a rare website that doesn't use this element to complete any of the most basic tasks someone might want to achieve. But there's a lot that goes on behind the scenes. Here's a bit more of an in-depth look at what happens when you click 'Send' on a form, and why you need some server-side code (somewhere) to handle that process.

First of all, we need a short history lesson about the form HTML element.

## The Origin of Forms

The `<form>` element was originally intended to be used to post content directly to web pages. So a person visiting a web page could modify what they found there, adding to it, removing parts or all of it entirely.

This feature never made it out of the lab. But it was a pretty neat, if not idealistic, concept. Imagine how different things would be if anyone could change your website. This kind of idea was eventually tried out by a few intrepid individuals, notably Wikipedia, who were allowed to edit pages without any checks or balances. Unfortunately it led to widespread abuse. The sites were often either shut down or restricted after a short period of time.

But the basic need still remained: _as a website visitor I want to send my email address so that the website owner can contact me_ is the core one. There are many others: making a purchase, submitting a comment for display on the website, purchase an item, and more.

People realised that they needed some method of collecting the data people had entered on their forms. They needed to validate it, making sure fields were filled out and not left blank, that they used a number where that was expected, a date when that was required etc. Then they needed to send that to an email address or other consumer so the person could be responded to, their comment displayed (or not), their order fulfilled, or whatever.

That requirement led to the necessity for server-side code.

## Server Side Form Validation

One of the earliest and most popular languages to tackle this issue was PHP. You could include some server-side code right there on the page. Now when someone clicked "send" or "submit", the PHP would collect the data, format it as an email, then send it.

It did this by the form's `method` and `action` attributes. The `method` was usually a `POST` request, a new entry to be added. The `action` attribute could be set as a URL, either the page you were on, or another page, that when sent could be triggered.

Then the PHP would receive that into the global `$_POST` variable, where it could be processed.

Now people could not only read messages from the website as if the person had merely sent them an email, but they could check the form had been filled out properly too. You didn't have to send it to an email address though. You could accept a payment, submit a comment for approval via a CMS, or connect with a CRM to collect and analyse leads.

But these all required server-side code. Some application or at least a single function that would start running when the form action was triggered by someone pressing "submit".

Great! Unless you have no server-side code.

## JAMStack Caveat

Going "Serverless", using the "JAMStack" means, in effect, going back to the roots of the web. We are approaching websites once more as we did before we had server-side code.

Though this has huge benefits, there are new (and perhaps old) issues to overcome. The primary one being, "how do we validate, process and send form data?"

## Processing Forms Using Client-Side Code

Some people realised that once you submit code to your server, you can gain access to that server remotely and do nefarious things to it. This was entirely dependent on how well people had written their server code, but there were often flaws to be found and exploited.

This resulted in website owners starting to validate code on the client using JavaScript before the form data was submitted. Now form submissions could be more sanitised before they got to the server, and also feedback for the person filling out the form could be much faster. You could tell them it wasn't valid as they were typing, instead of waiting until after they clicked "send".

You might think we can therefore use client-side JavaScript to submit form data. But the trouble with client-side code is that _it is all public_. And therefore it can be manipulated by someone to perform actions you don't want to happen. For instance, someone could change the URL, and they might get lucky, hitting another API endpoint that exposes a vulnerability. Or they could modify the form data to contain malicious code that takes control of your computer via your email client.

That would be bad.

So we still need some way of submitting code via a _private_ resource. Something that isn't visible or accessible by everyone.

## Form Submission Without a Server

We currently have a few options when it comes to serverless form processing:

 1.      Use a 3rd party service
 2.      Use a 3rd party function

It's all about how much _control_ you want, _budget_ constraints you have and what you need to achieve.

### Popular 3rd Party Services

Even before the advent of serverless, there were 3rd parties that offered form processing as a service. These are usually paid-for, often use their own form code (with varying standards), often with a version you can modify via their parameters or CSS rules.

Wufoo is probably the oldest of these. But there's also Typeform, Mailchimp and others. If you use Netlify, you can use their Forms system, for which implementation is extremely easy.

However there are often restrictions with these services. Some plans begin to get expensive quickly. Other features you may require, for example, sending a receipt confirmation to the sender, are impossible, or are branded with the providers' details.

Another option is to write your own function.

### 3rd Party Functions

With the advent of Serverless, you can now submit your form to a URL that contains a form processor running in isolation from any other code, inside its own "container", or virtual server instance.

Amazon Web Services have their popular version called Lambda. Microsoft has Azure. There's also Heroku, owned by Salesforce. All of these provide an environment of server side code of your choice (PHP, Node, Go etc, with different release versions). This means you can write your own form processor, specify your environment language and any variables you want to utilise, and then deploy it.

This allows you complete control over everything you might want to do with your form. An added bonus is that it is run independently of the website (so no application load time for your users), and can be modified independently at any time.

In this case the form `method` will still be `POST`, but the `action` parameter will be the URL of the serverless function.

Often these services are low-cost, meaning you only pay for the server time you actually use. Processing time is often sandboxed to 1 minute (probably much more than enough to interfere with this use case), and there is no server infrastructure to worry about.

An extra benefit is that if form submissions become extra busy, with concurrent POST requests,  the function container will be duplicated enough times to meet demand. Automatically.

It's out of scope for this article how to write a serverless function. However, it's just a normal piece of code that you might want to implement anywhere.


## Form The Future

Form have had a long history on the web. Now we're approaching things from a serverless perspective, we can address the needs of people who use our websites in a much more robust way by abstracting away what holds them back from interacting with our site.

At the same time, it doesn't harm those who might have the advantage of a speedy network connection, and won't notice the difference.
