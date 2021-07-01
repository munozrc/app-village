import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bodyColor: string;
    cardColor: string;
    textColor: string;
    brandColor: string;
  }
}

export const defaultTheme: DefaultTheme = {
  bodyColor: "#121212",
  cardColor: "#2d2e30",
  textColor: "#fff",
  brandColor: "#61afef",
};
