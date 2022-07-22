import React from "react";

import { IAttributeCardProps } from "./interfaces";
import { Content } from "./styles";
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
          {showGraph && <CardGraph readings={attribute.readings} />}
        </Content>
      ) : (
        <NoReadings />
      )}
    </SurfaceCard>
  );
};
