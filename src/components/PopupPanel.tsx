import { rgba } from 'polished'
import { FC } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'
import { px2vw } from '../styles/px2vw'

type PopupPanelProps = {
  visible: boolean
  title: string
  height?: string
}

export const PopupPanel: FC<PopupPanelProps> = (props) => {
  const { visible, title, height } = props

  if (!visible) return null
  return createPortal(
    <PopupPanelWrapper>
      <PopupPanelBox height={height}>
        <div className='action-indicator' />
        <div className='header'>{title}</div>
        <div className='body'>{props.children}</div>
      </PopupPanelBox>
    </PopupPanelWrapper>,
    document.body
  )
}

const PopupPanelWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  background-color: ${rgba('#000', 0.5)};
  transition: background-color 200ms linear;
`

const PopupPanelBox = styled.div<{ height?: string }>`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: calc(100vh - ${(props) => props.height || '95vh'});
  display: flex;
  flex-direction: column;

  border-top-left-radius: ${px2vw(8)};
  border-top-right-radius: ${px2vw(8)};

  background-color: #fff;

  .action-indicator {
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${px2vw(20)};

    &::after {
      content: '';
      display: block;
      width: ${px2vw(88)};
      height: ${px2vw(3)};
      background-color: #989898;
      border-radius: ${px2vw(3)};
    }
  }

  .header {
    flex: 0 0 ${px2vw(43)};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.fonsSizes.xl};
    font-weight: 500;
  }

  .body {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`
