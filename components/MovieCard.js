import Link from "next/link"

const MovieCard = ({ movie }) => {
  return (
    <Link href={`/movie/${movie.id}`}>
        <div className="w-64 bg-white rounded-lg shadow dark:bg-gray-800">
                <img className="rounded-t-lg" src={"https://image.tmdb.org/t/p/original/" + movie.poster_path} alt="" />
            <div className="p-2">
                <h5 className="mb-2 text-lg text-center tracking-tight text-gray-900 dark:text-white font-semibold">{movie.title}</h5>
            </div>
        </div>  
    </Link>
  )
}

export default MovieCard;