// Importerer ShoppingItem-komponenten for å vise individuelle varer
import ShoppingItem from "./ShoppingItem";

// Komponent som viser hele handlelisten
export default function ShoppingList({ items, onTogglePurchased, onUpdateQuantity }) {
  // Returnerer en uordnet liste med alle varene
  return (
    // Liste-container
    <ul>
      {/* Mapper over hver vare og lager en ShoppingItem-komponent */}
      {items.map(item => (
        <ShoppingItem
          key={item.id} // Unik nøkkel for Reacts rendering
          item={item} // Sender vareobjektet som prop
          onTogglePurchased={onTogglePurchased} // Funksjon for å veksle kjøpt-status
          onUpdateQuantity={onUpdateQuantity} // Funksjon for å oppdatere antall
        />
      ))}
    </ul>
  );
}
