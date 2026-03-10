// Importerer useState hook fra React for å håndtere tilstand
import { useState } from "react";
// Importerer AddForm-komponenten for å legge til nye varer
import AddForm from "./AddForm";
// Importerer ShoppingList-komponenten for å vise handlelisten
import ShoppingList from "./ShoppingList";

// Hovedkomponenten for applikasjonen
export default function App() {
  // Tilstand for handleliste-elementene, starter med noen eksempelvarer
  const [items, setItems] = useState([
    { id: 1, name: "Melk", quantity: 2, purchased: false },
    { id: 2, name: "Egg", quantity: 1, purchased: true }
  ]);

  // Funksjon for å legge til en ny vare i listen
  function addItem(name, quantity) {
    // Oppretter et nytt vareobjekt med unik ID basert på nåværende tid
    const newItem = {
      id: Date.now(),
      name,
      quantity: Number(quantity), // Konverterer til tall
      purchased: false // Nye varer er ikke kjøpt ennå
    };
    // Legger til den nye varen først i listen
    setItems([newItem, ...items]);
  }

  // Funksjon for å veksle kjøpt-status for en vare
  function togglePurchased(id) {
    // Oppdaterer listen ved å mappe over hver vare
    setItems(items.map(item =>
      // Hvis ID-en matcher, veksler purchased-statusen
      item.id === id ? { ...item, purchased: !item.purchased } : item
    ));
  }

  // Funksjon for å oppdatere antall for en vare
  function updateQuantity(id, newQty) {
    // Sjekker at det nye antallet er større enn 0
    if (newQty > 0) {
      // Oppdaterer listen ved å mappe over hver vare
      setItems(items.map(item =>
        // Hvis ID-en matcher, oppdaterer quantity
        item.id === id ? { ...item, quantity: newQty } : item
      ));
    }
  }

  // Returnerer JSX for hele applikasjonen
  return (
    // Hovedcontainer for appen
    <main>
      {/* Tittel for handlelisten */}
      <h1>Handleliste</h1>
      {/* Skjema for å legge til nye varer */}
      <AddForm onAddItem={addItem} />
      {/* Liste over varer med muligheter for å endre status og antall */}
      <ShoppingList
        items={items}
        onTogglePurchased={togglePurchased}
        onUpdateQuantity={updateQuantity}
      />
    </main>
  );
}
