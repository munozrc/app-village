import styled from "styled-components";
import ListPrograms from "./ListPrograms";
import TitleBox from "./TitleBox";

export default function PopularPrograms() {
  return (
    <ContainerBox>
      <TitleBox />
      <ListPrograms />
    </ContainerBox>
  );
}

const ContainerBox = styled.div`
  display: block;
`;
