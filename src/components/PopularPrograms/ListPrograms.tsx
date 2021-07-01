import styled from "styled-components";
import ArrowIcon from "../../assets/ArrowIcon";

export default function ListPrograms() {
  return (
    <List>
      <ItemList>
        <Icon src="https://winstall.app/assets/apps/spotify.webp" />
        <TitleProgram>Spotify</TitleProgram>
        <MoreInfo>
          <ArrowIcon />
          Más Información
          <ArrowIcon />
        </MoreInfo>
      </ItemList>
      <ItemList>
        <Icon src="https://winstall.app/assets/apps/notion.webp" />
        <TitleProgram>Notion</TitleProgram>
        <MoreInfo>Más Información</MoreInfo>
      </ItemList>
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
  background: #2d2e30;
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
  color: #fff;
`;

const MoreInfo = styled.span`
  display: flex;
  justify-content: center;
  font-size: 15px;
  line-height: 15px;
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
