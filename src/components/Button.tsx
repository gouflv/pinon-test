import { FC } from "react";
import styled from "styled-components";
import { px2vw } from "../styles/px2vw";

export const Button: FC<{ onClick?: () => void }> = (props) => {
  return (
    <StyleButton type={"button"} onClick={props.onClick}>
      {props.children}
    </StyleButton>
  );
};

const StyleButton = styled.button`
  padding: ${({ theme }) =>
    `${px2vw(theme.button.padding.y)} ${px2vw(theme.button.padding.x)}`};
  font-size: ${({ theme }) => px2vw(theme.button.fontSize.normal)};
  border: 1px solid ${({ theme }) => theme.borderColor.normal};
  border-radius: ${px2vw(20)};
  background-color: #fff;
`;
