import styled from "styled-components";

const FontSizes = {
  xxl: "2rem", //    32px
  xl: "	1.25rem", // 20px
  lg: "1.125rem", // 18px
  md: "1rem", //     16px
  sm: "0.875rem", // 14px
  xs: "0.75rem", //  12px
};

export const Text = styled.div`
  white-space: ${(props) => (props.nowrap ? "nowrap" : "default")};
  text-transform: ${(props) => (props.default ? "default" : "uppercase")};
  font-size: ${(props) =>
    props.fontSize ? FontSizes[props.fontSize] : FontSizes.md};

  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 400)};
`;