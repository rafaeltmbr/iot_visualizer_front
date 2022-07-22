import React from "react";
import { TbBoxOff } from "react-icons/tb";

import { Containter, Icon, Text } from "./styles";
import { INoReadingsProps } from "./interfaces";
import { getLocaleContent } from "../../../../../utils/getLocaleContent";

export const NoReadings: React.FC<INoReadingsProps> = () => (
  <Containter>
    <Icon>
      <TbBoxOff />
    </Icon>
    <Text>{getLocaleContent("noReadings")}</Text>
  </Containter>
);
