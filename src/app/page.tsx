'use client';
import { connect } from "@/libs/mongo";
import axios from "axios";

import { useState,useEffect } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  
  const incrementCounter = async () => {
    try {
      const response = await axios.post('/api/postear', { orden: 1 });
      
   
      // Incrementar el contador localmente después de que la solicitud POST se complete con éxito
      setCount(response.data.contador); 
    } catch (error) {
      console.error('Error al incrementar el contador:', error);
    }
    
  };
  useEffect(() => {
      fetch('/api/obtener')
      .then(res => res.json())
      .then(data => setCount(data.count));
  }, []);

  
  

  return (
    <main className="container mx-auto px-4">
  <div className="max-w-md mx-auto my-10 p-6 bg-violet-900 rounded-lg shadow-xl text-center">
    <h1 className="text-3xl font-bold mb-4">Contador: {count}</h1>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={incrementCounter}
    >
      Incrementar
    </button>
  </div>
</main>

  
  
  );
}
