import styled from "styled-components";

export const Container = styled.div``;

export const ReadingValue = styled.div`
  height: 5rem;
  font-size: 3rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.onSurfaceHighlight};
  text-align: center;
  margin-bottom: 1rem;
  padding: 0.25rem 0;

  overflow: auto;
  white-space: nowrap;
`;

export const LastReadingContainer = styled.div`
  font-size: 0.8125rem;
  line-height: 1rem;
  color: ${(props) => props.theme.colors.onSurface};
`;

export const LastReadingDate = styled.span`
  font-weight: 500;
`;
