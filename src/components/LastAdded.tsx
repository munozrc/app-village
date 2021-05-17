import styled from "styled-components";
import CardSimple from "./CardSimple";

import programsList from "../data/programs.json";

type programsProps = {
  id: number;
  icon: string;
  title: string;
  category: string;
};

export default function LastAdded() {
  return (
    <Wrapper>
      <Title>Añadidos Recientemente</Title>
      <List>
        <WrapperList>
          {programsList.map((program: programsProps) => (
            <CardSimple
              key={program.id}
              icon={program.icon}
              title={program.title}
              category={program.category}
            />
          ))}
        </WrapperList>
      </List>
    </Wrapper>
  );
}

const List = styled.div`
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const WrapperList = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;

  & > button {
    margin-right: 20px;
    margin: 10px 20px 10px 2px; // TODO: test with the other components
  }
`;

const Title = styled.h3`
  float: left;
  font-size: 1.1em;
  font-weight: 400;
  margin-bottom: 10px;
`;
