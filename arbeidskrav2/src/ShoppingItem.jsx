export default function ShoppingItem({ item, onTogglePurchased, onUpdateQuantity }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.purchased}
        onChange={() => onTogglePurchased(item.id)}
      />

      <span>{item.name}</span>

      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={e => onUpdateQuantity(item.id, Number(e.target.value))}
      />
    </li>
  );
}
