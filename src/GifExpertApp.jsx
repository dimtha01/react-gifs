import { useState } from "react";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories((category) => [...category, 'black Clover'])
  }


  return (
    <>
      <h1>GifEsperApp</h1>

      {/* Input */}
      <button onClick={onAddCategory}>agregar</button>
      {/* Listados de gif */}
      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>
        })}
      </ol>
      {/* git Item */}
    </>
  )
}
