import styled from "styled-components";

export const Container = styled.div`
  border-radius: 0.25rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.onPrimary};
  font-weight: 500;
  line-height: 1em;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  width: fit-content;
  transition-duration: 0.2s;
  user-select: none;
  cursor: pointer;

  display: flex;
  align-items: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryHover};
  }
`;

export const IconContainer = styled.span`
  margin-left: 0.5rem;
  font-size: 1.25rem;
  font-family: Roboto;

  display: flex;
  align-items: center;
  justify-content: center;
`;
