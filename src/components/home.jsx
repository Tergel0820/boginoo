import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { Header, Logo, History } from "./";
import { Margin } from "./margin";
import { Text } from "./fontsize";
import { Flex } from "./flex";
import {
  Container,
  InputStyle,
  ButtonStyle,
  HistoryCon,
  HeaderText,
} from "./css";
import { useCollection, useFirebase } from "../firebase";
import { useAuthContext } from "../providers/authcontext";

const Home = () => {
  const [URL, setURL] = useState("");
  const { firestore } = useFirebase();
  const { user } = useAuthContext();
  const { data: urls } = useCollection(`allUrls`);
  const [data, setData] = useState([]);
  const [noUser, setNoUser] = useState("");
  useEffect(() => {
    if (urls) {
      setData(urls);
    }
  }, [urls]);
  const URLHandler = (e) => {
    setURL(e.target.value);
  };
  let alphabet =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");

  let schema = yup.object().shape({
    url: yup.string().url().required(),
  });
  const URLShorter = () => {
    let randomURL = "";
    for (let i = 0; i < 6; i++) {
      randomURL = randomURL + alphabet[Math.floor(Math.random() * 61)];
    }
    setNoUser(randomURL);
    schema
      .isValid({
        url: URL,
      })
      .then((valid) => {
        if (valid === true) {
          if (user.email !== undefined) {
            firestore.collection("allUrls").doc(randomURL).set({
              url: URL,
              email: user.email,
            });
          } else {
            firestore.collection("allUrls").doc(randomURL).set({
              url: URL,
            });
          }
        }
      });
    setURL("");
  };
  return (
    <Container>
      <Flex>
        <Header />
        <Margin top={160}>
          <Logo />
        </Margin>
        <Margin top={40}>
          <Flex horizontal>
            <InputStyle
              placeholder="https://www.web-huudas.mn"
              value={URL}
              onChange={URLHandler}
              width={581}
            />
            <Margin left={16}>
              <ButtonStyle onClick={URLShorter} width={192}>
                <Text fontSize={"xl"}>Богиносгох</Text>
              </ButtonStyle>
            </Margin>
          </Flex>
        </Margin>
        {user.email !== undefined ? (
          <Margin top={30}>
            <HistoryCon>
              <Text default fontSize={"xxl"}>
                <HeaderText>Түүх</HeaderText>
              </Text>
              {data !== undefined ? (
                data.map((el) =>
                  el.email === user.email ? <History el={el} /> : <></>
                )
              ) : (
                <></>
              )}
            </HistoryCon>
          </Margin>
        ) : (
          <Margin top={30}>
            <HistoryCon>
              {data !== undefined ? (
                data.map((el) =>
                  el.id === noUser ? <History el={el} /> : <></>
                )
              ) : (
                <></>
              )}
            </HistoryCon>
          </Margin>
        )}
      </Flex>
    </Container>
  );
};

export { Home };