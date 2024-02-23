import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';


function Intensity(props) {
    let perfs = props.performance
    return (
        <>
            <ResponsiveContainer width={300} height={300}>
                <RadarChart className="intensity-graph" outerRadius="70%" data={perfs}>
                    <PolarGrid stroke="white" radialLines={false} polarRadius={[0, 10, 30, 50, 70, 90]} />
                    <PolarAngleAxis dataKey="kind" tick={{ fill: "white", fontSize: 15 }} />
                    <Radar name="Mike" dataKey="value" fill="#ff0000" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </>
    )
}

export default Intensity