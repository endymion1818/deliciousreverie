---
date: "2020-14-10T11:21:21+01:00"
description: "Websites are great tools for communication, but it's remarkably easy to take them offline. For those organisations in which there's a huge financial investment and thousands — perhaps millions - of customers, reliability is a huge concern. The strategies and tools we are looking at here cover both prevention and resolution of problems that could occur to any website."
draft: false
categories:
  - development
tags:
  - tools and processes
  - devOps
title: Tools for Production Ready Code
---

_**A note about this article**: This was a feature I wrote for Net magazine which was sadly closed down before it was published, so I published it on dev.to initially. It's aimed at people who want to get into devOps, or product owners who want to understand what it is they're getting themselves into. I hope it proves to be useful._

Websites are great tools for communication, but it's remarkably easy to take them offline. One of the most panic-inducing moments for any operation can be that first call from a customer informing you that the site is down ... and then the next call, and then fifty more ... suddenly the company grinds to a halt until the problem can be fixed.

Downtime might not be much of a problem for every site out there. If you take down your own personal blog for a few hours, it probably doesn't matter a huge amount. However, most companies and other organisations now depend upon their web sites being accessible 24 hours a day, 7 days a week. Any downtime for these organisations results in loss: the company could be losing money, critical information might not be reaching the right people in a disaster zone, or at the very least, the organisation's reputation is being eroded, minute by minute.

For those organisations in which there's a huge financial investment and thousands — perhaps millions - of customers, reliability is a huge concern. There are now a large range of tools, products and - above all - strategies - for ensuring that if (or rather, _when_) something untoward happens, the right people can resolve the situation as quickly as possible.

In this article we're going to provide some answers to these questions:

- How can we as development teams continue to offer high levels of confidence?
- How can we trust that new features are going to work as expected?
- What can we do to minimise issues that do occur?
- What steps can we take to make sure any unwanted surprises can be fixed quickly?
- How can we make sure that the duration of any downtime is as short as possible?

We have at our fingertips a wealth of tools that can be added to a code base, and a process flow, to catch issues before they reach production ... and if they do reach production, to minimise the impact.

The strategies and tools we're looking at here cover both prevention and resolution of problems that could occur to any web site, but with a focus on full-stack JavaScript.

## **Situation:** When JavaScript fails

JavaScript is a dynamic language. It's great for coercing strings into numbers and back again. But sometimes this causes issues. We have to make sure that the values we're working with are of the same type, otherwise one error in the JavaScript code could break the site entirely.

There have been a number of notable projects that make an effort to deal with this kind of problem by turning JavaScript from a _dynamic_ to a _statically_ typed language:

### TypeScript, Flow or Reason

TypeScript and Flow are the two most popular ways of turning JavaScript into a statically-typed language. Both approaches are a superscript of JavaScript, which means your code needs to be transpiled back into normal JavaScript in order to work on the web.

**TypeScript** is run by Microsoft and is developed for building applications at scale. **Flow** is a great alternative with a similar api.

**Reason** is a more interpretive system that allows you to write very succinct type-safe code. There are a lot of features to this language that mean it can appear quite different to the JavaScript developers are used to writing.

Neither tool is perfect: each of these languages still needs to be compiled to the kind of JavaScript that runs in browsers. Developers need to also adopt strategies to ensure that compiled code still coerces values correctly by writing functions that check types where it could be of an unexpected type, for example data being requested from a 3rd party via an API.

## **Situation:** When things aren't working as expected

The development team stand back proudly, showing you the work they've done over the last three months. Their pride quickly melts into dismay as the stakeholders say, "It wasn't supposed to work like that...!" Suddenly, the team has some costly refactoring work to do.

Assumptions are a development project's worst enemy. The more assumptions we make about how something is meant to work, the more risk we are creating. The best way to avoid assumptions is by investing time in gathering requirements and writing up clear documentation before any development work starts. If the documentation is loose, unclear or even non-existent, there will be a higher chance of something not working as expected.

> "“Hell is other people’s undocumented assumptions.” — Nicole Fenton

### Project Management Tools

Project management tools such as **Trello**, **JIRA**, **Monday** and others can be set up so that requirements can be clearly documented before project work can begin, and work can be broken down into manageable chunks. Some things that should be included in the documentation should include:

- Feature requirements
- Scope (what it should _not_ include)
- UI Mockups
- Testing approach

Documenting the features as a team can be instrumental in reducing undocumented assumptions, allowing the developer to write code relevant to solving the task in scope.

For more information on this strategy, see the box "Documenting Features" below.

---

## **Supplementary info:** Documenting Features

