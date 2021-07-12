import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 120px;
  display: flex;
  justify-content: center;
`;

export const ContainerCenter = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;

export const Logo = styled(Link)`
  font-size: 28px;
  font-weight: 700;
  border-bottom: 5px solid #61afef;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;
