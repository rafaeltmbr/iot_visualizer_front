import styled from "styled-components";

export const Content = styled.div`
  color: ${(props) => props.theme.colors.onSurface};
`;

export const Description = styled.div`
  padding: 0.5rem 0;
`;

export const LastReading = styled.div`
  font-size: 0.8125rem;
  text-align: right;
`;

export const LastReadingDate = styled.span`
  font-weight: 500;
`;
