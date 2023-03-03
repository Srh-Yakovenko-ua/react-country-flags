import React from 'react'

import * as ReactDOMClient from 'react-dom/client'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'

import './index.css'
import App from './App'
import { store } from './store'

const rootElement = document.getElementById('root') as HTMLDivElement
const root = ReactDOMClient.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
)
