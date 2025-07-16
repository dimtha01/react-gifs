import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const GitGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);

  }
  useEffect(() => {
    getImages();
    // getGifs(category).then(newImage => setImages(newImage))
  }, [])

  return (
    <>
      <h3>{category}</h3>

      {images.map((image) => (
        <li key={image.id}>{image.title}</li>
      ))}

    </>
  )
}
