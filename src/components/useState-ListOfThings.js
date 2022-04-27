import React, { useState } from "react";

function ListOfThings() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");

  const addItem = event => {
    event.preventDefault();
    setItems ([
      ...items, //kl ga pake titik, isi arraynya ngulang dari awal
      {
        id: items.length,
        name: itemName
      }
    ]);
    setItemName("");
  };

  return (
    <>
      <p>Enter Item</p>
      <form onSubmit={addItem}>
        <label>
          <input
            name="item"
            type="text"
            value={itemName}
            onChange={e => setItemName(e.target.value)}
          />
        </label>
      </form>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  );
}

export default ListOfThings;