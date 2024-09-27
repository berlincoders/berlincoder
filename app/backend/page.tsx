export default function Backend() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 text-lg">This is the about page of our website.</p>
      <div className="flex justify-center items-center space-x-10 mt-10">
        {/* NFLKL UI Block */}
        <div className="bg-yellow-200 border-2 border-yellow-400 w-48 h-32 flex justify-center items-center rounded-md">
          <div className="text-center">
            <h3 className="text-lg font-semibold">NFLKL UI</h3>
            <p>Frontend</p>
          </div>
        </div>

        {/* NFLKL API Block */}
        <div className="bg-blue-200 border-2 border-blue-400 w-48 h-32 flex justify-center items-center rounded-md relative">
          <div className="text-center">
            <h3 className="text-lg font-semibold">NFLKL API</h3>
            <p>Backend API</p>
          </div>

          {/* Arrow from UI to API */}
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2">
            <svg className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="black">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>

        {/* Y MongoDB Block */}
        <div className="bg-green-200 border-2 border-green-400 w-48 h-32 flex justify-center items-center rounded-md relative">
          <div className="text-center">
            <h3 className="text-lg font-semibold">Y MongoDB</h3>
            <p>Database</p>
          </div>

          {/* Arrow from API to DB */}
          <div className="absolute -left-20 top-1/2 transform -translate-y-1/2">
            <svg className="w-12 h-12" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="black">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}
