import { FC } from "react";
import styled from "styled-components";

const ParentContainer: FC = ({ children }) => {
  return <Container> {children}</Container>;
};

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 70px 1fr;
  grid-template-areas:
    "header header"
    "sidebar page"
    "sidebar page"
    "sidebar page"
    "sidebar page";
`;

export const HeaderContainer = styled.header`
  grid-area: header;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "logo tools";
  border-bottom: 1px solid rgba(68, 68, 68, 0.2);
`;

export const SidebarContainer = styled.div`
  grid-area: sidebar;
  border-right: 1px solid rgba(68, 68, 68, 0.2);
`;

export const PageContainer = styled.div`
  grid-area: page;
`;

export default ParentContainer;
