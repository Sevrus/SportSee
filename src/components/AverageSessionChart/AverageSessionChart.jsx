import {useState} from "react";
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import "./AverageSessionChart.css";

const AverageSessionChart = ({data}) => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const daysMap = ["L", "M", "M", "J", "V", "S", "D"];
    const containerWidth = 250;
    const sectionWidth = containerWidth / data.sessions.length;

    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="tooltip-content">
                    <p>{payload[0].value} min</p>
                </div>
            );
        }
        return null;
    };

    return (
        <ResponsiveContainer
            width={"31%"}
            height={263}
            style={{backgroundColor: "#ff0000", borderRadius: "5px"}}>
            <div className="chart-wrapper">
                <div className="chart-title">
                    Durée moyenne des sessions
                </div>
                {hoverIndex !== null && (
                    <div
                        className="chart-overlay"
                        style={{
                            left: sectionWidth * hoverIndex,
                            width: containerWidth - sectionWidth * hoverIndex
                        }}
                    ></div>
                )}
                <div className="line-chart-wrapper">
                    <LineChart
                        width={250}
                        height={200}
                        data={data["sessions"]}
                        onMouseMove={(e) => {
                            if (e.activeTooltipIndex) {
                                setHoverIndex(e.activeTooltipIndex);
                            }
                        }}
                        onMouseLeave={() => setHoverIndex(null)}
                        margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    >
                        <defs>
                            <linearGradient id="lineGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="rgba(255, 255, 255, 1)"/>
                                <stop offset="81%" stopColor="rgba(255, 255, 255, 0.4)"/>
                            </linearGradient>
                        </defs>
                        <XAxis
                            dataKey="day"
                            tickLine={false}
                            axisLine={false}
                            tick={{fontSize: "0.75rem", fill: "rgba(255, 255, 255, 0.53)"}}
                            tickFormatter={(day) => daysMap[day - 1]}
                        />
                        <YAxis hide={true} domain={["dataMin - 20", "dataMax + 20"]}/>
                        <Tooltip content={<CustomTooltip/>} cursor={false}/>
                        <Line
                            type="natural"
                            dataKey="sessionLength"
                            stroke="url(#lineGradient)"
                            strokeWidth={2}
                            dot={false}
                            activeDot={{
                                r: 4,
                                fill: "#fff",
                                stroke: "rgba(255, 255, 255, 0.25)",
                                strokeWidth: 10
                            }}
                        />
                    </LineChart>
                </div>
            </div>
        </ResponsiveContainer>
    );
}

export default AverageSessionChart;