If you are able to find an issue early in the process then it costs far less time to fix than if you found it later on. For this reason, good documentation is key to having production ready code.

Documenting a feature should include acceptance criteria, which forms the basis for integration or E2E tests, and can be written in the form of given - when - then statements, for example:

**Given** I am using the website  
**When** I visit the signup page  
**Then** I can create an account

Here's another:

**Given** I am using the website  
**When** I visit the signup page and have forgotten my password  
**Then** I can reset my password

The first part of the statement, _Given_, may sound a bit redundant at first, and it could be tempting to miss it out altogether. But it really helps to frame the feature and can become very useful as a reference point further on in the process.

If the E2E tests fail against these acceptance criteria, the feature can be fixed or rethought.

---

### Unit tests

Unit tests using a testing library (such as **Jest**, **Mocha**, **Chai**, **Jasmine** or perhaps something else) are the foundation of developers being able to ensure things are working as they should. How you adopt this approach can vary, but production-ready code means there are at least tests for each possible outcome of the component.

TDD, or test-driven development, means that a developer will write tests _before_ they write the component they are building. This helps with conceptual thinking because the developer can have each outcome clearly in mind before they start writing code. This often results in less code refactors, and more optimal code that doesn't have as much legacy or unnecessary lines.

For TDD to be effective, the component to be built needs to be planned carefully first.

## **Situation:** When your users do something you didn't expect

The phrase "expect the unexpected" is most apt when used in connection with software and those who use it! Quite often, people using your software will be able to use things in a way you didn't anticipate. The best way to avoid this is to invite people to use the software before it's released to everyone.

### Quality Assurance testing

QA Engineers can be viewed as the secret superpower of a development team. It's surprising how many times a good QA Engineer has saved a developer from themselves, or saved the development team from its own assumptions ... or even saved an entire business from its own good intentions. An on-hand QA Engineer is invaluable to a development team, but there are organisations you can contract who will run through your app and uncover issues you would never have been able to think up.

Two of those companies are **Global App Testing** and **User Testing**. Both only have subscription plans. There might be others who can offer a one-off test of your app on a single payment basis.

### User acceptance testing

Some companies have a "UAT" environment that serves as a staging ground for code that is a candidate for release to the production site. They can then use that environment to organise a group of people to come in from the public to give their opinions on a feature to be released. This gives some qualitative assurance that the feature works and is going to benefit the intended audience. There are a number of companies who organise the individuals to come and test the software, which would involve a fee for their time.

To be safest, it's best that everything in the stack - the database, the external functions, the frontend, the authentication server, is duplicated for UAT. That way, the complete user journey can be tested in isolation from production. The result is that any errors in the code won't accidentally knock out a production service. UAT should be a safer environment for developers to take necessary risks.

### Multivariate, or A/B, Testing

As well as qualitative testing (validating by quality), quantitative testing (validating by quantity) is also a good way of decreasing risk that a new feature could be causing a problem. Once **Google Optimize**, **Optimizely** or a similar tool are integrated with your site, you can release a new feature to a segment of your potential customers for a set period of time.

Once there has been a significant enough amount of traffic, you can analyse the results and check if conversions are increasing, decreasing, or have stopped altogether, and if the results aren't positive, you can turn it off so that no further losses occur.

### User behaviour monitoring

Getting an insight into user behaviour is invaluable to any experience. Tools like **Hotjar**, **sessioncam**, **CrazyEgg** and others record where the user clicks, and what journey they took through your site, which is particularly useful when introducing new user flows or features. However, these tools have a performance cost, and in my view shouldn't be left on indefinitely.

Analytics tools such as **Fathom**, **Google Analytics** and others can also be a good source of insight into what could be breaking user flow. Some can even be set up to report activity you want to be monitored, for example if the number of 404 or 500 errors increases above a certain amount in a day or hour.

## **Situation:** When components clash

The components we build for our websites might be perfectly built in themselves ... but what happens when we mix them with other components? This can often cause unexpected side effects that can crash your site or result in other issues or errors.

For this reason, it's best to check beforehand how they integrate with other components, and whether your visitors can actually complete the tasks you want them to.

### Integration testing

Often written in the same way as unit tests (see above), integration tests can be written for several components that are known to be used together, for example: input fields and a submit button.

### End-to-end testing

Tools like **Selenium** (which is cross-platform) and **Cypress** (JavaScript) can test a user flow from beginning to end (hence the name). This type of tool is critical to ensuring users can complete their journey from first visiting a site, to checking out and paying for a product, or any other journey you might want someone to take.

End-to-end tests can often be written by the developers but the journey, and each possible outcome, need to be planned by the development team.

## **Situation:** When you need to roll back quickly

