import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  user-select: none;
  color: ${(props) => props.theme.colors.onSurfaceHighlight};
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;

  &[data-show="false"] {
    opacity: 0;
    pointer-events: none;
  }
`;

export const OptionsButton = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  transition-duration: 0.25s;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme.colors.onSurfaceHover};
  }
`;

export const OptionsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.surface};
  padding: 1rem 0;
  border-radius: 0.375rem;
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.25);
  transition-duration: 0.2s;

  position: absolute;
  z-index: 101;
  right: 0;
  top: 2rem;

  &[data-show="false"] {
    transform: scale(0.8);
    transform-origin: 100% 0;
    opacity: 0;
    pointer-events: none;
  }
`;

export const Option = styled.div`
  padding: 0.5rem 1.5rem;
  transition-duration: 0.25s;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.onSurfaceHover};
  }
`;
