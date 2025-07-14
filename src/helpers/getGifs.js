export const getGifs = async ( category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=rQF7NH9RXbejOqOx3GpXfwp9TVaohgqK&q=${category}&limit=10`
  const resp = await fetch(url);
  const { data } = await resp.json()
  // console.log(data)
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium
  }))
  console.log(gifs)

}