import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemForm from "./componentes/ItemForm";
import "./styles.css";

const App = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/api/pais");
      setItems(response.data);
    } catch (error) {
      console.error("Error al obtener los items:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div>
      <h1>Lista de Items</h1>
      {/* Aquí podrías renderizar tus items */}
    </div>
  );
};

export default App;
