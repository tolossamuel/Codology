import data from "@/resources/data";


function Quiz() {
  const questions = data
  return (
    <div className="flex flex-col w-screen px-5 h-screen bg-[#1A1A1A] justify-center items-center">
      <div className="flex flex-col items-start w-full">
        <h4 className="mt-10 text-xl text-white/60">Question 1 of 5</h4>
        <div className="mt-4 text-2xl text-white">
          What type of framework is Next.js?
        </div>
      </div>
      <div className="flex flex-col w-full">
        {questions[0].answerOptions.map((answer, index) => (
          <div
            key={index}
            className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer bg-white/5 border-white/10 rounded-xl"
          >
            <input type="radio" className="w-6 h-6 bg-black" />
            <p className="ml-6 text-white">{answer.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Quiz;
