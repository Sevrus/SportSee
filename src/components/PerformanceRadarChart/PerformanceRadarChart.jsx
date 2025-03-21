import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from "recharts";

const PerformanceRadarChart = ({data}) => {
    const kindsMapping =["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];

    return (
            <ResponsiveContainer width={"31%"} height={263} style={{backgroundColor: "#282d30", borderRadius: "5px"}}>
                <RadarChart outerRadius="65%" data={data}>
                    <PolarGrid
                        radialLines={false}
                    />
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={{ fontSize: "0.75rem", fill: "#FFF" }}
                    />
                    <PolarRadiusAxis
                        dataKey="value"
                        tick={false}
                        axisLine={false}
                    />
                    <Radar
                        name="Performance"
                        dataKey="value"
                        fill="rgba(255, 1, 1, 0.7)"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
    );
}

export default PerformanceRadarChart;
