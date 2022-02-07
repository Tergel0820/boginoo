import styled from "styled-components";

export const Margin = styled.div`
  margin: ${(props) => props.all}px;
  margin-top: ${(props) => props.top}px;
  margin-bottom: ${(props) => props.bottom}px;
  margin-left: ${(props) => props.left}px;
  margin-right: ${(props) => props.right}px;
`;