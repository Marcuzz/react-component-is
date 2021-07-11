# react-component-is

A React library that allows you to use Vue's Dynamic Component syntax (`<component v-is="myComponent">`) in React.

It's just a Vue friendly wrapper for `React.createElement()`.

## Usage

A plain usage of this library is something like:

```js
import React from 'react'
import Component from 'react-component-is'

export default function myAmazingComponent() {
  const clickable = false

  return <Component is={clickable ? 'button' : 'div'}>Lorem ipsum</Component>
}
```

You can of course bring your own components or pass your own props as well:

```js
import React from 'react'
import Component from 'react-component-is'
import MyCustomButton from './MyCustomButton'

export default function myAmazingComponent() {
  const clickable = false

  return (
    <Component is={clickable ? MyCustomButton : 'div'} large={true}>
      Lorem ipsum
    </Component>
  )
}
```
