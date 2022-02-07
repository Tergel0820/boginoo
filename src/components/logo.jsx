import React, { useEffect, useState } from "react";
import CenterLine from "../assets/center.svg";
import RightSemiCircle from "../assets/right.svg";
import LeftSemiCircle from "../assets/left.svg";
import Boginoo from "../assets/Boginoo.svg";
import { Margin } from "./margin";
import { Flex } from "./flex";
import {
  LogoLeftRightSide,
  LeftCenterLineStyle,
  RightCenterLineStyle,
} from "./css";

const Logo = () => {
  const [logoPos, setLogoPos] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLogoPos(!logoPos);
    }, 1500);
  }, []);
  return (
    <Flex>
      <Flex horizontal>
        <LogoLeftRightSide
          style={logoPos === true ? { left: "40px" } : { left: "5px" }}
        >
          <Flex horizontal>
            <img src={LeftSemiCircle} />
            <LeftCenterLineStyle src={CenterLine} />
          </Flex>
        </LogoLeftRightSide>
        <img src={CenterLine} />
        <LogoLeftRightSide
          style={logoPos === true ? { right: "40px" } : { right: "5px" }}
        >
          <Flex horizontal>
            <RightCenterLineStyle src={CenterLine} />
            <img src={RightSemiCircle} />
          </Flex>
        </LogoLeftRightSide>
      </Flex>
      <Margin top={24}>
        <img src={Boginoo} />
      </Margin>
    </Flex>
  );
};

export { Logo };