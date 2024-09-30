import React, { useState } from "react";
import axios from "axios";

const ItemForm = ({ fetchItems }) => {
  const [name, setName] = useState("");

  const addItem = async (e) => {
    e.preventDefault();
    if (!name) return;

    await axios.post("http://localhost:5000/api/items", { name });
    fetchItems();
    setName("");
  };

  return (
    <>
      <form onSubmit={addItem}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Agregar nuevo item"
        />
        <button type="submit">Agregar</button>
      </form>
    </>
  );
};

export default ItemForm;
