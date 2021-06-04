---
title: monorepos.
date: "2021-06-04T15:21:21+01:00"
description: "I've recently been introduced to the use of monorepos to manage projects and have a few thoughts on the idea."
draft: false
tags:
  - monorepos
  - git
  - devops
categories:
  - development
  - new technology
---

**I've recently been introduced to the use of monorepos to manage projects, and have a few thoughts on the idea.**

First of all, I'd better explain what a monorepo is. The idea is that instead of having many different Git repositories for a group of related projects, you have just one, containing all of your different projects that come under a common umbrella.

Many projects that I am interested, and to some extent involved in, use monorepo tools to manage their work.

## Advantages

A few of the advantages are that you can more easily get a "birds eye" view of the project, so if you're a new starter you can easily see what the coding styles are in other projects that might be similar to yours. This helped me when I started working at Purple Bricks: I could use some of the code that was already there in other applications to call APIs, build UIs and other things without having to ask my team mates hundreds of questions.

Another advantage is that you can also share resources such as NPM packages in a more uniform manner. There's often just one `node_modules` folder instead of one for each project, and you can have one `package.json`, meaning every project uses the same version of each module you have installed or built. If you publish a new version of a shared library, the updates are pulled into the project on the next release, which can save a lot of laborious manual updates.

## Necessities

There's a flipside to that though: because shared modules are updated instantaneously, thorough testing is needed to make sure and changes aren't going to detrimentally affect some projects.

There's also quite a bit of configuration involved, since all of your unit, integration and end-to-end tests are typically managed through the monorepo. I'm currently using the [Nx monorepo management tool from Nrwl](https://nx.dev/), which has done a lot to streamline the development process.

Nx has a command-line tool, so you can run `nx affected:test` to run tests for all of the applications you've _affected_, or altered, with the code you're writing. Nrwl claims to be very smart about this, so it can tell what's been updated and only test those affected apps.

In reality this means that if you change something in a shared library, you have to run _all_ of the tests for that library, as well as _all_ of the tests for each of the affected applications. This can take quite a considerable amount of time as you add different applications to your workflow, and in my experience it soon gets really slow.

We have a common shared UI library which is in active development, as most shared UI libraries tend to be. Each time we touch anything to do with these, it takes up to an hour for all of the CI checks to complete, and there can be timeout issues depending on the availability of the pipeline.

[Lerna](http://lerna.js.org), an alternative, older monorepo management tool, has a concept of [independent projects](https://github.com/lerna/lerna#independent-mode), which works similarly to if you have separate repositories. But that does negate some of the streamlining that shared projects have.

## Verdict

So far, I've benefited quite a bit by using Nx to manage our projects. development is somewhat simpler, it's learner friendly, and streamlines some of the issues you may have experienced if you've worked on projects with interdependent code.

However, it comes at quite a high price: configuration can be a pain, and build times do become extremely frustrating.

If you judge the price is worth the benefits, it's worth adopting this approach. Careful thought is warranted though, since it is an investment you'll have to live with for some time!
