import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { Header, Logo } from "./";
import { Flex } from "./flex";
import { Text } from "./fontsize";
import { Margin } from "./margin";
import { ButtonStyle, Container, HeaderText, ErrorCon } from "./css";
import { InpTitle } from "./inputtitle";
import { useAuthContext } from "../providers/authcontext";

const Signup = () => {
  const { signUp, signUpErr, user } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(7).max(20).required(),
  });
  useEffect(() => {
    if (user.email !== undefined) {
      window.location = "/";
    }
  }, [user]);
  const signupBtn = () => {
    schema
      .isValid({
        email: email,
        password: password,
      })
      .then((valid) => {
        if (valid === true) {
          if (password === repeatPassword) {
            signUp(email, password);
            setEmailError("");
            setPasswordError("");
          } else {
            console.log("password zurj baina");
          }
        } else {
          schema
            .validate(
              { email: email, password: password },
              { abortEarly: false }
            )
            .catch((err) => {
              setEmailError(err.errors.filter((el) => el.includes("email")));
              setPasswordError(
                err.errors.filter((el) => el.includes("password"))
              );
            });
        }
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
            <HeaderText>Бүртгүүлэх</HeaderText>
          </Text>
        </Margin>
        <Margin top={20}>
          <InpTitle
            title="Цахим хаяг"
            input={email}
            setInput={setEmail}
            placeholder="name@mail.domain"
          />
        </Margin>
        <ErrorCon>
          {emailError[emailError.length - 1] === undefined ? (
            signUpErr.includes("email") ? (
              signUpErr
            ) : (
              <></>
            )
          ) : (
            emailError[emailError.length - 1]
          )}
        </ErrorCon>
        <InpTitle
          title="Нууц үг"
          input={password}
          setInput={setPassword}
          type="password"
          placeholder="••••••••••"
        />
        <ErrorCon>
          {passwordError[passwordError.length - 1] === undefined ? (
            signUpErr.includes("password") ? (
              signUpErr
            ) : (
              <></>
            )
          ) : (
            passwordError[passwordError.length - 1]
          )}
        </ErrorCon>
        <InpTitle
          title="Нууц үгээ давтна уу?"
          input={repeatPassword}
          setInput={setRepeatPassword}
          type="password"
          placeholder="••••••••••"
        />
        <ErrorCon>
          {password !== repeatPassword ? "Passwords do not match" : ""}
        </ErrorCon>
        <ButtonStyle onClick={signupBtn} width={381}>
          <Text fontSize={"xl"}>Бүртгүүлэх</Text>
        </ButtonStyle>
      </Flex>
    </Container>
  );
};

export { Signup };