import React, { useEffect, useState } from "react";

import { AttributesContainer, Container } from "./styles";
import { usePageConfig } from "../../hooks/pageConfig";
import { IDevice } from "../../interfaces/device";
import { DeviceHeaderCard } from "../../components/Cards/DeviceHeaderCard";
import { getLocaleContent } from "../../utils/getLocaleContent";
import { AttributeCard } from "../../components/Cards/AttributeCard";
import { NewButton } from "../../components/Buttons/NewButton";
import { getDevice } from "../../controllers/device/getDevice";
import { useParams } from "react-router-dom";

export const Device: React.FC = () => {
  const [device, setDevice] = useState<IDevice | null>(null);

  const { device_id } = useParams();
  const { setConfig } = usePageConfig();

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getDevice(String(device_id));

        setDevice(data);
      } catch (err) {
        console.error((err as Error).message);
      }
    };

    load();
  }, [device_id]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_API_WS_URL}/device/${device_id}`;
    const ws = new WebSocket(url);

    const handler = (e: MessageEvent<string>) => {
      if (!e.data) return;

      setDevice(JSON.parse(e.data));
    };

    ws.onmessage = handler;

    return () => ws.close();
  }, [device_id]);

  useEffect(() => {
    const headerTitle = device
      ? `${device.name} - ${getLocaleContent("devicePageTitle")}`
      : "";

    setConfig((cfg) => ({ ...cfg, headerTitle }));
  }, [device, setConfig]);

  return (
    device && (
      <Container>
        <DeviceHeaderCard device={device} />
        <NewButton onClick={() => console.log("new device")}>
          {getLocaleContent("newAttribute")}
        </NewButton>
        <AttributesContainer>
          {device.attributes.map((attribute) => (
            <AttributeCard key={attribute.id} attribute={attribute} />
          ))}
        </AttributesContainer>
      </Container>
    )
  );
};
