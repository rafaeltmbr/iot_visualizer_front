import React from "react";
import { HiUserCircle } from "react-icons/hi";

import { IPageHeaderProps } from "./interfaces";
import {
  Container,
  ContentWrapper,
  PageLogo,
  PageTitle,
  UserMenuWrapper,
} from "./styles";

export const PageHeader: React.FC<IPageHeaderProps> = ({ title }) => {
  return (
    <Container>
      <ContentWrapper>
        <PageLogo>IoT Visualizer</PageLogo>
        <PageTitle>{title}</PageTitle>
        <UserMenuWrapper>
          <HiUserCircle />
        </UserMenuWrapper>
      </ContentWrapper>
    </Container>
  );
};
