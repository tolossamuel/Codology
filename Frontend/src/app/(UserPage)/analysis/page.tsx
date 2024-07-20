import AreaChartHero from "@/components/user_components/linechart";
import ProgressBarUsageExample from "@/components/user_components/progressbar";
import ScoreCard from "@/components/user_components/ScoreCard";

function Analysis() {
  return (
    <div className=" container w-full grid grid-cols-3">
      <div className="col-start-1 col-end-3 w-full">
        <div>
          <ScoreCard />
        </div>
        <div className="w-full p-2">
          <AreaChartHero />
        </div>
      </div>
      <div className="col-start-3">
        <ProgressBarUsageExample />
      </div>
    </div>
  );
}
export default Analysis;
