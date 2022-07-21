import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  background-color: ${(props) => props.theme.colors.background};
  height: 100%;
`;

export const ChildrenContaienr = styled.div`
  height: 100%;
  width: 100%;
  max-width: ${(props) => props.theme.dimensions.pageMaxWidth};
  margin: 0 auto;
  overflow: auto;
`;
