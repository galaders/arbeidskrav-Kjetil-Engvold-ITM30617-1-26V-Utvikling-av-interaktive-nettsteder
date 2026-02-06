import { useState } from "react"; // Importer useState fra React
import AddForm from "./AddForm.jsx"; // Importer komponenten for å legge til varer
import ShoppingList from "./ShoppingList.jsx"; // Importer komponenten for å vise handlelisten
import "./App.css"; // Importer CSS for styling
import "./style.css"; // Importer ekstra CSS for styling

// Hovedkomponent for appen

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "karbonadedeig", quantity: 2, bought: false }, // Eksempelvare i handlelisten
    { id: 2, name: "Eplejuice", quantity: 1, bought: true } // Eksempelvare i handlelisten
  ]);

// Funksjon for å legge til en ny vare i handlelisten
  function addItem(name, quantity) {
    const newItem = {
      id: Date.now(),
      name,
      quantity: Number(quantity),
      bought: false
    };
    setItems([newItem, ...items]);
  }

  // Funksjon for å toggle om en vare er kjøpt eller ikke
  function toggleBought(id) {
    setItems(items.map(item =>
      item.id === id ? { ...item, bought: !item.bought } : item
    ));
  }

  // Funksjon for å oppdatere antall for en vare
  function updateQuantity(id, newQty) {
    if (newQty < 1) return;
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQty } : item
    ));
  }

  // Render hovedkomponenten med header, AddForm og ShoppingList
  return (
    <main>
      <header>
        <h1>Handleliste</h1>
      </header>

      <AddForm onAddItem={addItem} />
      <ShoppingList
        items={items}
        onToggleBought={toggleBought}
        onUpdateQuantity={updateQuantity}
      />
    </main>
  );
}
