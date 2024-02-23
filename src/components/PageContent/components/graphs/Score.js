import React from "react";
import { RadialBarChart, PolarAngleAxis, RadialBar, ResponsiveContainer } from 'recharts';

function Score(props) {
    const data = [{ name: 'Score', uv: props.score, fill: '#ff0000' }];

    return (
        <>
            <ResponsiveContainer width={300} height={300}>
                <RadialBarChart className="score-graph" innerRadius="80%" outerRadius="100%" barSize={10} data={data} startAngle={90} endAngle={450}>
                    <text x="40" y="40" fontWeight={600} fontSize={20}>
                        Score
                    </text>
                    <text x="50%" y="40%" textAnchor="middle" fontWeight={600} fontSize={30} dominantBaseline="middle">
                        {props.score}%
                    </text>
                    <text x="50%" y="50%" textAnchor="middle" fontWeight={600} fontSize={22} fill="#74798C" dominantBaseline="middle">
                        de votre
                    </text>
                    <text x="50%" y="60%" textAnchor="middle" fontWeight={600} fontSize={22} fill="#74798C" dominantBaseline="middle">
                        objectif
                    </text>
                    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                    <RadialBar
                        background={false}
                        dataKey="uv"
                        cornerRadius={10}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </>
    )
}

export default Score