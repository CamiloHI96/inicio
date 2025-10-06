import React from 'react'
import { useState } from 'react';

export default function init() {

    const [nombre, setnombre] = useState ("Camilo")
    const [nombre2, setnombre2] = useState("");

    const datos = () => {
        setnombre(nombre2); // corregido: setnombre en lugar de setNombre
    };

  return (
    <>
      <h1>Cursito De Programación</h1>
      <h4>React + Vite</h4>
      <input type="text" className='form-control mt-4 mb-3' onChange={(e) => setnombre2(e.target.value)} value={nombre2} placeholder="Escribe tu nombre"/>
      <input type="button" className="btn btn-primary mb-4" onClick={datos} value="Agregar"/>
      <h4>{nombre}</h4>
    </>
  )
}