import styled from "styled-components";

export const Container = styled.div`
  --surface-card-horizontal-padding: 1.5rem;

  width: 100%;
  background-color: ${(props) => props.theme.colors.surface};
  border-radius: 0.5rem;
  border: 1px solid ${(props) => props.theme.colors.surfaceBorder};
  padding: 1rem 0;

  @media (max-width: ${(props) => props.theme.breakingsPoints.smallMobile}px) {
    --surface-card-horizontal-padding: 1rem;
  }
`;

export const Header = styled.div`
  padding: 0 calc(var(--surface-card-horizontal-padding) - 1rem) 0
    var(--surface-card-horizontal-padding);
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
  color: ${(props) => props.theme.colors.onSurface};
  flex: 1;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &[data-highlight="true"] {
    font-weight: 600;
    color: ${(props) => props.theme.colors.onSurfaceHighlight};
  }

  &[data-pad-right="true"] {
    padding-right: calc(var(--surface-card-horizontal-padding) - 0.5rem);
  }
`;

export const ChildrenContainer = styled.div`
  padding: 0.5rem var(--surface-card-horizontal-padding) 0;
`;
