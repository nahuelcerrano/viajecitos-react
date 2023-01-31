import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ViajecitosApp } from './ViajecitosApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ViajecitosApp />
    </BrowserRouter>
  </React.StrictMode>,
)
