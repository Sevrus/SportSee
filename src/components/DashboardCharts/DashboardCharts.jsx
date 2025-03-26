import AverageSessionChart from "../AverageSessionChart/AverageSessionChart.jsx";
import PerformanceRadarChart from "../PerformanceRadarChart/PerformanceRadarChart.jsx";
import RadialBarScore from "../RadialBarScore/RadialBarScore.jsx";
import "./DashboardCharts.css";

const DashboardCharts = ({averageSessions, performanceData, userScore}) => {
 return (
     <div className={"dashboard-charts"}>
         <AverageSessionChart data={averageSessions} />
         <PerformanceRadarChart data={performanceData} />
         <RadialBarScore data={userScore} />
     </div>
 );
}

export default DashboardCharts;
