import { Link } from "react-router-dom";
import styled from "styled-components";

export default function TitleBox() {
  return (
    <Box>
      <Title>Programas Populares</Title>
      <ViewAll to="/popular-programs">Ver Todos</ViewAll>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

const ViewAll = styled(Link)`
  height: 25px;
  display: flex;
  align-items: center;
  text-decoration: none;
  background: #2d2d2d;
  color: #fff;
  border-radius: 50px;
  font-size: 15px;
  padding: 5px 15px;
  cursor: pointer;
`;
