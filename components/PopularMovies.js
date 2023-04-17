import MovieCard from "./MovieCard"

const PopularMovies = ({ movies }) => {
  return (
      <div className="">
        <h3 className="text-2xl text-center font-semibold py-5">Populaire en ce moment :</h3>
        <div className="flex flex-wrap gap-10 justify-center pb-5">
            {movies.map(movie => <MovieCard movie = {movie} key = {movie.id} />)}
        </div>
    </div>
  )
}

export default PopularMovies