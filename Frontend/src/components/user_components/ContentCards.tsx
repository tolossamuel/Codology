import Image from "next/image";

type Content = {
  contentName: string;
  contentImg: string
}
function ContentCard( {contentName, contentImg}: Content) {
  return (
    <div>
      <a
        href="/assistance"
        className="block py-10 text-gray-700 px-3 bg-gray100 bg-gradient-to-t from-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100  "
      >
        <Image width={1000} height={1000} className="w-20 h-20" src={contentImg} alt="" />
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {contentName}
        </h5>
        
      </a>
    </div>
  );
}
export default ContentCard;
