import { FC } from "react";
import styled from "styled-components";

export const Panel: FC<{ title: string }> = (props) => {
  return (
    <StyledPanelBox>
      <header className="header">{props.title}</header>
      <div className="body">{props.children}</div>
    </StyledPanelBox>
  );
};

export const StyledPanelBox = styled.section`
  .header {
  }
  .body {
  }
`;
