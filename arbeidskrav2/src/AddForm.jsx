import { useState } from "react"; // Importer useState fra React

// Komponent for å legge til varer i handlelisten
export default function AddForm({ onAddItem }) {
  const [name, setName] = useState(""); // State for varenavn
  const [quantity, setQuantity] = useState(""); // State for antall
  const [error, setError] = useState(""); // State for feilmeldinger

  function handleSubmit(e) {
    e.preventDefault(); // Forhindre at siden oppdateres ved form submission

    if (!name && !quantity) {
      setError("Du må fylle ut både varenavn og antall."); // Sjekk om begge feltene er tomme
      return;
    }
    if (!name) {
      setError("Du må skrive inn et varenavn."); // Sjekk om varenavn er tomt
      return;
    }
    if (!quantity) {
      setError("Du må skrive inn et antall."); // Sjekk om antall er tomt
      return;
    }

    setError(""); // Tøm feilmeldingen hvis alt er gyldig
    onAddItem(name, quantity); // Kall funksjonen for å legge til varen i handlelisten
    setName(""); // Tøm input-feltet for varenavn
    setQuantity(""); // Tøm input-feltet for antall
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            Vare:
            <input
              type="text" // Input-felt for varenavn
              placeholder="legg til vare"
              value={name}
              onChange={e => setName(e.target.value)} // Oppdater state når brukeren skriver inn varenavn
            />
          </label>

          <label>
            Antall:
            <input
              type="number" // Input-felt for antall
              placeholder="legg til antall"
              min="1" // Minimumsverdi for antall
              value={quantity}
              onChange={e => setQuantity(e.target.value)} // Oppdater state når brukeren skriver inn antall
            />
          </label>

          <button type="submit">Legg til</button>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </fieldset>
      </form>
    </section>
  );
}
