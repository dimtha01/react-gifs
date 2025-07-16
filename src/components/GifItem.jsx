export const GifItem = ({ id, title, url }) => {
  console.log(title, url);

  return (
    <>
      <div className="card">
        <img src={url.url} alt={title} height={300} />
        <p >{title}</p>
      </div>

    </>
  )
}
