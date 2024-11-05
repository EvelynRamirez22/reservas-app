import React, { useState, useEffect } from 'react';

const Pais = () => {
  const [items, setItems] = useState([]);  // Estado para almacenar los ítems (países)
  const [loading, setLoading] = useState(true);  // Estado para saber si los datos están cargando

  // Función para obtener los ítems desde la API
  const fetchItems = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/pais"); // URL correcta de la API
      if (!response.ok) {
        throw new Error("Error al obtener los países");
      }
      const data = await response.json();
      setItems(data);  // Establece los países en el estado
    } catch (error) {
      console.error("Error al obtener los países:", error);
    } finally {
      setLoading(false);  // Cambia el estado de carga a false
    }
  };

  // Llamada a la API cuando el componente se monta
  useEffect(() => {
    fetchItems();
  }, []);  // Se ejecuta solo una vez al montar el componente

  return (
    <div>
      <h1>Lista de Países</h1>
      
      {/* Si `loading` es true, muestra el mensaje de carga */}
      {loading ? (
        <p>Cargando...</p>
      ) : (
        // Si `items` tiene datos, muestra la lista de países
        <ul>
          {items.length > 0 ? (
            items.map((item) => (
              <li key={item.id}>
                {item.nombre} {/* Asegúrate de que `item.nombre` es la propiedad correcta */}
              </li>
            ))
          ) : (
            <li>No se encontraron países.</li>  {/* Si no hay países, mostrar este mensaje */}
          )}
        </ul>
      )}
   </div>
  );
};

export default Pais;
