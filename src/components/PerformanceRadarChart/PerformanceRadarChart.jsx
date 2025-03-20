import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from "recharts";

const PerformanceRadarChart = ({data}) => {
    return (
            <ResponsiveContainer width={"31%"} height={263}>
                <RadarChart outerRadius="70%" data={data}>
                    <PolarGrid />
                    <PolarAngleAxis
                        dataKey="kind"
                        tick={{ fontSize: 12, fill: "#FFF" }}
                    />
                    <PolarRadiusAxis
                        tick={false}
                        axisLine={false}
                    />
                    <Radar
                        name="Performance"
                        dataKey="value"
                        stroke="#FF0101"
                        fill="#FF0101"
                        fillOpacity={0.6}
                    />
                </RadarChart>
            </ResponsiveContainer>
    );
}

export default PerformanceRadarChart;
