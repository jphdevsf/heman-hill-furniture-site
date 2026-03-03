export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Access Denied Bud</h1>
        <p className="text-gray-400 mb-6">
          You don't have permission to access the admin upload page.
        </p>
        <a href="/" className="text-purple-500 hover:text-purple-400">
          Return to Home
        </a>
      </div>
    </div>
  )
}
