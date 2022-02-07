import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
`;
export const HeaderCon = styled.div`
  width: 90%;
`;
export const HeaderText = styled.div`
  color: #02b589;
  font-weight: 700;
`;
export const LogoLeftRightSide = styled.div`
  position: relative;
  transition: left 0.4s, right 0.4s;
`;
export const LeftCenterLineStyle = styled.img`
  position: relative;
  left: -12px;
`;
export const RightCenterLineStyle = styled.img`
  position: relative;
  left: 12px;
`;
export const InputStyle = styled.input`
  height: 42px;
  border-radius: 100px;
  border: none;
  outline: none;
  box-shadow: 0 0 5px 0 gray;
  font-size: 18px;
  padding-left: 20px;
  padding-right: 20px;
  width: ${(props) => (props.width ? props.width : 200)}px;
`;
export const ButtonStyle = styled.button`
  height: 44px;
  border: none;
  border-radius: 100px;
  color: #fff;
  background-color: #02b589;
  cursor: pointer;
  width: ${(props) => (props.width ? props.width : 200)}px;
`;
export const Logout = styled.div`
  position: relative;
  cursor: pointer;
`;
export const LogoutBtn = styled.div`
  position: absolute;
  cursor: pointer;
  top: 25px;
  left: 50%;
  display: ${(props) => (props.hider === "hide" ? "none" : "flex")};
`;
export const ErrorCon = styled.div`
  height: 20px;
  color: red;
`;
export const HistoryCon = styled.div`
  width: 829px;
`;
export const HistoryStyle = styled.div`
  width: 100%;
`;
export const Copy = styled.div`
  text-decoration: underline;
  color: #02b589;
  cursor: pointer;
`;
export const Underline = styled.div`
  border: 1px solid #e2e2e2;
  width: 100%;
`;
export const Holboos = styled.div`
  opacity: 0.5;
`;