import React from "react";
import { useParams } from "react-router-dom";

import { Container } from "./styles";

export const Device: React.FC = () => {
  const { device_id } = useParams();

  return <Container>Device {device_id}</Container>;
};
