import styled from "styled-components";

export const Containter = styled.div`
  height: 7rem;
  overflow: auto;
  white-space: nowrap;
  color: ${(props) => props.theme.colors.onSurface};

  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Icon = styled.div`
  margin-top: 0.75rem;
  font-size: 3rem;
`;

export const Text = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;
