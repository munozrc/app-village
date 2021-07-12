import styled from "styled-components";
import ListPrograms from "./ListPrograms";
import TitleBox from "./TitleBox";

export default function PopularPrograms() {
  return (
    <ContainerBox>
      <TitleBox />
      <Description>
        Estos son algunos de los programas mas esenciales para dispositivos
        nuevos con Windows.
      </Description>
      <ListPrograms />
    </ContainerBox>
  );
}

const ContainerBox = styled.div`
  display: block;
`;

const Description = styled.p`
  font-size: 18px;
  padding-top: 10px;
  margin-bottom: 16px;
  opacity: 0.75;
`;
