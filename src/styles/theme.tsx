import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
    body: string;
  }
}

export const lightTheme: DefaultTheme = {
  text: "#23272a",
  background: "#fafafa",
  body: "#e4e4e4",
};

export const darkTheme: DefaultTheme = {
  text: "#fafafa",
  background: "#23272a",
  body: "#2c2f33",
};
