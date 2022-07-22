import styled from "styled-components";

export const Content = styled.div`
  &[data-layout="long"]:not([data-type="text"]) {
    display: flex;
  }
`;

export const GraphContainer = styled.div`
  &[data-show="false"] {
    display: none;
  }
`;
