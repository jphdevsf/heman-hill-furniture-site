import Gallery from './components/Gallery';
import Header from './components/Header';

const HomePage = () => {
  return (
    <>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Header />
        <Gallery />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm text-gray-500">© 2025 Heman-Hill Furniture</p>
      </footer>
    </>
  );
};

export default HomePage;