import React from 'react'
import { useState } from 'react';

export default function Inicio(dato) {
  
  let msg=()=>{
    alert("HOLA");
  }

  return (
    <>
        <input type="button" id="" onClick={()=>{msg()}} value="Nosotros" />
        <input type="button" id="" value="Inicio" />
        <input variant="Success" type="button" id="" value={dato.dato} />
    </>
  )
}