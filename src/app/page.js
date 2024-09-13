export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <header className="py-6 bg-gray-800 text-white text-center">
        <h1 className="text-3xl font-semibold">Rising IT Solutions</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-1 p-8 sm:p-16">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <div className="mb-4">
            <h2 className="text-4xl font-bold text-red-600 mb-2">🚧 Under Maintenance 🚧</h2>
            <p className="text-lg mb-6 text-gray-700">
              Our website is currently undergoing scheduled maintenance. We are working hard to bring you an improved experience. Please check back later.
            </p>
            <div className="flex justify-center gap-8 mb-6">
              <div className="flex flex-col items-center">
                <div className="text-blue-500 text-6xl mb-2">
                  <i className="fas fa-tools"></i>
                </div>
                <span className="text-sm">Upgrades</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-green-500 text-6xl mb-2">
                  <i className="fas fa-clock"></i>
                </div>
                <span className="text-sm">Be Right Back</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-yellow-500 text-6xl mb-2">
                  <i className="fas fa-exclamation-triangle"></i>
                </div>
                <span className="text-sm">Sorry for the Inconvenience</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="py-6 bg-gray-800 text-white text-center">
        <p className="text-sm">
          For immediate assistance, feel free to{' '}
          <a href="mailto:risingitsolutions1@gmail.com" className="text-blue-400 hover:underline">
            email us
          </a>.
        </p>
      </footer>
    </div>
  );
}
