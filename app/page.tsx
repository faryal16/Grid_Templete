

export default function Home() {
  return (
    <div className="bg-[#FFFDD0] min-h-screen w-full   flex text-center justify-center items-center p-40 sm:p-4 md:p-6">
      {/* Grid Container */}
      <div className="relative z-10 grid grid-cols-6 sm:grid-cols-6 md:grid-cols-6  gap-2 sm:gap-3 md:gap-4 w-full max-w-[1200px] mx-auto">
        {/* Left Full-Height Div */}
        <div className="col-span-1 bg-[#24B7CB] flex rounded-lg items-center justify-center h-[60vh] sm:h-[70vh] md:h-[80vh] transition-all duration-300">
          <p className="text-center font-bold text-xs sm:text-base md:text-lg lg:text-xl p-2">AG1 <br /> 2 of 10</p>
        </div>

        {/* Middle Section */}
        <div className="bg-[#F3E5AB] col-span-6 sm:col-span-4 grid grid-cols-2 sm:grid-cols-4 w-full gap-2 sm:gap-3 md:gap-4 p-2 sm:p-3 md:p-4 rounded-lg">
          {/* Top Single Div */}
          <div className="bg-[#F3E5AB] rounded-lg col-span-2 sm:col-span-4 h-12 sm:h-14 md:h-16 flex items-center justify-center transition-all duration-300">
            <p className="font-bold text-xs sm:text-base md:text-lg lg:text-xl">AG2 <br /> 6 of 10</p>
          </div>

          {/* Middle Left Divs */}
          <div className="bg-pink-300 rounded-lg h-20 sm:h-24 md:h-32 flex items-center justify-center col-span-1 sm:col-span-2 transition-all duration-300">
            <p className="font-bold text-xs sm:text-base md:text-lg lg:text-xl">AG4 <br /> 3 of 6</p>
          </div>
          <div className="bg-pink-300 rounded-lg h-20 sm:h-24 md:h-32 flex items-center justify-center col-span-1 sm:col-span-2 transition-all duration-300">
            <p className="font-bold text-xs sm:text-base md:text-lg lg:text-xl">AG5 <br /> 3 of 6 (Omega)</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 w-full bg-[#F3E5AB] col-span-2 sm:col-span-4 mt-2 sm:mt-0">
            {/* Tall Center Div */}
            <div className="bg-orange-300 rounded-lg w-full sm:w-1/3 p-2 sm:p-3 md:p-4 flex items-center justify-center min-h-[80px] sm:min-h-[100px] md:min-h-[120px]">
              <p className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-center">AG6 <br /> 2 of 6</p>
            </div>

            {/* Bottom Section */}
            <div className="bg-amber-300 rounded-lg w-full sm:w-2/3 p-2 sm:p-3 md:p-4 grid gap-2 sm:gap-3 md:gap-4">
              <div className="bg-amber-300 rounded-lg flex items-center justify-center p-2 sm:p-3 md:p-4">
                <p className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-center">AG7 <br /> 4 of 6 (Omega)</p>
              </div>
              
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                <div className="bg-pink-300 rounded-lg p-2 sm:p-3 md:p-4 flex items-center justify-center">
                  <p className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-center">AG8 <br /> 2 of 10</p>
                </div>
                <div className="bg-pink-300 rounded-lg p-2 sm:p-3 md:p-4 flex items-center justify-center">
                  <p className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-center">AG9 <br /> 2 of 10</p>
                </div>
              </div>

              <div className="bg-pink-400 rounded-lg p-2 sm:p-3 md:p-4 flex items-center justify-center">
                <p className="font-bold text-xs sm:text-base md:text-lg lg:text-xl text-center">AG10 <br /> auto</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Full-Height Div */}
        <div className="col-span-1 bg-[#24B7CB] flex rounded-lg items-center justify-center h-[60vh] sm:h-[70vh] md:h-[80vh] transition-all duration-300">
          <p className="text-center font-bold text-xs sm:text-base md:text-lg lg:text-xl p-2">AG3 <br /> 2 of 10 (Omega)</p>
        </div>
      </div>
    </div>
  );
}
