import React, { useMemo } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useTheme } from "styled-components";

import { INumberGraphs } from "./interfaces";
import { Container } from "./styles";

export const NumberGraph: React.FC<INumberGraphs> = ({ attribute }) => {
  const theme = useTheme();

  const data = useMemo(() => {
    return [
      { name: "07:21:20 AM", value: "15" },
      { name: "08:21:20 AM", value: "17" },
      { name: "09:21:20 AM", value: "18" },
      { name: "10:21:20 AM", value: "25" },
      { name: "11:21:20 AM", value: "39" },
      { name: "07:21:20 AM", value: "15" },
      { name: "08:21:20 AM", value: "17" },
      { name: "09:21:20 AM", value: "18" },
      { name: "10:21:20 AM", value: "25" },
      { name: "11:21:20 AM", value: "39" },
      { name: "07:21:20 AM", value: "15" },
      { name: "08:21:20 AM", value: "17" },
      { name: "09:21:20 AM", value: "18" },
      { name: "10:21:20 AM", value: "25" },
      { name: "11:21:20 AM", value: "39" },
      { name: "07:21:20 AM", value: "15" },
      { name: "08:21:20 AM", value: "17" },
      { name: "09:21:20 AM", value: "18" },
      { name: "10:21:20 AM", value: "25" },
      { name: "11:21:20 AM", value: "39" },
    ];
  }, []);

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 8, right: 32, bottom: 0, left: -8 }}
        >
          <Line
            type="monotone"
            dataKey="value"
            stroke={theme.colors.primary}
            strokeWidth={2}
            dot={false}
          />
          <YAxis
            dataKey="value"
            axisLine={false}
            tickLine={{ display: "none" }}
            tick={{ style: { fontSize: "0.8125rem" } }}
          />
          <XAxis
            dataKey="name"
            axisLine={false}
            tickMargin={8}
            tickLine={{ display: "none" }}
            tick={{ style: { fontSize: "0.8125rem" } }}
          />
          <CartesianGrid stroke={theme.colors.graphGrid} />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};
