import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Toaster} from 'sonner'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster position="bottom-right"  richColors={true}/>
  </StrictMode>,
)
