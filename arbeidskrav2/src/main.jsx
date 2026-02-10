// link til ai chaten som er brukt for arbeidskravet
// https://copilot.microsoft.com/shares/FU51dYRx8umXQE9c6Q6Tf
//ble en del siden ikke helt satt foten in på import og alt slik og deling av koder på 
//forskelige sider må bli bedre på dette og øve på det



import { StrictMode } from 'react' // Importer StrictMode fra React
import { createRoot } from 'react-dom/client' // Importer createRoot fra react-dom/client
import './index.css' // Importer CSS for styling
import App from './App.jsx' // Importer hovedkomponenten App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
