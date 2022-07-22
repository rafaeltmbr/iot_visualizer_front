import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1rem;

  @media (max-width: ${(props) => props.theme.breakingsPoints.mobile}px) {
    padding: 1rem 0.5rem;
  }

  @media (max-width: ${(props) => props.theme.breakingsPoints.smallMobile}px) {
    padding: 1rem 0.25rem;
  }
`;

export const AttributesContainer = styled.div`
  margin-top: 2rem;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, calc(50% - 0.5rem));
  gap: 1rem;

  & > .long {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  @media (max-width: ${(props) => props.theme.breakingsPoints.mobile}px) {
    display: block;

    & > :nth-child(n + 2) {
      margin-top: 1rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakingsPoints.smallMobile}px) {
    & > :nth-child(n + 2) {
      margin-top: 0.5rem;
    }
  }
`;
