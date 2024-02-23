import React from "react";
import { LineChart, Line, XAxis, Tooltip } from 'recharts';
import "./graphs.css"

function SessionDuration(props) {
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip-session">
                    <p className="label">{`${payload[0].value} mins`}</p>
                </div>
            );
        }
    }

    return (
        <>
            <div>
                <LineChart className="session-duration-graph" width={300} height={300} data={props.duration.sessions}>
                    <defs>
                        <linearGradient id="lineGradient">
                            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="30%" />
                            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="100%" />
                        </linearGradient>
                        <rect id="backgroundRectangle" x="220" y="0" width="300" height="300" fill="#e60000" />
                    </defs>
                    <use href="#backgroundRectangle" />
                    <text
                        x={40}
                        y={40}
                        fontWeight={600}
                        fontSize={15}
                        style={{
                            fontSize: '15px',
                            fontFamily: 'Roboto',
                            fontWeight: '600',
                            lineHeight: '24px',
                            fill: 'rgba(255, 255, 255, 0.5)'
                        }}
                    >
                        Durée moyenne des
                    </text>
                    <text
                        x={40}
                        y={64}
                        fontWeight={600}
                        fontSize={15}
                        style={{
                            fontSize: '15px',
                            fontFamily: 'Roboto',
                            fontWeight: '600',
                            lineHeight: '24px',
                            fill: 'rgba(255, 255, 255, 0.5)'
                        }}
                    >
                        sessions
                    </text>
                    <XAxis dataKey="day" axisLine={false} tickSize={0} tick={{ fill: '#FFFFFF', opacity: '0.5' }} />
                    <Tooltip content={CustomTooltip} cursor={{ stroke: "transparent", strokeWidth: 0 }} />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#lineGradient)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }}
                    />
                </LineChart>
            </div>
        </>
    )
}

export default SessionDuration