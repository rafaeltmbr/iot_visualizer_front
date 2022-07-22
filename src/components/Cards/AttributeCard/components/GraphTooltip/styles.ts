import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  padding: 1rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  user-select: none;
`;

export const YValue = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

export const XValue = styled.div`
  margin-top: 0.75rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors.onSurfaceHighlight};
`;
