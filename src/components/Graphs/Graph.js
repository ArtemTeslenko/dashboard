import { AreaChart, CartesianGrid, XAxis, YAxis, Area } from "recharts";
import { LineGraphInfo } from "../Dashboard";
import { LineGraphData } from "./Graph.styled";

export const Graph = ({ data, userColors }) => {
  return (
    <LineGraphData>
      <AreaChart
        width={828}
        height={212}
        data={data && data.chartData}
        label={{ fill: "red", fontSize: 20 }}
        style={{ fontWeight: "400", fontSize: "11px", lineHeight: "12px" }}
      >
        <defs>
          {userColors.map(({ colorName, hex }) => (
            <linearGradient
              key={colorName}
              id={colorName}
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={`${hex}33`} />
              <stop offset="107.59%" stopColor={`${hex}00`} />
            </linearGradient>
          ))}
        </defs>
        {userColors.map(({ colorName, hex }) => (
          <Area
            key={colorName}
            type="monotone"
            dataKey={colorName}
            stroke={hex}
            fillOpacity={1}
            fill={`url(#${colorName})`}
            strokeWidth="2px"
            dot={{ stroke: `${hex}`, strokeWidth: 4 }}
          />
        ))}
        <CartesianGrid stroke="#ffffff0A" />
        <XAxis dataKey="date" interval="preserveStartEnd" />
        <YAxis />
      </AreaChart>
      {data && (
        <LineGraphInfo
          usersData={data.users}
          chartData={data.chartData}
          userColors={userColors}
        />
      )}
    </LineGraphData>
  );
};
