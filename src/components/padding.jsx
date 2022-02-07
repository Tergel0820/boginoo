import styled from "styled-components";

export const Padding = styled.div`
  padding: ${(props) => props.all}px;
  padding-top: ${(props) => props.top}px;
  padding-bottom: ${(props) => props.bottom}px;
  padding-left: ${(props) => props.left}px;
  padding-right: ${(props) => props.righ}px;
`;