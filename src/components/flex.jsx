import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.horizontal ? "row" : "column")};
  justify-content: ${(props) => (props.jusCon ? props.jusCon : "flex-start")};
  width: ${(props) => props.width};
`;