Exceptions in an application that are not caused by malicious intent or load are often caused by new releases. Debugging in production isn't something you ever want to do, so once the cause has been identified it's wise to roll back to the previous release. Then the development team can continue to work on a fix without impeding the business.

Tools that store each built version of an application, such as **JFrog's Artifactory**, can ensure that the time to rollback is kept to the absolute minimum. When this has been configured, you don't need to rebuild the version you're rolling back to, which could take from several minutes to potentially hours.

## **Situation:** When you need to understand what the problem is

The development team won't be able to fix the issue unless they clearly understand the problem ... that's why it's important to implement different types of monitoring, both on the app, and separately too.

### Application Reporting

Logging errors to the browser console is the most basic kind of application reporting, but that limits debugging to only the issue that occur on one person's machine ... what if you want to see what happened on someone else's?

Tools such as **Sentry**, **LogRocket**, **BugSnag** and a plethora of others, allow you to send errors to their platform, and from there to Slack, Email or to a telephone system.

This way, whenever there is a serious error in production, the appropriate people can be notified immediately.

However, some issues are not immediately obvious and require more monitoring over longer time periods.

### Application Monitoring

Tools like **Splunk**, **DataDog**, **Honeycomb** or **AWS X-Ray** allow you to log other useful data so that you can closely monitor the activity of your application or distributed systems.

A word of caution: it's important to be careful that no personal data is being logged without users being informed and consent obtained.

Knowing what needs to be logged and what doesn't takes time to discover: be prepared to keep adapting your strategy until you log useful data ... and _only_ the useful data!

### Health reporting

Of course, if your site is throwing a server error (HTTP 500 code), no amount of in-app logging is going to inform you of that: your web app is down! For that reason, external services can help monitor the health of your app, and inform you when something happens.

One of the most basic of these is Uptime Monitor, which pings a site at regular intervals. There are more sophisticated tools like **AWS Cloudwatch**, **Pingdom**, **Retrace** and others which allow you to analyse your site in real time and send out alerts to your team.

Some also take the view that automated QA tests should run in production too, so that you can fully grasp the state of the production app. This is really helpful especially if you can't replicate your testing environment identically like your production environment. But we need to be careful: if we have a monolithic app, the extra load created by the automated tests could cause crashes at peak times. If it's a serverless app, you could find you've incurred extra costs for runtime.

## **Situation:** When you're under attack

This kind of issue is out of scope for this article, but I feel it's worth mentioning a valuable resource that has become _the_ go-to handbook for modern DevOps teams, and is highly valued for its insights into the way Google manages applications at vast scale: the **Site Reliability Handbook**, published by O'Reilly Media. It's available to read online here: https://landing.google.com/sre/sre-book/toc/index.html

## **Supplementary info:** How to Manage Incidents

Despite everyone's best efforts, failures in production will occur. There are strategies and tools to help reduce the downtime and get your services back up and running more quickly:

### **Step 1.** Define a severity level

When an incident occurs, it's everyone's first priority to get things working again. However, defining different levels of severity helps everyone understand the impact it's having on customers and the organisation: some incidents will naturally have higher impact than others; some will have no immediate impact but could still require an incident level response.

### **Step 2.** Delegate and manage communication

Having a dedicated incident management team is invaluable when there are issues in production. Otherwise, someone should be assigned to keep stakeholders and other interested parties up to date with what's happening. Splitting this responsibility away frees the developers to focus on fixing the problem and informs other developers who are not involved to stop them from jumping in with well-meaning patches — patches that could make the situation worse.

### **Step 3.** Arrange post mortem meetings

Once a situation has been resolved, post mortem meetings can be very helpful to identify what the problem was and put things in place to avoid a similar issue from arising again. Such meetings aren't focused on blame; rather they should be about understanding the problem and how to avoid it happening in future.

## **Supplementary info:** A word about code reviews

One of the best ways of catching a range of potential issues early on in the development process is by the use of effective code reviews. Having two or more developers that are familiar with a codebase and that use it regularly review each other's code means it's going to reflect a more well-thought out and well-structured project. Good code reviews can also point out flaws in logic and gaps in tests that might easily slip through without notice if there was just one developer looking after a project.

## Conclusion

The web is still a new frontier, the boundaries of which we may never fully define. Its great strength is in diversity and potential to be used in a variety of ways: from just one individual to a small family unit; for a community or enterprise, to a tool for the betterment of humankind.

But with great power comes great responsibility. I hope some of the strategies we've looked at, and the tools to mitigate them, help your organisation to provide stable, predictable production-ready code in the face of ever-changing challenges of the expanding, mutating and growing world wide web.
