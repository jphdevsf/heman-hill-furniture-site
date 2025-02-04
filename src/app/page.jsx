import Gallery from './components/Gallery';
import Header from './components/Header';
import Hero from './components/Hero';
import Contact from './components/Contact';

const HomePage = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero />
        <Gallery />
        <Contact />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center mt-10">
        <p className="text-xs text-gray-500 my-5">© {currentYear} by HemanHill</p>
      </footer>
    </div>
  );
};

export default HomePage;