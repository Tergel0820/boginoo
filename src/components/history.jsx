import React, { useEffect, useState } from "react";
import { Margin } from "./margin";
import { Text } from "./fontsize";
import { Flex } from "./flex";
import { HistoryStyle, Copy, Underline, Holboos } from "./css";

const History = ({ el }) => {
  const [copy, setCopy] = useState("");
  useEffect(() => {
    setCopy(`http://localhost:3000/${el.id}`);
  }, [el]);
  const [isCopied, setIsCopied] = useState(false);
  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  const handleCopyClick = () => {
    copyTextToClipboard(copy)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Margin top={20}>
      <HistoryStyle>
        <Flex horizontal jusCon={"space-between"}>
          <div>
            <Holboos>Өгөгдсөн холбоос:</Holboos>
            <Text default fontSize={"lg"}>
              {el.url}
            </Text>
          </div>
          <div>
            <Holboos>Богино холбоос:</Holboos>
            <Flex horizontal>
              <Text default fontSize={"lg"}>
                {copy}
              </Text>
              <Margin left={24}>
                <Copy onClick={handleCopyClick}>
                  <Text default nowrap>
                    Хуулж авах
                  </Text>
                </Copy>
              </Margin>
            </Flex>
          </div>
        </Flex>
        <Margin top={20}>
          <Underline></Underline>
        </Margin>
      </HistoryStyle>
    </Margin>
  );
};

export { History };