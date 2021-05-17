import styled from "styled-components";
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  WHITE_COLOR,
} from "../../styles/colors";

export const Container = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  background: ${PRIMARY_COLOR};
`;

export const ContainerCenter = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 30px;
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
  border-bottom: 4px solid ${SECONDARY_COLOR};
  color: ${SECONDARY_COLOR};
  cursor: pointer;
`;

export const ButtonLink = styled.button`
  background: transparent;
  height: 41px;
  padding: 10px 20px;
  border: none;
  color: ${SECONDARY_COLOR};
  font-size: 1em;
  font-weight: normal;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: ${SECONDARY_COLOR};
    color: ${WHITE_COLOR};
  }

  &:focus {
    box-shadow: 0px 0px 0px 3px ${WHITE_COLOR};
  }

  @media (max-width: 780px) {
    display: none;
  }
`;
