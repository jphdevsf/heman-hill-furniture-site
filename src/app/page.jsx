import About from "./components/About"
import BackToTop from "./components/BackToTop"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import Header from "./components/Header"
import Hero from "./components/Hero"
export const revalidate = 3600

const HomePage = () => {
  return (
    <div className="bg-black block m-auto">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <Gallery />
        <About />
        <Contact />
        <BackToTop />
      </main>
      <Footer />
    </div>
  )
}

export default HomePage
