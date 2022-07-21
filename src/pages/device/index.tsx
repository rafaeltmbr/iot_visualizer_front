import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "./styles";
import { usePageConfig } from "../../hooks/pageConfig";
import { IDevice } from "../../interfaces/device";

import default_device from "./default_device.json";
import { DeviceHeaderCard } from "../../components/Cards/DeviceHeaderCard";
import { getLocaleContent } from "../../utils/getLocaleContent";

export const Device: React.FC = () => {
  const [device, setDevice] = useState<IDevice>(default_device);

  const { device_id } = useParams();
  const { setConfig } = usePageConfig();

  useEffect(() => {
    const headerTitle = device
      ? `${device.name} - ${getLocaleContent("devicePageTitle")}`
      : "";

    setConfig((cfg) => ({ ...cfg, headerTitle }));
  }, [device]);

  return (
    <Container>
      <DeviceHeaderCard device={device} />
    </Container>
  );
};
