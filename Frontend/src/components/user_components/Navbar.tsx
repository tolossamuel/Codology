import Image from "next/image";

function NavBar() {
  return (
    <nav className="flex flex-row w-full justify-around items-center">
      <div className="flex flex-row justify-center items-center">
        <form action="/search">
          <div className="border shadow rounded-full hover:border-purple-500 ">
            <input
              type="text"
              name="q"
              className="bg-white hover:ring-white focus:outline-none border-r overflow-x-hidden rounded-l-full px-10 py-3 text-gray-500 focus:ring-white"
            />
            <button
              type="submit"
              className="text-gray-600 h-fit p-3 rounded-r-full hover:bg-purple-800 hover:text-white"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      <div className="flex flex-row ml-10 items-center justify-stretch w-1/4">
        <div className="flex flex-row items-center mr-auto">
          <Image
            className="h-10 w-10 rounded-full"
            src="vercel.svg"
            alt=""
            width={1000}
            height={1000}
          />
          <div className="ml-3 flex flex-col">
            <div className="text-base font-medium leading-none text-gray-500">
              Tom Cook
            </div>
            <div className="text-sm font-medium leading-none text-gray-400">
              tom@example.com
            </div>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5"></span>
            <span className="sr-only">View notifications</span>
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;
