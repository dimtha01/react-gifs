import { useState } from "react";

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState('One Punch');
  const onInputChange = (event) => {
    console.log(event.target.value)
    setInputValue(event.target.value)
  }
  const onSubmit = (event) => {
    
    event.preventDefault()

    if (inputValue.trim().length <= 1) return

    console.log(inputValue);

    setCategories((category => [...category, inputValue]))

    setInputValue('')
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Buscar gifs"
          value={inputValue}
          onChange={onInputChange}
        />

      </form>
    </>
  )
}
