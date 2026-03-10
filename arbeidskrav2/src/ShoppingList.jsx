import ShoppingItem from "./ShoppingItem";

export default function ShoppingList({ items, onTogglePurchased, onUpdateQuantity }) {
  return (
    <ul>
      {items.map(item => (
        <ShoppingItem
          key={item.id}
          item={item}
          onTogglePurchased={onTogglePurchased}
          onUpdateQuantity={onUpdateQuantity}
        />
      ))}
    </ul>
  );
}
