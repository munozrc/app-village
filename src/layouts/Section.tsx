import styled from "styled-components";
import { Link } from "react-router-dom";
import GridIcon from "../assets/GridIcon";

interface Props {
  title: string;
  description: string;
  path: string;
  children: JSX.Element | JSX.Element[];
}

export default function Section(props: Props) {
  return (
    <Wrapper>
      <Header>
        <Title>{props.title}</Title>
        <SmallButton to={props.path}>
          <GridIcon /> Ver Todos
        </SmallButton>
      </Header>
      <Description>{props.description}</Description>
      {props.children}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: block;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

const SmallButton = styled(Link)`
  height: 28px;
  display: flex;
  align-items: center;
  text-decoration: none;
  background: #2d2d2d;
  color: #fff;
  border-radius: 50px;
  font-size: 16px;
  padding: 0px 15px;
  cursor: pointer;

  svg {
    margin-right: 6px;
  }
`;

const Description = styled.p`
  font-size: 18px;
  padding-top: 10px;
  margin-bottom: 16px;
  opacity: 0.75;
`;
