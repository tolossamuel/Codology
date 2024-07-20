import SideBar from "@/components/user_components/SideBar";
import NavBar from "@/components/user_components/Navbar";
import Image from "next/image";

export default function Dashboard({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="container h-screen bg-white overflow-scroll">
      <div className="grid grid-cols-5 grid-rows-6 h-screen">
        <div className="flex antialiased text-gray-800 col-start-1 col-end-2 row-start-1 row-end-7 mt-6">
          <SideBar />
        </div>
        <div className="col-start-3 col-end-6 mt-6">
          <NavBar />
        </div>
        <div className="col-start-2 col-end-6">{children}</div>
      </div>
    </main>
  );
}
