import React, { useMemo } from "react";

import { ICardReadingsProps } from "./interfaces";
import {
  LastReadingContainer,
  LastReadingDate,
  ReadingValue,
  Container,
} from "./styles";
import { formatReading } from "../../../../../utils/formatReading";
import { getLocaleContent } from "../../../../../utils/getLocaleContent";
import { getRecentReadings } from "../../../../../utils/getRecentReadings";

export const CardReadings: React.FC<ICardReadingsProps> = ({ attribute }) => {
  const lastReading = useMemo(
    () => getRecentReadings(attribute.readings)[0],
    [attribute.readings]
  );

  return (
    <Container>
      <ReadingValue>
        {formatReading(
          attribute.type,
          attribute.metadata.formatting,
          lastReading.value
        )}
      </ReadingValue>
      <LastReadingContainer>
        {getLocaleContent("readOn")}{" "}
        <LastReadingDate>
          {new Date(lastReading.updated_at).toLocaleString()}
        </LastReadingDate>
      </LastReadingContainer>
    </Container>
  );
};
