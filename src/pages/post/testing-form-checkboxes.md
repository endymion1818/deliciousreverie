---
categories:
- development
date: "2020-04-24T15:21:21+01:00"
description: "Having written the functionality for a series of checkboxes that also had a 'select all' option, I needed to validate what I'd done in a unit test. Here's how I did that."
draft: false
tags:
- javascript
- jest
- react
title: 'Testing a "select all" option on form checkboxes'
---
I learned a few tricks recently when I was writing a test for a series of checkboxes that also had a "select all" option, like this:

- [ ] Option 1
- [ ] Option 2
- [ ] Option 3
- [ ] Select All

Where ticking the fourth option would select all options in this list. Having written the functionality for this, I needed to validate what I'd done in a unit test for this component.

Let's walk through how this can be achieved.

First let's render the module:

```javascript
    const { container } = render(
      <CheckboxList defaultOptions={checkboxOptions} />
    )
```

Getting the last checkbox is the easiest part, using a `getByLabelText()` we can select the checkbox with the label "All", and use `fireEvent.click()` on the element to check the checkbox.

But what I didn't realise is that React testing library doesn't have great support for getting a range of items instead of just one. So I used regular javascript to get the rest of the checkboxes:

```
const allCheckboxes = container.getElementsByTagName('input')
```

This returns - not an `array` but a `NodeList` ... there's more information on what that is on the MDN page here: https://developer.mozilla.org/en-US/docs/Web/API/NodeList

NodeList isn't an array, but we can use `Array.from()` to, as it implies, make an array from an object that has an array-like structure. This has just became my new favourite function.

Now we can map over that like so:

```javascript
    fireEvent.click(allCheckbox)
    expect(
      Array.from(allCheckboxes)
        .map(checkbox => checkbox.checked)
        .indexOf(false) === -1
    ).toBe(true)
  })
```

If there's one checkbox that has `false` still, the `indexOf()` value will be `-1`, so we're testing all of the checkboxes are now set to `true`.

Lastly, we can verify the test is valid, an important step to make sure we're not getting any false positives, by changing `.toBe(true)` to `.toBe(false)`.

Here's the final code:

```javascript
import { render, getByLabelText, fireEvent } from '@testing-library/react'
import React from 'react'

import CheckboxList from './CheckboxList'

const checkboxOptions = [
  {
    name: 'option 1',
  },
  {
    name: 'option 2',
  },
  {
    name: 'option 3',
  },
]

describe('<CheckboxList />', () => {
  it('all checkboxes are selected when "all" checkbox is clicked', () => {
    const { container } = render(
      <CheckboxList defaultOptions={checkboxOptions} />
    )
    const allCheckbox = getByLabelText(container, 'All')
    const allCheckboxes = container.getElementsByTagName('input')

    fireEvent.click(allCheckbox)
    expect(
      Array.from(allCheckboxes)
        .map(checkbox => checkbox.checked)
        .indexOf(false) === -1
    ).toBe(true)
  })
})

```