---
title: "How to resolve Jest issues: tests passing, but code coverage fails!"
date: "2021-08-02T15:21:21+01:00"
description: "Today I'm continuing with my trend of making silly mistakes so you don't have to. The subject today is asynchronous tests in Jest. I've spent too much time on this one, and I don't want you to have the same trouble!"
categories:
- development
tags:
- javascript
- jest
- react testing library
---

Today I'm continuing with my trend of making silly mistakes so you don't have to.

The subject today is asynchronous tests in Jest. I've spent waay too much time on this one, and I don't want you to have the same trouble.

I'm testing whether a page renders or not. The page takes some time to contact an API and therefore to render, so I've used the `waitFor` helper in Jest to assert what should happen.

As I've mentioned the test setup is slightly immaterial, however I'm writing this rather quickly before the kids get hungry.

Here's the test using `waitFor`:

```javascript
it("renders the page", () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <IndexPage />
      </MockedProvider>
    </ThemeProvider>
  );

  waitFor(() => {
    expect(screen.getByText(/messages/i)).toBeInTheDocument();
  });
});
```

Anything wrong with this test? No?

Look again. The documentation in fact plainly says this at the top of the page:

> The async methods return Promises, so be sure to use await or .then when calling them.

Source: https://testing-library.com/docs/dom-testing-library/api-async/

What this doesn't do is show up in your tests. It'll look like they've passed!

The only reason I came across it was because when I use `--codeCoverage` to make sure I've covered all of my code with tests, it shows up as uncovered lines. But also, you'll notice there is an obscure message in the terminal about this too:

> `ReferenceError: You are trying to access a property or method of the Jest environment after it has been torn down.`

Basically the assertion cannot be verified because it's no longer there, the `render` phase has passed. Although why this results in passing tests is anybody's guess. (Please let me know in the comments if you know!).

Here's an example of a working test:

```javascript
it("renders the page", async () => {
  render(
    <ThemeProvider theme={defaultTheme}>
      <MockedProvider mocks={mocks} addTypename={false}>
        <IndexPage />
      </MockedProvider>
    </ThemeProvider>
  );

  await waitFor(() => {
    expect(screen.getByText(/messages/i)).toBeInTheDocument();
  });
});
```

There you go, I've wasted hours of my precious life so you (hopefully!) don't have to!
