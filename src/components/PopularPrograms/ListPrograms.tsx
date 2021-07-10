import styled from "styled-components";
import { useHistory } from "react-router";
import { program } from "../../types";

// Assets
import ArrowIcon from "../../assets/ArrowIcon";

// Data
import Programs from "../../data/programs.json";

export default function ListPrograms() {
  const history = useHistory();
  const list: program[] = Programs.slice(0, 4);
  return (
    <List>
      {list.map((program) => (
        <ItemList
          key={`program-${program.id}`}
          onClick={() => history.push(`/programs/${program.path}`)}
        >
          <Icon src={program.icon} />
          <TitleProgram>{program.name}</TitleProgram>
          <MoreInfo>
            <ArrowIcon />
            Más Información
            <ArrowIcon />
          </MoreInfo>
        </ItemList>
      ))}
    </List>
  );
}

const List = styled.ul`
  display: grid;
  list-style-type: none;
  grid-gap: 15px;
  grid-auto-rows: 240px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));

  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.cardColor};
  padding: 20px;
  border-radius: 10px;
  transition: opacity 0.3s ease;
  cursor: pointer;
  user-select: none;

  &:hover {
    opacity: 0.8;
  }
`;

const Icon = styled.img`
  width: 80px;
  height: auto;
  user-select: none;
`;

const TitleProgram = styled.h3`
  padding-top: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.textColor};
`;

const MoreInfo = styled.span`
  display: flex;
  justify-content: center;
  font-size: 15px;
  opacity: 0.7;
  padding-top: 10px;

  & > svg {
    transition: transform 0.3s ease, opacity 0.3s ease;
    align-self: center;
    opacity: 0;
  }

  & > svg:nth-child(1) {
    transform: rotate(180deg);
  }

  &:hover > svg:nth-child(1) {
    transform: translateX(-5px) rotate(180deg);
    opacity: 0.7;
  }

  &:hover > svg:nth-child(2) {
    transform: translateX(5px);
    opacity: 0.7;
  }
`;
