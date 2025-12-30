import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
  { year: "2021", Meals: 1000, Education: 1800, Blankets: 2500 },
  { year: "2022", Meals: 1300, Education: 2800, Blankets: 2500 },
  { year: "2023", Meals: 1700, Education: 3500, Blankets: 3000 },
  { year: "2024", Meals: 2500, Education: 4600, Blankets: 2200 },
];

function ImpactChart() {
  return (
    <div style={{ padding:"20px",paddingBottom:"50px",width: "100%", height: 450, margin: "0", background:"#BDE0FE" }}>
      <h3 style={{ textAlign: "center", marginBottom: "1rem" }}>Yearly Impact Growth</h3>
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Meals" stroke="#ff7300" />
          <Line type="monotone" dataKey="Education" stroke="#387908" />
          <Line type="monotone" dataKey="Blankets" stroke="#0033cc" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ImpactChart;
