import BarChartActivity from "../BarChartActivity/BarChartActivity.jsx";

const DailyActivity = ({data}) => {
    console.log("Données reçues par DailyActivity :", data);

    return (
        <div className="daily-activity">
            <BarChartActivity data={data} />
        </div>
    );
}

export default DailyActivity;
