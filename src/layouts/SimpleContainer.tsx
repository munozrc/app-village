import styled from "styled-components";

type Props = {
  gap?: string;
};

const SimpleContainer = styled.div`
  display: flex;
  & > button, & > a {
    margin-left: ${({ gap }: Props) => gap};
  }
`;

export default SimpleContainer;
