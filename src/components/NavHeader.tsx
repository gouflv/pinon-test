import { FC } from 'react'
import styled from 'styled-components'
import { px2vw } from '../styles/px2vw'

export const NavHeader: FC<{ title: string }> = (props) => (
  <StyledNavHeaderBox>
    <StyledNavHeaderTitle>{props.title}</StyledNavHeaderTitle>
  </StyledNavHeaderBox>
)

const StyledNavHeaderBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${px2vw(44)};
  background-color: #fff;
`

const StyledNavHeaderTitle = styled.div`
  font-size: var(--font-size-large);
  font-weight: 500;
`
