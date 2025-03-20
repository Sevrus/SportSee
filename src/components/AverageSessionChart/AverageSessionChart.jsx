import {useState} from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";

const AverageSessionChart = ({data}) => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div style={{backgroundColor: "#fff", padding: "5px", borderRadius: "5px", fontSize: "10px"}}>
                    <p>{payload[0].value} min</p>
                </div>
            );
        }
        return null;
    };

    return (
         <ResponsiveContainer width={"31%"} height={263}>
             <LineChart
                 data={data.sessions}
                 onMouseMove={(e) => setHoverIndex(e.activeTooltipIndex)}
                 onMouseLeave={() => setHoverIndex(null)}
             >
                 <defs>
                     <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                         <stop offset="0%" stopColor="rgba(255, 0, 0, 0.5)" />
                         <stop
                             offset={`${(hoverIndex / (data.sessions.length - 1)) * 100}%`}
                             stopColor="rgba(255, 0, 0, 0.5)"
                         />
                         <stop offset="100%" stopColor="rgba(0, 0, 0, 0.25)" />
                     </linearGradient>
                 </defs>

                 <CartesianGrid vertical={false} />
                 <XAxis
                     dataKey="day"
                     tickLine={false}
                     axisLine={false}
                     tick={{ fontSize: 14, fill: "#ccc" }}
                 />
                 <YAxis hide={true} domain={["dataMin - 10", "dataMax + 10"]} />
                 <Tooltip content={<CustomTooltip />} cursor={false} />
                 <Line
                     type="monotone"
                     dataKey="sessionLength"
                     stroke="url(#lineGradient)"
                     dot={false}
                     activeDot={{ r: 5 }}
                 />
             </LineChart>
         </ResponsiveContainer>
    );
}

export default AverageSessionChart;
