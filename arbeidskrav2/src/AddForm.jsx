// Importerer useState hook fra React for å håndtere komponentens tilstand
import { useState } from "react";

// Komponent for å legge til nye varer i handlelisten
export default function AddForm({ onAddItem }) {
  // Tilstand for varenavn, antall og feilmelding
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  // Funksjon som håndterer innsending av skjemaet
  function handleSubmit(e) {
    // Forhindrer standard oppførsel for skjema (sideoppdatering)
    e.preventDefault();

    // Validering: Sjekker om både navn og antall mangler
    if (!name && !quantity) {
      setError("Du må fylle ut både vare og antall.");
      return;
    }
    // Validering: Sjekker om navn mangler
    if (!name) {
      setError("Du må skrive inn et varenavn.");
      return;
    }
    // Validering: Sjekker om antall mangler
    if (!quantity) {
      setError("Du må skrive inn et antall.");
      return;
    }

    // Kaller funksjonen fra parent-komponenten for å legge til varen
    onAddItem(name, quantity);
    // Nullstiller input-feltene etter vellykket tillegg
    setName("");
    setQuantity("");
    setError("");
  }

  // Returnerer JSX for skjemaet
  return (
    // Wrapper-seksjon for hele komponenten
    <section>
      {/* Skjema som kaller handleSubmit ved innsending */}
      <form onSubmit={handleSubmit}>
        {/* Label og input for varenavn */}
        <label>
          Vare
          <input
            type="text"
            value={name}
            // Oppdaterer name-tilstanden når brukeren skriver
            onChange={e => setName(e.target.value)}
          />
        </label>

        {/* Label og input for antall */}
        <label>
          Antall
          <input
            type="number"
            min="1"
            value={quantity}
            // Oppdaterer quantity-tilstanden når brukeren skriver
            onChange={e => setQuantity(e.target.value)}
          />
        </label>

        {/* Knapp for å sende inn skjemaet */}
        <button type="submit">Legg til vare</button>

        {/* Viser feilmelding hvis det finnes en */}
        {error && <p role="alert">{error}</p>}
      </form>
    </section>
  );
}
