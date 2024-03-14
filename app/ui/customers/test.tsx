import React from 'react'
import PropTypes from 'prop-types'

function Test(props: string[]) {
  return (
    <div>Test {props[0]}</div>
  )
}

Test.propTypes = {}

export default Test
