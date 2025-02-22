const HeaderRestaurents = () => {
  return (
    <div className="relative min-h-screen bg-white text-center flex items-center justify-center overflow-hidden">
      //backgrounds
      <div className="absolute w-[1500px] h-[657px] -left-[174px] top-[161px]">
        <div className="absolute w-[500px] h-[547px] top-[150px] left-[315px] bg-[#377FC2] blur-[100px]"></div>
        <div className="absolute w-[600px] h-[547px] top-0 left-[-150px] bg-[#3ABF7D] blur-[100px]"></div>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full max-w-md px-4">
        <h1 className="text-4xl font-bold text-black mb-4">SparkPost!</h1>
        <p className="text-lg text-gray-600 mb-10">
          We harness the power of AI to generate posts tailored for your
          business
        </p>
        <div className="flex flex-col items-center space-y-4 w-full">
          <button className="w-full py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none">
            Get Started!
          </button>
          <p className="text-sm text-gray-500">
            Already a user?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Sign-in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeaderRestaurents;

// <div className=" h-screen m-auto">
//   <div className="absolute w-[1500px] h-[657px] -left-[174px] top-[161px]">
//     <div className="absolute w-[500px] h-[547px] top-[150px] left-[315px] bg-[#377FC2] blur-[100px]"></div>
//     <div className="absolute w-[600px] h-[547px] top-0 left-0 bg-[#3ABF7D] blur-[100px]"></div>
//   </div>
// </div>
