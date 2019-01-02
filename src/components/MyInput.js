import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MyInput extends Component {
  // static propTypes = {
  //   value: PropTypes.string
  // }

  constructor(){
    super()
    this.state={

    }
  }
  handle=()=>{

  }
  render() {
    const { value } = this.props

    return (
      <div>
        <input value={value} type="text" name="input" id="input"/>
      </div>
    )
  }
}
