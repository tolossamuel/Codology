import Image from "next/image";

function ContentCard() {
  return (
    <div>
      <a
        href="#"
        className="block py-10 text-gray-700 px-3 bg-gray100 bg-gradient-to-t from-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100  "
      >
        <Image width={1000} height={1000} className="w-20 h-20" src="vercel.svg" alt="" />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          AI
        </h5>
        <p className="font-normal text-gray-700 ">
          Here are the biggest 
        </p>
      </a>
    </div>
  );
}
export default ContentCard;
