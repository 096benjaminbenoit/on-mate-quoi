import Hero from '@/components/Hero'
import PopularMovies from '@/components/PopularMovies'
import { server } from '@/config'
import axios from 'axios'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ movies }) {
  console.log(movies)
  return (
    <main>
      <Hero />
      <PopularMovies movies = {movies.results} />
    </main>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${server}/popular?api_key=${process.env.API_KEY}&language=fr-FR&page=1`)
  const movies = await res.json()

  return {
    props: {movies}
  }
}
