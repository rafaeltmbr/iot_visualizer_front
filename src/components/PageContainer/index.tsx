import React, { createContext, useState } from "react";

import {
  defaultPageConfig,
  IPageConfig,
  IPageContainerProps,
  IPageContextValue,
} from "./interfaces";
import { ChildrenContaienr, Container } from "./styles";
import { PageHeader } from "../PageHeader";
import { GlobalStyles } from "../../styles/GlobalStyles";

export const Ctx = createContext<IPageContextValue>({} as any);

export const PageContainer: React.FC<IPageContainerProps> = ({ children }) => {
  const [config, setConfig] = useState<IPageConfig>(() => defaultPageConfig);

  return (
    <Ctx.Provider value={{ config, setConfig }}>
      <Container>
        <PageHeader title={config.headerTitle} />
        <ChildrenContaienr>{children}</ChildrenContaienr>
        <GlobalStyles />
      </Container>
    </Ctx.Provider>
  );
};
