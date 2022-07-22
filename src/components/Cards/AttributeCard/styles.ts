import styled from "styled-components";

export const Container = styled.div`
  --attribute-card-content-height: 7rem;
  --attribute-card-graph-aditional-height: 0rem;

  &[data-layout="long"] {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  &[data-show-graph="true"] {
    --attribute-card-content-height: 9rem;
    --attribute-card-graph-aditional-height: 2rem;
  }
`;

export const Content = styled.div`
  &[data-show-graph="true"] {
    display: flex;

    & > :first-child {
      width: 100%;
      max-width: 15rem;
    }
  }

  @media (max-width: ${(props) => props.theme.breakingsPoints.mobile}px) {
    &[data-show-graph="true"] {
      display: block;

      & > :first-child {
        margin-bottom: 1.5rem;
        width: initial;
        max-width: initial;
      }
    }
  }
`;
