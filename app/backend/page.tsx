import Image from 'next/image';

export default function BlockContainer() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black-100">
      <div className="max-w-7xl w-full">

        {/* First Row - Blocks */}
        <div className="flex space-x-4 mt-10">
          {/* Block 1 */}
          <div className="flex flex-col items-center justify-center border-2 border-yellow-400 w-40 h-60 rounded-md">
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
              <p className="text-white">1</p>
            </div>
            <p className="mt-2 text-lg">Block 1 Description</p>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center justify-center border-2 border-red-400 w-40 h-60 rounded-md">
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
              <p className="text-white">2</p>
            </div>
            <p className="mt-2 text-lg">Block 2 Description</p>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center justify-center border-2 border-blue-400 w-40 h-60 rounded-md">
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
              <p className="text-white">3</p>
            </div>
            <p className="mt-2 text-lg">Express</p>
          </div>

          {/* Block 4 */}
          <div className="flex flex-col items-center justify-center border-2 border-green-400 w-40 h-60 rounded-md">
            <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
              <p className="text-white">4</p>
            </div>
            <p className="mt-2 text-lg">MongoDB</p>
          </div>
          {/*  step 1 */}
          <div id="FakeBlock" className='flex-col'>
            <div className="flex-row  w-10 h-10 bg-white rounded-full">
                <p className="text-black">1</p>
                <p className="text-lg mt-2">MongoDB Setup</p>
            </div>
              <div>

              </div>
              <p className="text-lg">Models</p>
          </div>
        </div>


        {/* Second Row */}
        <div id="SecondRow" className="flex flex-col items-center mt-10">


        </div>

      </div>
    </main>
  );
}
