import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Base from './components/Flex/Base'
import { Loading } from './context/isLoading'
import ThemeContextParent  from './context/ThemeParent'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextParent>
      <Loading>
        <Base children={<App />} />
      </Loading>
    </ThemeContextParent>
  </React.StrictMode>,
)
