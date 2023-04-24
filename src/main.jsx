import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Base from './components/Flex/Base'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Base children={<App />} />
  </React.StrictMode>,
)
