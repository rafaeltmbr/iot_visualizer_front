import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

import { INewButtonProps } from "./interface";
import { Container, IconContainer } from "./styles";

export const NewButton: React.FC<INewButtonProps> = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      {children}
      <IconContainer>
        <AiOutlinePlus />
      </IconContainer>
    </Container>
  );
};
