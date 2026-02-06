import ShoppingItem from "./ShoppingItem"; // Importer ShoppingItem-komponenten for å vise hver vare i handlelisten

// Komponent for å vise handlelisten

export default function ShoppingList({ items, onToggleBought, onUpdateQuantity }) {
  return (
    <section>
      <ul>
        {items.map(item => (
          <ShoppingItem
            key={item.id}
            item={item}
            onToggleBought={onToggleBought}
            onUpdateQuantity={onUpdateQuantity}
          />
        ))}
      </ul>
    </section>
  );
}
