import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 1rem;

  & > :nth-child(2) {
    margin: 2rem 0 2rem auto;
  }

  @media (max-width: ${(props) => props.theme.breakingsPoints.mobile}px) {
    padding: 1rem 0.5rem;

    & > :nth-child(2) {
      margin: 1.5rem 0 1.5rem auto;
    }
  }

  @media (max-width: ${(props) => props.theme.breakingsPoints.smallMobile}px) {
    padding: 1rem 0.25rem;

    & > :nth-child(2) {
      margin: 1rem 0 1rem auto;
    }
  }
`;

export const AttributesContainer = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(2, calc(50% - 0.5rem));
  gap: 1rem;

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
