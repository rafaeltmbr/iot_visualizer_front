import React from "react";
import { NumberGraph } from "./components/NumberGraph";

import { ICardGraph } from "./interface";
import { Container } from "./styles";

export const CardGraph: React.FC<ICardGraph> = ({ attribute }) => {
  return (
    <Container>
      {attribute.type === "number" && <NumberGraph attribute={attribute} />}
    </Container>
  );
};
