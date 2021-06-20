import { FC } from "react";
import styled from "styled-components";

export const NavHeader: FC<{ title: string }> = (props) => (
  <StyledNavHeaderBox>
    <StyledNavHeaderTitle>{props.title}</StyledNavHeaderTitle>
  </StyledNavHeaderBox>
);

const StyledNavHeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  background-color: #fff;
`;

const StyledNavHeaderTitle = styled.div`
  font-size: var(--font-size-large);
`;
