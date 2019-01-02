import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class MyInput extends Component {
  // static propTypes = {
  //   value: PropTypes.string
  // }

  constructor(props){
    super(props)
    this.state={
      input: this.props.value
    }
  }
  handle=(e)=>{
    this.setState({input: e.target.value})
  }
  render() {
    const { value } = this.props

    return (
      <div>
        <input onChange={this.handle} value={this.state.input} type="text" name="input" id="input"/>
        <p>
          {this.state.input}
        </p>
      </div>
    )
  }
}
