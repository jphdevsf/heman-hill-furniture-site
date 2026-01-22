import Link from "next/link"
import Footer from "./components/Footer"
import Header from "./components/Header"

const NotFound = () => {
  return (
    <div className="bg-black h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col gap-8 items-center justify-center w-full">
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-gray-300 mb-8">Page Not Found</p>
          <Link
            href="/"
            className="text-white hover:cursor-pointer flex items-center bg-warmGray-1000 p-4"
          >
            BACK TO HOMEPAGE
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default NotFound
