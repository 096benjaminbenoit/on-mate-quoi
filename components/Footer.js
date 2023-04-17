import Link from "next/link"

function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-gray-900 bottom-0 w-screen">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023
            <Link href="https://benjamin-benoit.fr" target="blank" className="hover:underline">Benjamin Benoit</Link>
            </span>
        </div>
    </footer>
  )
}

export default Footer