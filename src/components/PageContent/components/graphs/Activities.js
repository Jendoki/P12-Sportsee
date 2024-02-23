import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./graphs.css";

function Activities(props) {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="activities-custom-tooltip">
                    <p>{`${payload[0].payload.kilogram}kg`}</p>
                    <p>{`${payload[0].payload.calories}Kcal`}</p>
                </div>
            );
        }
    }

    return (
        <ResponsiveContainer className="activities" width="100%" height="100%">
            <BarChart data={props.activity.sessions} margin={{ top: 80, right: 48, bottom: 32, left: 48 }} barGap={8} barCategoryGap="35%" >
                <text dy={50} dx={50} width={200} fontWeight={600} fontSize={15} >
                    Activité quotidienne
                </text>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                    dataKey="day"
                    dy={16}
                    padding={{ left: -45, right: -45 }}
                    tickLine={false}
                    tick={{ fontSize: 14, fontWeight: 500 }}
                />
                <YAxis
                    yAxisId="kg"
                    dataKey="kilogram"
                    domain={["dataMin - 1", "dataMax + 2"]}
                    allowDecimals={false}
                    dx={48}
                    orientation="right"
                    axisLine={false}
                    tickLine={false}
                />
                <YAxis
                    yAxisId="cal"
                    dataKey="calories"
                    domain={[0, "dataMax + 50"]}
                    hide={true}
                />
                <Tooltip content={CustomTooltip} />
                <Bar
                    name="Poids (kg)"
                    yAxisId="kg"
                    dataKey="kilogram"
                    maxBarSize={8}
                    radius={[50, 50, 0, 0]}
                    fill="#282d30"
                    legendType="circle"
                />
                <Bar
                    name="Calories brûlées (Kcal)"
                    yAxisId="cal"
                    dataKey="calories"
                    maxBarSize={8}
                    radius={[50, 50, 0, 0]}
                    fill="#e60000"
                    legendType="circle"
                />
                <Legend verticalAlign="top" align="right" />
            </BarChart>
        </ResponsiveContainer>
    )
}

export default Activities
