import { FC } from 'react'
import styled from 'styled-components'
import { px2vw } from '../styles/px2vw'

export const Panel: FC<{ title: string }> = (props) => {
  return (
    <StyledPanelBox>
      <header className='header'>{props.title}</header>
      <div className='body'>{props.children}</div>
    </StyledPanelBox>
  )
}

export const StyledPanelBox = styled.section`
  margin-bottom: ${px2vw(20)};

  .header {
    margin-bottom: ${px2vw(15)};
    font-size: ${({ theme }) => px2vw(theme.fonsSizes.large)};
    font-weight: 500;
  }

  .body {
  }
`
