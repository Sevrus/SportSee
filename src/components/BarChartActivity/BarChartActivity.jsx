import {Bar, BarChart, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import "./BarChartActivity.css";

const BarChartActivity = ({data}) => {

    const sessions = data?.sessions || [];

    const CustomTooltip = ({active, payload}) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p>{payload[0].value}kg</p>
                    <p>{payload[1].value}Kcal</p>
                </div>
            );
        }
        return null;
    };

    const CustomCursor = ({x, y ,height}) => {
        return (
            <rect
                x={x + 21}
                y={y}
                height={height}
                width={56}
                fill="rgba(196, 196, 196, 0.5)"
            />
        );
    };

    const weights = sessions.map(session => session.kilogram);
    const minWeight = Math.min(...weights);
    const maxWeight = Math.max(...weights);

    const midWeight = (minWeight + maxWeight) / 2;
    const maxWeightLine = maxWeight;

    const renderLegend = () => {
        return (
            <div className="custom-legend">
                <p>
                    <span className="dot dot--black"></span>
                    Poids(kg)
                </p>
                <p>
                    <span className="dot dot--red"></span>
                    brûlées(kCal)
                </p>
            </div>
        );
    };

    return (
        <div className="bar-chart-activity">
            <div className="legend-container">
                <h3>Activité quotidienne</h3>
                {renderLegend()}
            </div>

            <ResponsiveContainer width="100%" height={185}>
                <BarChart data={sessions} barcategoryGap={"8px"}>
                    <CartesianGrid
                        vertical={false}
                        horizontal={false}
                    />
                    <ReferenceLine
                        y={minWeight - 2}
                        strokeDasharray={""}
                        yAxisId="left"
                        stroke={"#dedede"}
                    />
                    <ReferenceLine
                        y={midWeight + 0.5}
                        strokeDasharray="3 3"
                        yAxisId={"left"}
                        stroke={"#dedede"}
                    />
                    <ReferenceLine
                        y={maxWeightLine + 3}
                        strokeDasharray="3 3"
                        yAxisId={"left"}
                        stroke={"#dedede"}
                    />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{fontSize: "0.875rem", fill: "#9B9EAC"}}
                        dy={15}
                    />
                    <YAxis
                        yAxisId="left"
                        orientation="right"
                        domain={[minWeight - 2, maxWeight + 3]}
                        ticks={[minWeight - 2, midWeight + 0.5, maxWeight + 3]}
                        axisLine={false}
                        tickLine={false}
                        tick={{fontSize: "0.875rem", fill: "#9B9EAC"}}
                        dx={35}
                    />
                    <YAxis
                        yAxisId="right"
                        hide={true}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={<CustomCursor />}
                    />
                    <Bar
                        dataKey="kilogram"
                        yAxisId="left"
                        fill={"#282d30"}
                        barSize={"7"}
                        radius={[3, 3, 0, 0]}
                    />
                    <Bar
                        dataKey="calories"
                        yAxisId="right"
                        fill={"#e60000"}
                        barSize={"7"}
                        radius={[3, 3, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default BarChartActivity;
