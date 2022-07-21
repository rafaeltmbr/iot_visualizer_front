import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "./styles";
import { SurfaceCard } from "../../components/SurfaceCard";
import { usePageConfig } from "../../hooks/pageConfig";

export const Device: React.FC = () => {
  const [device, setDevice] = useState({
    title: "Home Controller",
  });

  const { device_id } = useParams();
  const { setConfig } = usePageConfig();

  useEffect(() => {
    setConfig((cfg) => ({ ...cfg, headerTitle: "Dispositivo" }));
  }, []);

  return (
    <Container>
      <SurfaceCard
        title={device.title}
        titleHighlight
        options={["Editar", "Remover"]}
        onOptionClick={console.log}
      >
        Controller located at my home.
      </SurfaceCard>
    </Container>
  );
};
