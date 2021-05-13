import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: string;
    background: string;
    outlineColor: string;
  }
}

export const lightTheme: DefaultTheme = {
  text: "#181818",
  background: "#fff",
  outlineColor: "#d72323",
};

export const darkTheme: DefaultTheme = {
  text: "#fff",
  background: "#181818",
  outlineColor: "#ff5959",
};
