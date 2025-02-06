import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const HomePage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-black block m-auto">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <Gallery />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;