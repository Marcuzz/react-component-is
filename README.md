# react-component-is

A React library that allows you to use a Vue-esque Dynamic Component syntax (`<component :is="myComponent">`) in React.

It's just a Vue friendly wrapper for `React.createElement()`. See the [alternatives](#alternatives) section for tips on
how to avoid using this library in its entirety.

## Installation

Yarn:

```
yarn add react-component-is
```

npm:

```
npm install --save react-component-is
```

## Usage

A simple usage of this library is something like the following:

```js
import React from 'react'
import Component from 'react-component-is'

export default function myAmazingComponent ({ clickable }) {
  return <Component is={clickable ? 'button' : 'div'}>Lorem ipsum</Component>
}
```

You can of course bring your own components or pass your own props as well:

```js
import React from 'react'
import Component from 'react-component-is'
import MyCustomButton from './MyCustomButton'

export default function myAmazingComponent ({ clickable }) {
  return (
    <Component is={clickable ? 'MyCustomButton' : 'div'} large={true}>
      Lorem ipsum
    </Component>
  )
}
```

## Why? This is so easy to do without a library!

Coming from a Vue background I struggled finding the equivalent in React. Hopefully the very existence of this library leads
someone else coming from Vue in the right direction. You can completely avoid using this library if you want to.
See [alternatives](#alternatives).

## Alternatives

As this library is just a simple wrapper for `createElement` you can of course just use React's
own [createElement](https://reactjs.org/docs/react-api.html#createelement) instead.

You can also simply define a variable like in the following example and eliminate the entire need for this library (
unless you prefer the `component is` syntax of course):

```js
import React from 'react'
import MyCustomButton from './MyCustomButton'

export default function myAmazingComponent ({ clickable }) {
  const MyComponent = clickable ? 'MyCustomButton' : 'div'

  return (
    <MyComponent large={true}>
      Lorem ipsum
    </MyComponent>
  )
}
```

How you want to create a dynamic component is completely up to you and this library's purpose is simply to guide you in
the right direction.
