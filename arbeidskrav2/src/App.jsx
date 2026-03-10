import { useState } from "react";
import AddForm from "./AddForm";
import ShoppingList from "./ShoppingList";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, name: "Melk", quantity: 2, purchased: false },
    { id: 2, name: "Egg", quantity: 1, purchased: true }
  ]);

  function addItem(name, quantity) {
    const newItem = {
      id: Date.now(),
      name,
      quantity: Number(quantity),
      purchased: false
    };
    setItems([newItem, ...items]);
  }

  function togglePurchased(id) {
    setItems(items.map(item =>
      item.id === id ? { ...item, purchased: !item.purchased } : item
    ));
  }

  function updateQuantity(id, newQty) {
    if (newQty > 0) {
      setItems(items.map(item =>
        item.id === id ? { ...item, quantity: newQty } : item
      ));
    }
  }

  return (
    <main>
      <h1>Handleliste</h1>
      <AddForm onAddItem={addItem} />
      <ShoppingList
        items={items}
        onTogglePurchased={togglePurchased}
        onUpdateQuantity={updateQuantity}
      />
    </main>
  );
}
