// link til ai chaten som er brukt for arbeidskravet
// https://copilot.microsoft.com/conversations/join/kKmEZ8gFMq4NmDsAEyPF7
// ser ut som du må joine chatten for å se infon det står...

// Join 'React Handleliste-App Krav og Implementering'
// You're invited to join Galned Engvold in a group chat with Copilot.
// Copilot uses AI and can make mistakes. None of your personal 
// memory with Copilot will be shared in the group.

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
