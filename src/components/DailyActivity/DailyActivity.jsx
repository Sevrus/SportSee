import BarChartActivity from "../BarChartActivity/BarChartActivity.jsx";
import DashboardCharts from "../DashboardCharts/DashboardCharts.jsx";
import "./DailyActivity.css";

const DailyActivity = ({data, averageSessions, userScore, performanceData}) => {

    return (
        <div className="daily-activity">
            <BarChartActivity data={data} />
            <DashboardCharts
                averageSessions={averageSessions}
                userScore={userScore}
                performanceData={performanceData}
            />
        </div>
    );
}

export default DailyActivity;
