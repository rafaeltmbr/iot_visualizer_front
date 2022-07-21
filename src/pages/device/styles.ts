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
