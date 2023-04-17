import { server } from '@/config'
import axios from 'axios'
import Link from 'next/link'

const Movie = ({ movie }) => {
    console.log(movie)
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]" aria-hidden="true">
            <defs>
                <pattern id="e813992c-7d03-4cc4-a2bd-151760b470a0" width="200" height="200" x="50%" y="-1" patternUnits="userSpaceOnUse">
                <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
            </defs>
            <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
                <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" stroke-width="0" />
            </svg>
            <rect width="100%" height="100%" stroke-width="0" fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
            </svg>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            <div className="lg:pr-4">
                <Link href="/" className='flex py-7'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span className='ps-2'>Retour à l&apos;accueil</span>
                </Link>
                <div className="lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-indigo-600">{movie.release_date}</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{movie.title}</h1>
                <p className="mt-6 text-xl leading-8 text-gray-700">{movie.overview}</p>
                <p className="text-base font-semibold leading-7 text-indigo-600 py-3">
                    <span className=''>{movie.genres.map(genre => genre.name).join(', ')}</span>
                </p>
                </div>
            </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
            <img className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]" src={"https://image.tmdb.org/t/p/original/" + movie.backdrop_path} alt="" />
            </div>
        </div>
    </div>

  )
}

export async function getStaticProps(context) {
    const { id } = context.params;
    const res = await axios(`${server}/${id}?api_key=${process.env.API_KEY}&language=fr-FR&page=1`)
    const movie = res.data
  
    return {
      props: {movie}
    }
}

export async function getStaticPaths() {
    const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=fr-FR&page=1`)
    const movies = res.data.results
    const ids = movies.map(movie => movie.id);
    const paths = ids.map(id => ({ params: {id: id.toString()} }))
 
    return {
      paths,
      fallback: false
    }
}

export default Movie