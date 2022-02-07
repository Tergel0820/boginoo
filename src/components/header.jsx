import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HeaderCon, HeaderText, ButtonStyle, Logout, LogoutBtn } from "./css";
import { Margin } from "./margin";
import { Flex } from "./flex";
import { Text } from "./fontsize";
import { useAuthContext } from "../providers/authcontext";
import IconDown from "../assets/icon-down.svg";

const Header = ({ hideButton }) => {
  const [headerBtn, setHeaderBtn] = useState(false);
  const [logoutBtn, setLogoutBtn] = useState(false);
  const { logOut, user } = useAuthContext();
  useEffect(() => {
    if (user.email === undefined) {
      setHeaderBtn(false);
    } else {
      setHeaderBtn(true);
    }
  }, [user]);
  const LogoutBTN = () => {
    logOut();
  };
  return (
    <HeaderCon>
      <Margin top={30}>
        <Flex horizontal jusCon={"flex-end"}>
          <Margin right={35}>
            <Text fontSize={"xl"}>
              <HeaderText>Хэрхэн ажилладаж вэ?</HeaderText>
            </Text>
          </Margin>
          {headerBtn === true ? (
            <Logout onClick={() => setLogoutBtn(!logoutBtn)}>
              <Flex horizontal>
                <Text fontWeight={700} fontSize={20}>
                  {user.email}
                </Text>
                <Margin left={10}>
                  <img src={IconDown} />
                </Margin>
              </Flex>
              <LogoutBtn
                onClick={LogoutBTN}
                hider={logoutBtn === false ? "hide" : "display"}
              >
                <ButtonStyle width={100}>
                  <Text fontSize={"lg"}>Гарах</Text>
                </ButtonStyle>
              </LogoutBtn>
            </Logout>
          ) : (
            <Link to="/login" style={{ textDecoration: "none" }}>
              <ButtonStyle
                width={191}
                style={
                  hideButton === true
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <Text fontSize={"xl"}>Нэвтрэх</Text>
              </ButtonStyle>
            </Link>
          )}
        </Flex>
      </Margin>
    </HeaderCon>
  );
};

export { Header };