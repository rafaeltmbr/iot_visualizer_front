import React, { useMemo } from "react";

import { IDeviceHeaderCardProps } from "./interfaces";
import { Content, Description, LastReading, LastReadingDate } from "./styles";
import { getLocaleContent } from "../../../utils/getLocaleContent";
import { SurfaceCard } from "../SurfaceCard";
import { getRecentlyReadAttributes } from "../../../utils/getRecentlyReadAttributes";

export const DeviceHeaderCard: React.FC<IDeviceHeaderCardProps> = ({
  device,
}) => {
  const lastReading = useMemo(() => {
    const readings = getRecentlyReadAttributes(device.attributes)[0]?.readings;

    return readings[0] ? new Date(readings[0].updated_at).toLocaleString() : "";
  }, [device.attributes]);

  return (
    <SurfaceCard title={device.name} titleHighlight>
      <Content>
        <Description>{device.description}</Description>
        <LastReading>
          {getLocaleContent("lastReadingOn")}{" "}
          <LastReadingDate>{lastReading}</LastReadingDate>
        </LastReading>
      </Content>
    </SurfaceCard>
  );
};
