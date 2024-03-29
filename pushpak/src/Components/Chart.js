import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

export default function Linechart({ data }) {
    return (
        <LineChart
            width={700}
            height={350}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
                type="monotone"
                dataKey="profit"
                stroke="#8884d8"
                strokeWidth={5}
                activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="date" stroke="#82ca9d" />
        </LineChart>
    );
}
