import React from "react";
import { OptionsMenu } from "../OptionsMenu";

import { ISurfaceCardProps } from "./interfaces";
import { ChildrenContainer, Container, Header, Title } from "./styles";

export const SurfaceCard: React.FC<ISurfaceCardProps> = ({
  title,
  titleHighlight,
  children,
  options,
  onOptionClick,
}) => {
  const showOptions = !!(options && options.length && onOptionClick);

  return (
    <Container>
      <Header>
        <Title data-highlight={!!titleHighlight} data-pad-right={!showOptions}>
          {title}
        </Title>
        {showOptions && (
          <OptionsMenu options={options} onOptionClick={onOptionClick} />
        )}
      </Header>
      <ChildrenContainer>{children}</ChildrenContainer>
    </Container>
  );
};
