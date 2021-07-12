import { Link } from "react-router-dom";
import styled from "styled-components";

type Props = {
  to: string;
  icon?: JSX.Element;
  content?: string;
};

export default function ButtonLink(props: Props) {
  return (
    <Button to={props.to}>
      {props.icon} <Text>{props.content}</Text>
    </Button>
  );
}

const Button = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 20px;
  background: ${({ theme }) => theme.cardColor};
  text-decoration: none;
  border-radius: 50px;
  transition: opacity 0.3s ease;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    box-shadow: 0px 0px 0px 1px ${({ theme }) => theme.textColor};
  }

  & > svg {
    stroke: ${({ theme }) => theme.textColor};
    fill: ${({ theme }) => theme.textColor};
    font-size: 20px;
    margin-right: 8px;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;

const Text = styled.p`
  display: block;
  font-weight: 400;
  font-size: 18px;
  color: ${({ theme }) => theme.textColor};
`;
