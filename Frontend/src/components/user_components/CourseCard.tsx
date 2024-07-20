import Image from "next/image";

function CourseCard () {

return (
    <div>
        
<a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 ">Noteworthy technology acquisitions</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology </p>
    </div>
    <Image width={1000} height={1000} className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-40 md:rounded-none md:rounded-s-lg" src="vercel.svg" alt="" />
</a>

    </div>
);
}
export default CourseCard