const Footer = () => {
  const currentYear = new Date().getFullYear() // Static calculation
  return (
    <footer className="bg-black border-t-2 border-t-warmGray-1000 row-start-3 flex gap-6 flex-wrap items-center justify-center mt-16 md:mt-16">
      <p className="text-sm text-white my-3 font-light">© {currentYear} HemanHill.</p>
    </footer>
  )
}

export default Footer
