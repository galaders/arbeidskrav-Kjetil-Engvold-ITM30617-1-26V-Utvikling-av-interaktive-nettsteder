import { useState } from "react";

export default function AddForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name && !quantity) {
      setError("Du må fylle ut både vare og antall.");
      return;
    }
    if (!name) {
      setError("Du må skrive inn et varenavn.");
      return;
    }
    if (!quantity) {
      setError("Du må skrive inn et antall.");
      return;
    }

    onAddItem(name, quantity);
    setName("");
    setQuantity("");
    setError("");
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          Vare
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>

        <label>
          Antall
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={e => setQuantity(e.target.value)}
          />
        </label>

        <button type="submit">Legg til vare</button>

        {error && <p role="alert">{error}</p>}
      </form>
    </section>
  );
}
