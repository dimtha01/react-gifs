import { useState } from "react";

export const GifExpertApp = () => {
  
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  console.log(categories);

  return (
    <>
      <h1>GifEsperApp</h1>

      {/* Input */}

      {/* Listados de gif */}
      <ol>
        {categories.map((categorie, index) => {
          return <li key={index}>{categorie}</li>
        })}
      </ol>
      {/* git Item */}
    </>
  )
}
