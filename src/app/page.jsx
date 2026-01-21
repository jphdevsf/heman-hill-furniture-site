import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import GalleryServer from "./components/Gallery/GalleryServer"
import Header from "./components/Header"
import Hero from "./components/Hero"

const HomePage = () => {
  return (
    <div className="bg-black block m-auto">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <GalleryServer />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
