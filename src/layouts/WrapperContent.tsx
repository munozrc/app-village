import { FC } from "react";
import styled from "styled-components";

const WrapperContent: FC = ({ children }) => {
  return <Container> {children}</Container>;
};

const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.background};
  border-radius: 4px;
`;

export default WrapperContent;
