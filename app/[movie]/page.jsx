export default async function MovieDetail({params: {movie}}) {
    console.log(movie)
    const imagePath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const response = await data.json()
    console.log(response)


    return (
        <div>
        <h1>{response.original_title}</h1>
        <p>{response.overview}</p>
    </div>
    )
   
}