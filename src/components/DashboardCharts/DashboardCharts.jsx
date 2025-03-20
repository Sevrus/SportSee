import AverageSessionChart from "../AverageSessionChart/AverageSessionChart.jsx";
import PerformanceRadarChart from "../PerformanceRadarChart/PerformanceRadarChart.jsx";
import RadialBarChart from "../RadialBarChart/RadialBarChart.jsx";
import "./DashboardCharts.css";

const DashboardCharts = ({averageSessions, performanceData, userScore}) => {
    console.log("User score : ", userScore);
 return (
     <div className={"dashboard-charts"}>
         <AverageSessionChart data={averageSessions} />
         <PerformanceRadarChart data={performanceData} />
         <RadialBarChart data={userScore} />
     </div>
 );
}

export default DashboardCharts;
