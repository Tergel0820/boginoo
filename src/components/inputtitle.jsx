import React from "react";
import { Padding } from "./padding";
import { Margin } from "./margin";
import { InputStyle } from "./css";

const InpTitle = ({ title, placeholder, input, setInput, type }) => {
  const emailHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <Padding left={20}>{title}</Padding>
      <Margin top={5}>
        <InputStyle
          type={type}
          onChange={emailHandler}
          value={input}
          width={341}
          placeholder={placeholder}
        />
      </Margin>
    </div>
  );
};

export { InpTitle };