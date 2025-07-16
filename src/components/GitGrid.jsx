import { GifItem } from "./GifItem";
import { useFetchGits } from "../hook/useFetchGits";

export const GitGrid = ({ category }) => {
  const { images, isLoanding } = useFetchGits(category)

  return (
    <>
      <h3>{category}</h3>
      {isLoanding && (<h1>cargando...</h1>)}
      <div className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  )
}
