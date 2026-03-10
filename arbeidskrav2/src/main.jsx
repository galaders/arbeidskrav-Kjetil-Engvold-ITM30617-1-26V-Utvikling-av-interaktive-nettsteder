// Lenke til AI-chaten som er brukt for arbeidskravet
// https://copilot.microsoft.com/shares/MiE9aGEYrcZyD1cYeSL88
// Gjorde dette fort igjen med AI siden jeg gjorde det første gang med AI og må fokusere
// på arbeidskrav 3 med API siden den er vanskelig. Tar nok denne oppgaven igjen i påskeferien
// for å lære den ordentlig uten AI

// Importerer StrictMode fra React for å hjelpe med å finne potensielle problemer i utvikling
import { StrictMode } from 'react';
// Importerer createRoot fra react-dom/client for å rendre React-appen
import { createRoot } from 'react-dom/client';
// Importerer global CSS-styling
import './index.css';
// Importerer hovedkomponenten App
import App from './App.jsx';

// Finner HTML-elementet med id 'root' og renderer React-appen der
createRoot(document.getElementById('root')).render(
  // StrictMode hjelper med å identifisere sideeffekter og deprecated API-er
  <StrictMode>
    {/* Renderer hovedkomponenten App */}
    <App />
  </StrictMode>,
);
