import React, { useMemo } from "react";
import { getLocaleContent } from "../../../utils/getLocaleContent";
import { SurfaceCard } from "../SurfaceCard";

import { IDeviceHeaderCardProps } from "./interfaces";
import { Content, Description, LastReading, LastReadingDate } from "./styles";

export const DeviceHeaderCard: React.FC<IDeviceHeaderCardProps> = ({
  device,
}) => {
  const lastReading = useMemo(() => {
    const readings = device.attributes
      .map((e) => e.readings)
      .flatMap((e) => e.map((e) => e.created_at))
      .sort();

    return readings[0] ? new Date(readings[0]).toLocaleString() : "";
  }, [device]);

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
