import SimpleTextbox from "@/components/ui/SimpleTextbox";

export default function Backend() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black-100">
      <div className="max-w-7xl w-full">

        <p className="mt-4 text-lg">express: To create your API routes.</p>
        <p className="mt-4 text-lg">mongoose: To interact with MongoDB</p>
        <p className="mt-4 text-lg">bcryptjs: To hash passwords before storing them.</p>
        <p className="mt-4 text-lg">jsonwebtoken: To create authentication tokens.</p>

        {/* Reduced the space between blocks */}
        <div className="flex justify-center items-center space-x-4 mt-10 relative">

          {/* NFLKL UI Block */}
          <div className="border-2 border-yellow-400 w-40 h-60 flex justify-center items-center rounded-md relative">
            <div className="text-center">
              <h3 className="text-lg font-semibold">NFLKL UI</h3>
              <p>Frontend</p>
            </div>
          </div>
          <div>
          <div className="absolute flex flex-col ">
            <div className="flex items-center">
              <p className="text-white mr-2">Sign Up</p>
              <svg className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
            <div className="flex items-center">
              <p className="text-white mr-2">Log In</p>
              <svg className="w-6 h-6 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          </div>
          {/* Arrows with text from UI to API */}


          {/* API Block */}
          <div className="border-2 border-red-400 w-30 h-60 flex justify-center items-center rounded-md relative">
            <div className="text-center">
              <h3 className="text-lg font-semibold">API</h3>
            </div>
          </div>

          {/* Express Block */}
          <div className="border-2 border-blue-400 w-40 h-60 flex justify-center items-center rounded-md relative">
            <div className="text-center">
              <h3 className="text-lg font-semibold">express</h3>
              <img src="/express-js.png" alt="Express Logo" className="w-12 h-12 mx-auto mt-2" />
            </div>
          </div>

          {/* Arrow between Express and MongoDB */}
          <div>
            <svg className="w-8 h-8 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* MongoDB Block */}
          <div className="border-2 border-green-400 w-40 h-60 flex justify-center items-center rounded-md relative">
            <div className="text-center">
              <h3 className="text-lg font-semibold">MongoDB</h3>
              <img src="/mongodb.svg" alt="MongoDB Logo" className="w-12 h-12 mx-auto mt-2" />
            </div>

            {/* Arrow pointing to "Models" */}
            <div className="absolute top-1/4 right-[-120px] flex items-center">
              <p className="text-white mr-2">Models</p>
              <svg className="w-8 h-8 text-white" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
