import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 120px;
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
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

export const Logo = styled.h1`
  font-size: 25px;
  font-weight: 700;
  border-bottom: 4px solid #61afef;
  color: #fff;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  color: #fff;
  background: #2d2d2d;
  font-size: 18px;
  font-weight: normal;
  text-decoration: none;
  border-radius: 50px;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  & > svg {
    fill: #fff;
    font-size: 22px;
    margin-right: 10px;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;
