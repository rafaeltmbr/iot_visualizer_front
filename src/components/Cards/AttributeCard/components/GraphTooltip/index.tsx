import React from "react";

import { IGraphTooltipProps } from "./interfaces";
import { Container, XValue, YValue } from "./styles";

export const GraphTooltip: React.FC<IGraphTooltipProps> = ({ data }) => {
  return data ? (
    <Container>
      <YValue>{data.yTooltip}</YValue>
      <XValue>{data.xTooltip}</XValue>
    </Container>
  ) : null;
};
