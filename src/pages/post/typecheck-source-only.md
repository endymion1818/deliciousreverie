---
categories:
- development
date: "2020-03-31T14:21:21+01:00"
description: "Typecheck should only run against the code you write for your project, but I found it's not that obvious to configure that..."
draft: false
tags:
- javascript
- typescript
title: 'How to scope Typecheck to your project folder'
---
I configured a command so that I can run a type check on my project, but the results always include stuff in the `node_modules` folder. It took me a lot of investigation and asking around before I figured out how to scope tsc to only the **./src/** folder?

in package.json:

```
"scripts: {
  "typecheck": "tsc --noEmit"
}
```

With this configuration, he compiler should pick up config from tsconfig.json, which looks like this:

```
{
  "compilerOptions": {
  ...
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "**/*.test.*"]
```

But I still get results from **node_modules** when I run the command. It took me ages to figure it out, but for anyone else coming across this one, I managed to find that submitting an empty array to types did it:

```
"compilerOptions": {
    "types": []
}
```
You should now be able to run `yarn typecheck` and see results that don't include everybody elses code!