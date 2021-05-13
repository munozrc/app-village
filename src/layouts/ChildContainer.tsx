import { FC } from "react";
import styled from "styled-components";

const ChildContainer: FC = ({ children }) => {
  return <Container> {children}</Container>;
};

const Container = styled.main`
  width: 100%;
  height: calc(100vh - 80px - 40px);
  display: flex;
  flex-direction: row;
`;

export default ChildContainer;
