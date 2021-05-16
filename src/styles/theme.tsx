import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
    outlineColor: string;
    body: string;
  }
}

export const lightTheme: DefaultTheme = {
  text: "#23272a",
  background: "#e4e4e4",
  outlineColor: "#22b2da",
  body: "#fafafa",
};

export const darkTheme: DefaultTheme = {
  text: "#fafafa",
  background: "#23272a",
  outlineColor: "#22b2da",
  body: "#2c2f33",
};
