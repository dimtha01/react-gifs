import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GitGrid } from "./components/GitGrid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  const onAddCategory = (onNewCategory) => {
    if (categories.includes(onNewCategory)) return console.warn(`Warn: La categoria ${onNewCategory} ya existe`);
    setCategories((category) => [...category, onNewCategory])
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
