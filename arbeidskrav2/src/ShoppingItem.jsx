// Komponent som viser en enkelt vare i handlelisten
export default function ShoppingItem({ item, onTogglePurchased, onUpdateQuantity }) {
  // Returnerer et listeelement med vareinformasjon og kontroller
  return (
    // Listeelement for varen
    <li>
      {/* Avkrysningsboks for å markere varen som kjøpt */}
      <input
        type="checkbox"
        checked={item.purchased} // Sjekket hvis varen er kjøpt
        onChange={() => onTogglePurchased(item.id)} // Kaller funksjon ved endring
      />

      {/* Viser varenavnet */}
      <span>{item.name}</span>

      {/* Input-felt for å endre antall */}
      <input
        type="number"
        min="1" // Minimumsverdi er 1
        value={item.quantity} // Viser nåværende antall
        onChange={e => onUpdateQuantity(item.id, Number(e.target.value))} // Oppdaterer antall ved endring
      />
    </li>
  );
}
