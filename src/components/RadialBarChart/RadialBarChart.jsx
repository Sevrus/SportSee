import {PolarAngleAxis, RadialBar, ResponsiveContainer} from "recharts";

const RadialBarChart = ({data}) => {
    console.log("Données reçues par RadialBarChart: " ,data);
    return (
        <ResponsiveContainer width="31%" height={263}>
            <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="70%"
                outerRadius="80%"
                barGap={8}
                startAngle={90}
                endAngle={450}
                data={data}
            >
                <PolarAngleAxis
                    type="number"
                    domain={[0, 100]}
                    angleAxisId={0}
                    tick={false}
                />
                <RadialBar
                    minAngle={15}
                    clockWise
                    dataKey="value"
                    background={{ fill: "#F3F3F3" }}
                />
            </RadialBarChart>
        </ResponsiveContainer>
    );
}

export default RadialBarChart;
