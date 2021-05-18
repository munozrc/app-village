import styled from "styled-components";

type Props = {
  gap?: string;
};

const SimpleContainer = styled.div`
  display: flex;
  & > button {
    margin-left: ${({ gap }: Props) => gap};
  }
`;

export default SimpleContainer;
