---
title: "Automated accessibility testing is great, but ..."
date: "2021-01-20T15:21:21+01:00"
description: "We recently had a situation using jest-axe in tests, where the landmarks feature wasn't work as expected. This helped me verify why we shouldn't rely solely on automated tools, never mind how good they are."
draft: false
categories:
  - development
tags:
  - javascript
  - testing
  - accessibility
---

**We recently had a situation using jest-axe in tests, where the landmarks feature wasn't work as expected. This helped me verify why we shouldn't rely solely on automated tools, never mind how good they are.**

In unit tests for our [react component library](https://github.com/zopaUK/react-components) at Zopa, we have utilised [jest-axe](https://github.com/nickcolley/jest-axe) to test whether our components adhere to a number of accessibility rules.

The funny thing was, when we adhered to the rules (specifically the way components either use semantic HTML or aria roles), further testing in [Google's Lighthouse tool](https://developers.google.com/web/tools/lighthouse/) revealed that there were accessibility issues with our components:

**_Some ARIA child roles must be contained by specific parent roles to properly perform their intended accessibility functions._**

The trouble is that our library contains a lot of components that do not require the use of landmarks. We build our UI pages up from these component pieces, and would utilise landmarks _on the page_ typically.

This rule was forcing our developers to add aria `role`s where they weren't needed.

Thankfully, [You can disable this rule](https://github.com/nickcolley/jest-axe/issues/92). However, this means that there are far less checks for semantic HTML in our codebase.

I don't think this kind of issue is something that's easily solved by the axe team. It does highlight the flaws in tools like jest-axe: we can't rely solely on them. In fact, right on the Github repo the team identify clearly (in large writing!) that " This project does not guarantee what you build is accessible", and that "The GDS Accessibility team found that only ~30% of issues are found by automated testing."

We ultimately decided that ~30% is better than nothing. And `<div>` soup, whilst undesirable, is better than using `role`s where they're misleading. So we disabled this rule and we're going to continue to use jest-axe in our project.

## Other ways forward

To try to keep our focus on giving all of our users the best experience possible, we have recently created the role of "feature champions" among the frontend community.

These individuals take on a subject that they are passionate about, such as TypeScript, unit testing and, yes, accessibility too, and will occasionally give a quick eye to projects to kindly advise whether we are following best practices.

So much more is needed. Each of us needs to continue to develop empathy for our customers and visitors. And we need to avoid trusting the tools we use for accessibility: they don't always get everything right.
