---
categories:
- development
date: "2017-12-07T15:21:21+01:00"
description: We're going to take a specific journey that was written for a project
  I worked on, examine who should be involved and break down the details so that we
  can examine why user journeys are useful, and how you can use them more effectively.
draft: false
tags:
- project planning
- agile
title: Planning Projects — a guide to user journeys
---

**A few years ago I was lucky enough to work with a really talented team on a large software application that we built from scatch to serve a large, distributed construction organisation. I learned a huge amount working for this company. One of the things that I enjoyed learning most was how to capture project requirements so that what we delivered met or exceeded user expectations. I'd like to share with you how we achieved that.**

The team were good enough to train me in how to work within their process, and a few times I got invited to represent the frontend team in project scoping meetings.

I'm going to outline what we did so that you can see the benefits of documenting a project as user journeys.

We're going to take a specific story that we wrote for this project, examine who should be involved, what epics are and how they can help, then break down the story title and description to examine why we did things this way.

## Part 1: Who Should Be Involved

The project meetings were a really open discussion between the developers, both front and backend, a business analyst and one or two key stakeholders who would be using the project day to day.

The user and stakeholder would start by describing what their current system was. For the most part, this involved gathering data about construction projects into a huge spreadsheet, including proposed schedule of works, availability of contractors and in-house staff, as well as materials purchase and hire.

The project director would originate the spreadsheet and various site managers, materials handlers, personnel teams, would contribute to the spreadsheet, mailing it round to each other as they went.

Before this meeting, I had literally no idea of the workflow they were using. Already I was beginning to see the potential of what we were building, and how it would simplify and standardise things for our users.

As a result, I began to empathise with them more, and started to think about how things could be represented so that they would be familiar and helpful.

It is very important that user journeys are not composed in isolation. Individually, we were all pieces of a puzzle, and had essential insights into the process of building that resulted in a much clearer document that was practically useful.

If no developers had been involved in the meeting, essential information about the functionality would have been missed, rendering the stories less useful or even potentially harmful to the build process.

> "Hell is other peoples undocumented assumptions" &mdash; Nicole Fenton

## Part 2: Epics — Story Overviews

As the stakeholders talked we documented things, together with the business analyst, in a way that would lead to some specific user stories.

Here's an example of an epic

> As a department overseer I want to display current users so that I can select personnel for a project

The structure of this story is very important:

> as a (__role__) I want to (__tasks__) so that I can (__achieve goal__)

At first, it doesn't seem as if the final statement is important. You  might think it's too obvious to state a goal, or you might have little idea what that goal is.

However, the goal can be critically important to meeting user expectations, and reducing wasted development time. If you don't clearly understand what the users' goal is, even if you've identified the task they are doing, you can miss the mark entirely.

From this epic we built up a workflow that helped us see the task in context with the rest of the application:

---
1.	Department overseer sets dates which generates email to all department staff
2.	staff respond via authenticated webpage
2.1.	availability
2.2.	max no of days
2.3.	transport required?
2.4.	Can provide transport?
2.5.	(Veggie – see separate user story re staff page)
3.	Coordinator selects and sets staff dates
4.	Reviews and generates email confirmation of dates
4.1.	Includes in email, details of things they need to know (transport, PPE, badges, checklist)

---

From this workflow we have started to identify stories that need to be written up and queued into the project.

## Part 3: User Stories (or journeys)

User Journeys don't have to come from epics, but often you'll find that you have a story that begins to look unwieldy, as if it might involve several different stages or work in different areas of the application.

My opinion on this is that if one story can be broken up into several smaller ones, it should. There's no harm done by having more stories, and they'll be easier for the developer to process, and less of a pain for the QA testers too.

Here's a story that's closely related to the epic above.

> As a Department Overseer I want to select staff for projects, based on criteria so that the right mix of staff are invited

