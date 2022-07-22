import styled from "styled-components";

export const Container = styled.div``;

export const ReadingValue = styled.div`
  --attribute-reading-height: calc(var(--attribute-card-content-height) - 2rem);

  height: var(--attribute-reading-height);
  line-height: var(--attribute-reading-height);
  font-size: 3rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.onSurfaceHighlight};
  text-align: center;
  margin: 0.5rem 0;

  overflow: auto hidden;
  white-space: nowrap;

  @media (max-width: ${(props) => props.theme.breakingsPoints.mobile}px) {
    --attribute-reading-height: calc(
      var(--attribute-card-content-height) - 2rem -
        var(--attribute-card-graph-aditional-height)
    );
  }
`;

export const LastReadingContainer = styled.div`
  font-size: 0.8125rem;
  line-height: 1rem;
  color: ${(props) => props.theme.colors.onSurface};
`;

export const LastReadingDate = styled.span`
  font-weight: 500;
`;
