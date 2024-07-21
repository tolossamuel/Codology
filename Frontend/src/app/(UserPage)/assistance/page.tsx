"use client"
import Quiz from "@/components/user_components/quiz";
import Upload from "@/components/user_components/upload";
import { useState } from "react";

function Assistance() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <div className="border-b-2 p-3 w-full">
        <button className="bg-transparent mx-3 hover:bg-purple-500 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-purple-950-500 hover:border-transparent rounded" onClick={() => setToggle((prev) => !prev)}>
          Summary
        </button>
        <button className="bg-transparent hover:bg-purple-500 text-gray-800 font-semibold hover:text-white py-2 px-4 border border-purple-950-500 hover:border-transparent rounded" onClick={() => setToggle((prev) => !prev)}>
          Quizes
        </button>
      </div>
      <div className="container justify-center text-black bg-gray-100">
        {toggle ? <Upload /> : <Quiz  /> }    
      </div>
    </div>
  );
}
export default Assistance;
