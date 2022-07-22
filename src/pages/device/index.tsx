import React, { useEffect, useState } from "react";

import default_device from "./default_device.json";
import { AttributesContainer, Container } from "./styles";
import { usePageConfig } from "../../hooks/pageConfig";
import { IDevice } from "../../interfaces/device";
import { DeviceHeaderCard } from "../../components/Cards/DeviceHeaderCard";
import { getLocaleContent } from "../../utils/getLocaleContent";
import { AttributeCard } from "../../components/Cards/AttributeCard";
import { NewButton } from "../../components/Buttons/NewButton";

export const Device: React.FC = () => {
  const [device] = useState<IDevice>(default_device as any);

  const { setConfig } = usePageConfig();

  useEffect(() => {
    const headerTitle = device
      ? `${device.name} - ${getLocaleContent("devicePageTitle")}`
      : "";

    setConfig((cfg) => ({ ...cfg, headerTitle }));
  }, [device, setConfig]);

  return (
    <Container>
      <DeviceHeaderCard device={device} />
      <NewButton onClick={() => console.log("new device")}>
        {getLocaleContent("newAttribute")}
      </NewButton>
      <AttributesContainer>
        {device.attributes.map((attribute) => (
          <AttributeCard
            key={attribute.id}
            attribute={attribute}
            className={attribute.metadata.layout}
          />
        ))}
      </AttributesContainer>
    </Container>
  );
};
