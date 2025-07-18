import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('One Punch');
  const onInputChange = (event) => {
    // console.log(event.target.value)
    setInputValue(event.target.value)
  }
  const onSubmit = (event) => {

    event.preventDefault()
    const newInputValue = inputValue.trim();

    if (newInputValue.length <= 1) return

    // console.log(inputValue);

    onNewCategory(newInputValue)

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
