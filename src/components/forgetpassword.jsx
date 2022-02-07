import React, { useState } from "react";
import { Header, Logo } from "./";
import { Flex } from "./flex";
import { Text } from "./fontsize";
import { Margin } from "./margin";
import { ButtonStyle, Container, HeaderText, ErrorCon } from "./css";
import { InpTitle } from "./inputtitle";
import { useFirebase } from "../firebase";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const { firebase } = useFirebase();
  const [resetPassErr, setResetPassErr] = useState("");
  const forgetPassword = () => {
    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setResetPassErr("Password reset email sent!");
      })
      .catch((error) => {
        let errorCode = error.code;
        setResetPassErr(errorCode);
      });
  };
  return (
    <Container>
      <Flex>
        <Header hideButton={true} />
        <Margin top={80}>
          <Logo />
        </Margin>
        <Margin top={30}>
          <Text fontSize={"xxl"}>
            <HeaderText>Нууц үг сэргээх</HeaderText>
          </Text>
        </Margin>
        <Margin top={20}>
          <Text>
            Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.
          </Text>
        </Margin>
        <Margin top={20}>
          <InpTitle
            title="Цахим хаяг"
            placeholder="name@mail.domain"
            input={email}
            setInput={setEmail}
          />
        </Margin>
        <ErrorCon
          style={{
            color:
              resetPassErr === "Password reset email sent!" ? "#02b589" : "red",
          }}
        >
          {resetPassErr}
        </ErrorCon>
        <ButtonStyle onClick={() => forgetPassword(email)} width={381}>
          <Text fontSize={"xl"}>Илгээх</Text>
        </ButtonStyle>
      </Flex>
    </Container>
  );
};

export { ForgetPassword };