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
      {props.icon} {props.content}
    </Button>
  );
}

const Button = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  color: #fff;
  background: #2d2d2d;
  font-size: 18px;
  font-weight: normal;
  text-decoration: none;
  border-radius: 50px;
  transition: opacity 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  & > svg {
    fill: #fff;
    font-size: 22px;
    margin-right: 10px;
  }

  @media (max-width: 780px) {
    display: none;
  }
`;
