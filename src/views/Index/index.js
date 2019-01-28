import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "@babel/polyfill"

import "@/styles/normalize.less"
import "@/styles/global.less"


ReactDOM.render(<App/>, document.getElementById('root'))

module.hot.accept();