I know what you're thinking, "what criteria?" - that's part of another story. It was easier for us to break this one down so that we could handle the criteria seperately. But this task was merely concerned with selecting staff.

Following this story is a description, which has three main groups of information: Prerequisites, Acceptance Criteria, and Process.

### Anatomy of a Story: Prerequisites

A Prerequisite is a set of requirements that must be already present in order for this story to move into the backlog so that it can be worked on.

The prerequisites for this story are as follows:

---
* Department is defined.
* Project is defined.
* Project date has been set.
* Project tasks are defined.
* Department staff and their task skills/levels are defined.

---

This says to the developer that they need to check these need to be completed and in the current build before we go ahead with this piece of functionality.

### Anatomy of a Story: Acceptance Criteria

Acceptance criteria allows the developer to see more detail about what is involved in this story.

It also allows the QA team to see what they might expect to see when they decide whether to pass or fail the story after the development sprint.

The benefits of investigation and conveying acceptance criteria are:

1. Reducing developer cognitive load by eliminating or reducing guess work, thereby increasing speed in which this task can be completed
2. Increasing user satisfaction by fulfilling their expectations straight away, increasing their confidence in the teams' ability to deliver, and
3. Avoiding costly refactors due to not meeting the users' expectations

Our acceptance criteria for this story was as follows:

---
Display Staff information:  
* Staff Name (static data, link to staff info, and display photo on hover, congregation).  
* Team (static data, use for geographic division to meet Branch recommendation).  
* 1st trade / 2nd trade.  
* Date last attended.  
* Date last invited (should this be Last Invitations or Invitation

 Records – displaying status of date/accepted or date/declined or date/unable-contact or keep-on-hold)  
* Task name/skill level (sort by skill level)  
(All column headings to be static information.)  
* Allow selection of staff based on skill and training requirements   

---

Now there's no ambiguity about what needs to be displayed in this view so that the Overseer can complete his task of selecting the right people for the job.

### Anatomy of a Story: Process

The process details how the user will achieve the task outlined in the story.

Here's the process for this particular story we've been looking at:

---
Process:  
Search all Staff  
* First Name  
* Last Name  
Email all selected staff to invite to project,   
* Staff reply by link to a tick box calendar  
* Overseer reviews replies  
* Display staff for specific task name (sort by skill level)  
* Define if selected for training.  
* Define dates like to invite (calendar)  
* select staff based on skill and training requirements    

---

Without a process description, the developer could easily miss key elements out of the delivery. For example, you can see here that the process involves an email function to staff who are invited, and a calendar that's visible to staff members and to the overseer so that they can easily identify when they can be expected on site.

The process description allows the developer to imagine the user completing the task so they can visualise it, and then produce code that matches.

## Part 4: Estimating

Once this story has been agreed by the stakeholder, the business analyst and the developers, the developers can estimate difficulty.

Estimating time it takes to build some piece of functionality is notoriously difficult. In my experience, no human seems to be able to do this terribly well.

So instead of estimating time, we can estimate difficulty by using points. The developers will find this easier to quantify, and then the backlog can be populated based on the number of points.

We used a simple system for points:

1 - easy  
2 - challenging  
3 - difficult  

We decided that each developer's backlog should contain no more than 10 points worth of work. This keeps them focused on the task at hand, and allows you to re-allocate work to other developers based on their availability and workload.

## Quick Recap

That's our story breakdown! What did you think?

We looked more at the role epics play, got a feel for who you should include in scoping meetings, and broke down how we estimated user stories.

What did you think about the anatomy of a project? Do you think it's useful to outline prerequisites, to clearly state acceptance criteria upfront, and to break down the users' process.

You might think on first impressions that there's quite a bit of work involved. But investing a little in getting things right the first time avoids more issues and reduces overall project cost - as well as reducing frustration from developers and clients - further down the line.

I certainly enjoyed the process, and have tried to bring at least some elements to this way of thinking into each place I've worked at since.

I hope it proves useful to you as well.
