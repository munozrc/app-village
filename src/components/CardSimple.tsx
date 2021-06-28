import { useHistory } from "react-router";
import styled from "styled-components";
import { PRIMARY_COLOR } from "../styles/colors";

type Props = {
  icon: string;
  title: string;
  category: string;
  path: string;
};

export default function CardSimple({ icon, title, category, path }: Props) {
  const history = useHistory();
  const handleClick = (): void => {
    history.push({ pathname: `/${category.toLowerCase()}/${path}` });
  };

  return (
    <Card onClick={handleClick}>
      <BoxIcon>
        <Icon src={icon} />
      </BoxIcon>
      <Title>{title}</Title>
    </Card>
  );
}

const Card = styled.button`
  width: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.borderColor};
  border: solid 2px transparent;
  border-radius: 4px;
  padding: 15px 10px;
  background: #2d2e30; 
  transition: border, box-shadow 0.3s ease;
  outline: none;
  cursor: pointer;

  &:hover {
    border: solid 2px #61afef; 
    box-shadow: 4px 4px 0 #61afef;
  }

  &:focus {
    border: solid 2px ${PRIMARY_COLOR};
    box-shadow: 4px 4px 0 ${PRIMARY_COLOR};
  }
`;

const BoxIcon = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

const Title = styled.h4`
  font-size: 12px;
  font-weight: 600;
  margin-top: 5px;
`;

const Icon = styled.img`
  max-width: 90px;
  /* filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.2)); */
  border-radius: 4px;
`;
