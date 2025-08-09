import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import InputBox from '../Component/InputBox.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <InputBox />
  </StrictMode>,
)
