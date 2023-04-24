import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Loading } from './context/isLoading'
import Base from './components/Flex/Base'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Loading>
      <Base children={<App />} />
    </Loading>
  </React.StrictMode>,
)
