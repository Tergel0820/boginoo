import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { Header, Logo } from "./";
import { Flex } from "./flex";
import { Text } from "./fontsize";
import { Margin } from "./margin";
import { ButtonStyle, Container, HeaderText, ErrorCon } from "./css";
import { InpTitle } from "./inputtitle";
import { useAuthContext } from "../providers/authcontext";

const Login = () => {
  const { login, loginErr, user } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(7).max(20).required(),
  });
  const loginBtn = () => {
    schema
      .isValid({
        email: email,
        password: password,
      })
      .then((valid) => {
        if (valid === true) {
          login(email, password);
          setPasswordError("");
          setEmailError("");
          console.log(loginErr);
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
  useEffect(() => {
    if (user.email !== undefined) {
      window.location = "/";
    }
  }, [user]);
  return (
    <Container>
      <Flex>
        <Header hideButton={true} />
        <Margin top={80}>
          <Logo />
        </Margin>
        <Margin top={30}>
          <Text fontSize={"xxl"}>
            <HeaderText>Нэвтрэх</HeaderText>
          </Text>
        </Margin>
        <Margin top={20}>
          <InpTitle
            input={email}
            setInput={setEmail}
            title="Цахим хаяг"
            placeholder="name@mail.domain"
          />
        </Margin>
        <ErrorCon>
          {emailError[emailError.length - 1] === undefined ? (
            loginErr.includes("email") ? (
              loginErr
            ) : (
              <></>
            )
          ) : (
            emailError[emailError.length - 1]
          )}
        </ErrorCon>
        <InpTitle
          input={password}
          setInput={setPassword}
          type="password"
          title="Нууц үг"
          placeholder="••••••••••"
        />
        <ErrorCon>
          {passwordError[passwordError.length - 1] === undefined ? (
            loginErr.includes("password") ? (
              loginErr
            ) : (
              <></>
            )
          ) : (
            passwordError[passwordError.length - 1]
          )}
        </ErrorCon>
        <Margin top={20}>
          <Flex horizontal width={"381px"}>
            <Flex horizontal width={"100%"} jusCon={"space-between"}>
              <Flex horizontal>
                <input type="checkbox" />
                <div>Намайг сана</div>
              </Flex>
              <Link to="/forgetpassword">Нууц үгээ мартсан</Link>
            </Flex>
          </Flex>
        </Margin>
        <Margin top={20}>
          <ButtonStyle onClick={loginBtn} width={381}>
            <Text fontSize={"xl"}>Нэвтрэх</Text>
          </ButtonStyle>
        </Margin>
        <Margin top={20}>
          <Link to="/signup">Шинэ хэрэглэгч бол энд дарна уу?</Link>
        </Margin>
      </Flex>
    </Container>
  );
};

export { Login };