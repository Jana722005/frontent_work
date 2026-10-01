import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Button from './Button.jsx'
import {UserName} from './UserName.jsx'
import {Card} from './Card.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <UserName/>
    <Card/>
    <Button text = "Register"/>
  </StrictMode>,
)
