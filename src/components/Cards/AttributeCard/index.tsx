import React from "react";

import { IAttributeCardProps } from "./interfaces";
import { Container, Content } from "./styles";
import { NoReadings } from "./components/NoReadings";
import { CardReadings } from "./components/CardReadings";
import { SurfaceCard } from "../SurfaceCard";
import { ContentContext } from "../../../content/locale";
import { getLocaleContent } from "../../../utils/getLocaleContent";
import { CardGraph } from "./components/CardGraph";

export const AttributeCard: React.FC<IAttributeCardProps> = ({
  attribute,
  ...rest
}) => {
  const options = [
    getLocaleContent("editOption"),
    getLocaleContent("removeOption"),
  ];

  const handleOptionClick = (option: ContentContext, index: number) => {
    console.log(option, index);
  };

  const showGraph =
    attribute.metadata.layout === "long" && attribute.type !== "text";

  return (
    <Container
      data-layout={attribute.metadata.layout}
      data-show-graph={showGraph}
    >
      <SurfaceCard
        {...rest}
        title={attribute.name}
        options={options}
        onOptionClick={handleOptionClick}
      >
        {attribute.readings.length ? (
          <Content data-show-graph={showGraph}>
            <CardReadings attribute={attribute} />
            {showGraph && <CardGraph attribute={attribute} />}
          </Content>
        ) : (
          <NoReadings />
        )}
      </SurfaceCard>
    </Container>
  );
};
