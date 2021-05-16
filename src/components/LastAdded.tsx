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
  background: ${({ theme }) => theme.background};
  overflow-y: hidden;
  overflow-x: auto;
  padding: 15px;
  border-radius: 4px;
`;

const Wrapper = styled.div`
  width: 100%;
`;

const WrapperList = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: row;

  & > button {
    margin-right: 15px;
  }
`;

const Title = styled.h3`
  float: right;
  font-size: 1em;
  margin-bottom: 10px;
`;
