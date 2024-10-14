import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemForm from "./componentes/ItemForm";
import "./styles.css";

const App = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/pais"); // Cambia aquí para usar query
      if (!response.ok) {
        throw new Error("Error al obtener los ítems");
      }
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error("Error al obtener los items:", error);
    } finally {
      setLoading(false);
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
      <ItemForm fetchItems={fetchItems} /> {/* Renderiza el componente aquí */}
      {/* Renderiza la lista de ítems */}
      {items ? <ul>
        {items.map((item, index) => (
          <li key={index}>{item.Nombre}</li> // Asegúrate de que `item.name` sea la propiedad correcta
        ))}
      </ul> : <>cargando...</>}
      
    </div>
  );
}
export default App;
