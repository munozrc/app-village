import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    body: string;
    text: string;
    toggleBorder: string;
    background: string;
  }
}

export const lightTheme: DefaultTheme = {
  body: "#fff",
  text: "#363537",
  toggleBorder: "#fff",
  background: "#363537",
};

export const darkTheme: DefaultTheme = {
  body: "#363537",
  text: "#fafafa",
  toggleBorder: "#6B8096",
  background: "#999",
};
