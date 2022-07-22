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
import { formatNumberGraphData } from "../../../../../../../utils/formatNumberGraphData";
import { GraphTooltip } from "../../../GraphTooltip";

import { INumberGraphs } from "./interfaces";
import { Container } from "./styles";

export const NumberGraph: React.FC<INumberGraphs> = ({ attribute }) => {
  const theme = useTheme();

  const data = useMemo(() => formatNumberGraphData(attribute), [attribute]);

  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 8, right: 32, bottom: 0, left: -8 }}
        >
          <Line
            type="monotone"
            dataKey="y"
            stroke={theme.colors.primary}
            strokeWidth={2}
            dot={false}
          />
          <YAxis
            dataKey="y"
            axisLine={false}
            tickLine={{ display: "none" }}
            tick={{ style: { fontSize: "0.8125rem" } }}
            domain={["auto", "auto"]}
          />
          <XAxis
            dataKey="x"
            axisLine={false}
            tickMargin={8}
            tickLine={{ display: "none" }}
            tick={{ style: { fontSize: "0.8125rem" } }}
          />
          <CartesianGrid stroke={theme.colors.graphGrid} />
          <Tooltip
            content={(...args) => (
              <GraphTooltip data={args[0]?.payload?.[0]?.payload} />
            )}
          />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  );
};
