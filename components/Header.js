import Link from "next/link"

function Header() {
  return (
    <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link href="/" className="flex items-center">
                <img src="https://img.icons8.com/external-smashingstocks-flat-smashing-stocks/512/external-Cinema-love-and-marriage-smashingstocks-flat-smashing-stocks.png" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">OnMateQuoi ?</span>
            </Link>
        </div>
    </nav>
  )
}

export default Header