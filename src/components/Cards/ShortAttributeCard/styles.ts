import styled from "styled-components";

export const Content = styled.div``;

export const Reading = styled.div`
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

export const LastReading = styled.div`
  font-size: 0.8125rem;
  line-height: 1rem;
  color: ${(props) => props.theme.colors.onSurface};
`;

export const LastReadingDate = styled.span`
  font-weight: 500;
`;

export const NoReadingsContainter = styled.div`
  height: 7rem;
  overflow: auto;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.onSurface};

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const NoReadingsIcon = styled.div`
  margin-top: 0.75rem;
  font-size: 3rem;
`;

export const NoReadingsText = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;
