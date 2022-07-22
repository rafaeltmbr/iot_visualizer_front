import React, { useMemo } from "react";
import { TbBoxOff } from "react-icons/tb";

import { IAttributeCardProps } from "./interfaces";
import {
  Content,
  LastReading,
  LastReadingDate,
  NoReadingsContainter,
  NoReadingsIcon,
  NoReadingsText,
  Reading,
} from "./styles";
import { SurfaceCard } from "../SurfaceCard";
import { ContentContext } from "../../../content/locale";
import { getLocaleContent } from "../../../utils/getLocaleContent";
import { getRecentReadings } from "../../../utils/getRecentReadings";
import { formatReading } from "../../../utils/formatReading";

export const ShortAttributeCard: React.FC<IAttributeCardProps> = ({
  attribute,
}) => {
  const options = [
    getLocaleContent("editOption"),
    getLocaleContent("removeOption"),
  ];

  const handleOptionClick = (option: ContentContext, index: number) => {
    console.log(option, index);
  };

  const lastReading = useMemo(
    () => getRecentReadings(attribute.readings)[0],
    [attribute.readings]
  );

  return (
    <SurfaceCard
      title={attribute.name}
      options={options}
      onOptionClick={handleOptionClick}
    >
      {lastReading ? (
        <Content>
          <Reading>
            {formatReading(
              attribute.type,
              attribute.formatting,
              lastReading.value
            )}
          </Reading>
          <LastReading>
            {getLocaleContent("readOn")}{" "}
            <LastReadingDate>
              {new Date(lastReading.updated_at).toLocaleString()}
            </LastReadingDate>
          </LastReading>
        </Content>
      ) : (
        <NoReadingsContainter>
          <NoReadingsIcon>
            <TbBoxOff />
          </NoReadingsIcon>
          <NoReadingsText>{getLocaleContent("noReadings")}</NoReadingsText>
        </NoReadingsContainter>
      )}
    </SurfaceCard>
  );
};
