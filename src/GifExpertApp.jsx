import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const onAddCategory = () => {
    setCategories((category) => [...category, 'black Clover'])
  }


  return (
    <>
      <h1>GifEsperApp</h1>

      {/* Input */}
      <AddCategory setCategories={setCategories} />
      {/* Listados de gif */}
      {/* <button onClick={onAddCategory}>agregar</button> */}
      <ol>
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>
        })}
      </ol>
      {/* git Item */}
    </>
  )
}
