import ChatBot from "@/components/user_components/chatbot";
import ContentCard from "@/components/user_components/ContentCards";
import CourseCard from "@/components/user_components/CourseCard";
import HomeWorkCard from "@/components/user_components/HomeworkCard";

function Dashboard() {
  return (
    <div className="text-gray-500">
      <div className="w-5/6 border-2 bg-purple-500 bg-gradient-to-r from-purple-700 text-gray-50 shadow px-10 py-5 rounded-3xl flex flex-col justify-between items-start align-middle">
        <div>
          <h2>September 10, 2020</h2>
        </div>
        <div className="pt-16 text-3xl">
          <h1>Welcome Tom! </h1>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 mt-5">
        <div className="col-start-1 col-end-3 mt-2">
          <div className="grid grid-cols-3 gap-3">
            <ContentCard contentName="Group"  contentImg="/vercel.svg"/>
            <ContentCard contentName="AI"  contentImg="/vercel.svg"/>
            <ContentCard contentName="Result"  contentImg="/vercel.svg"/>
            
          </div>
          <div>
            <h1 className="p-2 text-2xl text-gray-700 ml-2 font-semibold">
              {" "}
              Enrolled Courses
            </h1>
            <div className="grid grid-cols-2 gap-4">
              <CourseCard />
              <CourseCard />
            </div>
          </div>
        </div>
        <div className="col-start-3  gap-2">
          <h1 className="p-2 text-lg ml-2 font-semibold">
            Home Work and Assignment
          </h1>
          <div>
            <HomeWorkCard />
            <HomeWorkCard />
            <HomeWorkCard />
          </div>
         <div>
          <ChatBot/>
         </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
