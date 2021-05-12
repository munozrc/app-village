import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
  }
}

export const lightTheme: DefaultTheme = {
  text: "#363537",
  background: "#fff",
};

export const darkTheme: DefaultTheme = {
  text: "#fff",
  background: "#363537",
};
