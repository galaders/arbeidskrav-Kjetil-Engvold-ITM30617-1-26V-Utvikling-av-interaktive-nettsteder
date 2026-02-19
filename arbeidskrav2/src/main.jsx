// link til ai chaten som er brukt for arbeidskravet
// https://copilot.microsoft.com/chats/J93Z4edXhD9LFkh2VH3Q6
// ser ut som du må joine chatten for å se infon det står...
// er ikke den chaten jeg brukte for oppgaven jeg jeg brukte ble borte men jeg spørte 
// det samme spørsmålet i en annen chat og velig lik svar vis ikke helt likt svar

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
