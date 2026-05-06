import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./assets/css/global.css"
import RouterConfig from './config/RouterConfig'
import { Toaster } from 'sonner'
import AuthProvider from './lib/types/provider/AuthProvider'
import { Provider } from 'react-redux'
import store from './lib/types/store/store'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Provider store={store}>
    <Toaster richColors closeButton  />
    <RouterConfig/>
    </Provider>
    </AuthProvider>
   
  </StrictMode>,
)
