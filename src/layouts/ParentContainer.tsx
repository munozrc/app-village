import { FC } from "react";
import styled from "styled-components";

const ParentContainer: FC = ({ children }) => {
  return <Container> {children}</Container>;
};

const Container = styled.main`
  width: 100vw;
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 0 20px;
  }
`;

export default ParentContainer;
