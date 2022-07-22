import React from "react";

import { IAttributeCardProps } from "./interfaces";
import { Content, GraphContainer } from "./styles";
import { NoReadings } from "./components/NoReadings";
import { CardReadings } from "./components/CardReadings";
import { SurfaceCard } from "../SurfaceCard";
import { ContentContext } from "../../../content/locale";
import { getLocaleContent } from "../../../utils/getLocaleContent";

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

  return (
    <SurfaceCard
      {...rest}
      title={attribute.name}
      options={options}
      onOptionClick={handleOptionClick}
    >
      {attribute.readings.length ? (
        <Content
          data-layout={attribute.metadata.layout}
          data-type={attribute.type}
        >
          <CardReadings attribute={attribute} />
          <GraphContainer
            data-show={
              attribute.metadata.layout === "long" && attribute.type !== "text"
            }
          >
            Graph
          </GraphContainer>
        </Content>
      ) : (
        <NoReadings />
      )}
    </SurfaceCard>
  );
};
