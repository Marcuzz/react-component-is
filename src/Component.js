import React from 'react'
import PropTypes from 'prop-types'

/**
 * Usage:
 * <Component is={myComponent} />
 *
 * The `is` prop is required and can be any React elementType, including any regular HTML tag.
 * You can pass any other additional props and they will be passed through to the component you're referencing.
 *
 * Children can be passed as you'd expect as well.
 *
 * @param is
 * @param children
 * @param rest
 * @returns {React.DetailedReactHTMLElement<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>}
 * @constructor
 */
const Component = ({ is, children, ...rest }) => {
  return React.createElement(is, rest, children)
}

Component.propTypes = {
  is: PropTypes.oneOfType([PropTypes.elementType, PropTypes.string]).isRequired,
  children: PropTypes.element,
}

export default Component
