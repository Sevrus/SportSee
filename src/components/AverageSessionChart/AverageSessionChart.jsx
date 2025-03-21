import {useState} from "react";
import {Layer, Line, LineChart, Rectangle, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const AverageSessionChart = ({data}) => {
    const [hoverIndex, setHoverIndex] = useState(null);
    const daysMap = ["L", "M", "M", "J", "V", "S", "D"];
    const sectionWidth = 258 / data.sessions.length;

    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div style={{backgroundColor: "#fff", padding: "6px 6px", fontSize: "0.5rem"}}>
                    <p style={{color: "#000"}}>{payload[0].value} min</p>
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
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%"
                }}
            >
                <div
                    style={{
                        fontSize: "0.93rem",
                        color: "rgba(255, 255, 255, 0.53)",
                        padding: "29px 0 0 34px",
                        width: "75%"
                    }}
                >
                    Durée moyenne des sessions
                </div>
                <div style={{flex: 1, alignSelf: "center"}}>
                    <LineChart
                        width={250}
                        height={200}
                        data={data["sessions"]}
                        onMouseMove={(e) => setHoverIndex(e.activeTooltipIndex)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        <defs>
                            <linearGradient id="lineGradient" x1="100%" y1="0%" x2="0%" y2="0%">
                                <stop offset="0%" stopColor="rgba(255, 255, 255, 1)"/>
                                <stop offset="81%" stopColor="rgba(255, 255, 255, 0.4)"/>
                            </linearGradient>
                        </defs>
                        {hoverIndex !== null && (
                            <Rectangle
                                x={sectionWidth * hoverIndex}
                                y={0}
                                width={sectionWidth * (data.sessions.length - hoverIndex)}
                                height={263}
                                fill="rgba(0, 0, 0, 1)"
                            />
                        )}
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
