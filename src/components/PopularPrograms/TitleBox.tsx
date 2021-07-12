import { Link } from "react-router-dom";
import styled from "styled-components";
import GridIcon from "../../assets/GridIcon";

export default function TitleBox() {
  return (
    <Box>
      <Title>Más Populares</Title>
      <ViewAll to="/popular-programs">
        <GridIcon />
        Ver Todos
      </ViewAll>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

const ViewAll = styled(Link)`
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
