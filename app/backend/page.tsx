import Image from 'next/image';

export default function BlockContainer() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black-100">
      <div className="flex flex-col justify-center max-w-7xl w-full ">

        {/* First Row - Blocks */}
        <div className="flex justify-center space-x-4"> {/* Center the blocks */}
          {/* Block 1 */}
          <div className="flex flex-col items-center justify-center border-2  w-40 h-60 ">
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
              <p className="text-white">1</p>
            </div>
            <p className="mt-2 text-lg">Block 1 Description</p>
          </div>

          {/* Two Half-Size Blocks for FrontEnd UI */}
          <div className="flex space-x-2"> {/* Added flex and space-x-2 to align two blocks next to each other */}
            <div className="flex flex-col items-center justify-center border-2 border-yellow-500 w-20 h-60 rounded-md bg-yellow-500"> {/* First half block */}
              <p className="mt-2 text-lg">UI</p>
            </div>

            <div className="flex flex-col items-center justify-center border-2  w-20 h-60 rounded-md"> {/* Second half block */}
              <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
                <p className="text-white">2b</p>
              </div>
              <p className="mt-2 text-lg">NFLKL UI Part 2</p>
            </div>
          </div>

          {/* Two Half-Size Blocks for API */}
          <div className="flex space-x-2"> {/* Added flex and space-x-2 to align two blocks next to each other */}
            <div className="flex flex-col items-center justify-center   w-20 h-60 "> {/* First half block for API */}
              <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
                <p className="text-white">3a</p>
              </div>
              <p className="mt-2 text-lg">API Part 1</p>
            </div>

            <div className="flex flex-col items-center justify-center border-2 border-red-400 w-20 h-60 rounded-md"> {/* Second half block for API */}
              <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
                <p className="text-white">3b</p>
              </div>
              <p className="mt-2 text-lg">API Part 2</p>
            </div>
          </div>
          {/* Express Block */}
          <div className="flex flex-col items-center justify-center border-2 border-blue-400 w-40 h-60 rounded-md">
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
            </div>
            <p className="mt-2 text-lg">Express</p>
          </div>
          {/* Block 4 */}
          <div className="flex flex-col items-center justify-center border-2 border-green-400 w-40 h-60 rounded-md">
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
            </div>
            <p className="mt-2 text-lg">MongoDB</p>
          </div>

          {/* FakeBlock - Vertical Layout */}
          <div id="FakeBlock" className="flex flex-col items-start justify-center w-40 h-60">
            {/* First Row of FakeBlock */}
            <div className="flex items-start justify-center gap-4">
              <p className="text-white">1</p>
              <p className="text-sm">MongoDB Setup</p>
            </div>

            {/* Second Row of FakeBlock */}
            <div className="flex items-start justify-center gap-4">
              <p className="text-white">1</p>
              <p className="text-sm">Models</p>
            </div>
          </div>
        </div>

        {/* Second Row - Under Block 3 */}
        <div id="SecondRow" className="flex justify-center space-x-4 mt-10"> {/* Center the blocks */}
          {/* First block */}
          <div className="border-2 w-40 h-40 rounded-md p-4">
            <h3 className="text-lg font-semibold"></h3>
          </div>

          {/* Second block */}
          <div className="border-2 border-gray-400 w-40 h-40 rounded-md p-4">
            <h3 className="text-lg font-semibold">Related to Block 2</h3>
          </div>

          {/* Third block */}
          <div className="border-2 border-gray-400 w-40 h-40 rounded-md p-4">
            <h3 className="text-lg font-semibold">Related to Block 2</h3>
          </div>

          {/* Fourth block */}
          <div className="border-2 border-gray-400 w-40 h-40 rounded-md p-4">
            <h3 className="text-lg font-semibold">Related to Block 2</h3>
          </div>
          {/* Fifth block */}
          <div className="border-2 border-gray-400 w-40 h-40 rounded-md p-4">
            <h3 className="text-lg font-semibold">Related to Block 2</h3>
          </div>
          {/* Sixth block */}
          <div className="border-2 border-gray-400 w-40 h-40 rounded-md p-4">
            <h3 className="text-lg font-semibold">Related to Block 2</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
