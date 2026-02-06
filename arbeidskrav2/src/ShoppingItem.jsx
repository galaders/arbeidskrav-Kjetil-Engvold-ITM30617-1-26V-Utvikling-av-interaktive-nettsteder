// ShoppingItem.jsx - Komponent for å vise en enkelt vare i handlelisten
export default function ShoppingItem({ item, onToggleBought, onUpdateQuantity }) {
  return (
    <li>
      <article>
        <label>
          <input
            type="checkbox" // Checkbox for å markere om varen er kjøpt eller ikke
            checked={item.bought} // Sjekk om varen er kjøpt
            onChange={() => onToggleBought(item.id)} // Kall funksjonen for å toggle kjøpt-status når checkboxen endres
          />
          {item.name}
        </label>

        <input
          type="number" // Input-felt for å oppdatere antall
          min="1" // Minimumsverdi for antall
          value={item.quantity} // Vis nåværende antall
          onChange={e => onUpdateQuantity(item.id, Number(e.target.value))} // Kall funksjonen for å oppdatere antall når input-feltet endres
        />
      </article>
    </li>
  );
}
