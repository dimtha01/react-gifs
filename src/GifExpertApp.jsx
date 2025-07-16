import { useState } from "react";
import { AddCategory, GitGrid } from "./components";


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Piece']);

  const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return console.warn(`Warn: La categoria ${onNewCategory} ya existe`);
    setCategories((category) => [onNewCategory, ...category])
  }


  return (
    <>
      <h1>GifEsperApp</h1>

      <AddCategory onNewCategory={event => onAddCategory(event)} />

      {categories.map((category) => (
        <GitGrid key={category} category={category} />
      )
      )}
    </>
  )
}
