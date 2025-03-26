import {PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart, ResponsiveContainer} from "recharts";

const PerformanceRadarChart = ({data}) => {
    const kindsMapping = {
        cardio: "Cardio",
        energy: "Energie",
        endurance: "Endurance",
        strength: "Force",
        speed: "Vitesse",
        intensity: "Intensité"
};
    const formattedData = data.map((item) => ({
        ...item,
        kind: kindsMapping[item.kind]
    }));

    const rotatedData = [formattedData[formattedData.length - 1], ...formattedData.slice(0, -1)];

    const renderCustomTick = ({ payload, x, y, textAnchor }) => {
        const radiusOffset = 5;
        const improvedX = x + (x - 150) * (radiusOffset / 100);
        const improvedY = y + (y - 150) * (radiusOffset / 100);

        return (
            <text
                x={improvedX}
                y={improvedY}
                textAnchor={textAnchor}
                fontSize="0.75rem"
                fill="#FFF"
                dominantBaseline="central"
            >
                {payload.value}
            </text>
        );
    };

    return (
        <ResponsiveContainer
            width={"31%"}
            height={263}
            style={{backgroundColor: "#282d30", borderRadius: "5px"}}
        >
            <RadarChart outerRadius="65%" data={rotatedData}>
                <PolarGrid
                    radialLines={false}
                />
                <PolarAngleAxis
                    dataKey="kind"
                    tick={renderCustomTick}
                />
                <PolarRadiusAxis
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
