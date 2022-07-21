import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: ${(props) => props.theme.dimensions.headerHeight};
  background-color: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.onHeader};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.theme.dimensions.headerMaxWidth};
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PageLogo = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.onHeaderHighlight};
  padding: 0 1rem;
  user-select: none;

  @media (max-width: ${(props) => props.theme.breakingsPoints.mobile}px) {
    padding: 0 0.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakingsPoints.smallMobile}px) {
    padding: 0 0.25rem;
  }
`;

export const PageTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
  padding: 0 0.25rem 0 1rem;
  flex: 1;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: ${(props) => props.theme.breakingsPoints.smallMobile}px) {
    display: none;
  }
`;

export const UserMenuWrapper = styled.div`
  font-size: 2rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.breakingsPoints.mobile}px) {
    padding: 0 0.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakingsPoints.smallMobile}px) {
    padding: 0 0.25rem;
  }
`;
