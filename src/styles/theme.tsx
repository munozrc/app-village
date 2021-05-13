import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
    outlineColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  text: "#23272a",
  background: "#fff",
  outlineColor: "#22b2da",
};

export const darkTheme: DefaultTheme = {
  text: "#fff",
  background: "#23272a",
  outlineColor: "#22b2da",
};
