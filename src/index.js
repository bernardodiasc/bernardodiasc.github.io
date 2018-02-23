import React from 'react'
import { hydrate, render } from 'react-dom'
import * as serviceWorker from 'config/registerServiceWorker'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Store } from 'store'

import App from 'screens/App'

const TheApp = () => (
  <Provider store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

const rootElement = document.getElementById('root')
if (rootElement.hasChildNodes()) {
  hydrate(<TheApp />, rootElement)
} else {
  render(<TheApp />, rootElement)
}

serviceWorker.unregister()
