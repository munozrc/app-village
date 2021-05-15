import styled from "styled-components";
import CardSimple from "./CardSimple";

export default function LastAdded() {
  return (
    <Wrapper>
      <Title>Añadidos Recientemente</Title>
      <List>
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
        <CardSimple />
      </List>
    </Wrapper>
  );
}

const List = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  & > button {
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.h3`
  float: right;
  font-size: 1.1em;
  margin-bottom: 10px;
  margin-right: 30px;

  @media (max-width: 459px) {
    margin-right: 10px;
  }
`;
