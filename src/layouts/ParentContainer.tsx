import { FC } from "react";
import styled from "styled-components";

const ParentContainer: FC = ({ children }) => {
  return <Container> {children}</Container>;
};

const Container = styled.main`
  width: 100vw;
  max-width: 1200px;
  height: calc(100vh - 95px);
  margin: 0 auto;
  padding: 0 30px;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

export default ParentContainer;
