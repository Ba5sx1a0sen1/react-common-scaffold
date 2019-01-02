import React, { Component } from 'react'
import MyInput from "@/components/MyInput"
import style from "./index.less"

export default class DemoPage extends Component {
  render() {
    return (
      <div className={style.bg}>
        <MyInput value='default'/>
      </div>
    )
  }
}
