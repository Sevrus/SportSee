import {ResponsiveContainer, RadialBarChart, PolarAngleAxis, RadialBar} from "recharts";
import "./RadialBarScore.css";

const RadialBarScore = ({data}) => {
    const score = data * 100;
    const chartData = [{name: "Score", value: score}];

    return (
        <div className="radial-bar-score">
            <div className="radial-bar-score__title">
                Score
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="60%"
                    outerRadius="70%"
                    data={chartData}
                    startAngle={90}
                    endAngle={450}
                >
                    <circle
                        cx="50%"
                        cy="50%"
                        r="30%"
                        fill="#fff"
                    />
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
                        fill="#ff0000"
                        background={{fill: "#fbfbfb"}}
                        cornerRadius={5}
                    />
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fill="#000"
                        fontSize="1.625rem"
                        style={{fontWeight: "bold"}}
                    >
                        <tspan x="50%" dy={-10}>{`${score}%`}</tspan>
                        <tspan x="50%" dy={25} fill="#74798c" fontSize="1rem" style={{fontWeight: "500"}}>de votre
                        </tspan>
                        <tspan x="50%" dy={20} fill="#74798c" fontSize="1rem" style={{fontWeight: "500"}}>objectif
                        </tspan>
                    </text>
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default RadialBarScore;
