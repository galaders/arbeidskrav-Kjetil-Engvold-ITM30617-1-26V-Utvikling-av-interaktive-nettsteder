import { StrictMode } from 'react' // Importer StrictMode fra React
import { createRoot } from 'react-dom/client' // Importer createRoot fra react-dom/client
import './index.css' // Importer CSS for styling
import App from './App.jsx' // Importer hovedkomponenten App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
