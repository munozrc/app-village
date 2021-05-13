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
  background: "#fff",
  outlineColor: "#22b2da",
  body: "#e4e4e4",
};

export const darkTheme: DefaultTheme = {
  text: "#fff",
  background: "#2c2f33",
  outlineColor: "#22b2da",
  body: "#23272a",
};
