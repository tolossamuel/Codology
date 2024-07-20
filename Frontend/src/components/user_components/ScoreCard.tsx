import Image from "next/image";

function ScoreCard() {
  return (
    
      <div
        
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 "
      >
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Result Analysis
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            Goal 3.5 <span className="bg-gray">Year 2024</span>
          </h5> 
          <a href="#" className="p-2 w-16 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Check</a>
        </div>
        <Image
          width={1000}
          height={1000}
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg"
          src="vercel.svg"
          alt=""
        />
      </div>
    
  );
}
export default ScoreCard;
