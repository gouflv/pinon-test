import { rgba } from 'polished'
import styled, { css } from 'styled-components'
import { px2vw } from '../../styles/px2vw'

export const StyledPopupPanelWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;

  background-color: ${rgba('#000', 0.5)};
  transition: background-color 200ms linear;
`

export const StyledPopupPanelBox = styled.div<{
  height?: string
  transform?: [number, number]
}>`
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  top: calc(100vh - ${(props) => props.height || '95vh'});
  display: flex;
  flex-direction: column;

  border-top-left-radius: ${px2vw(8)};
  border-top-right-radius: ${px2vw(8)};
  background-color: #f4f4f4;

  .action-indicator {
    flex: 0 0 ${px2vw(20)};
    display: flex;
    align-items: center;
    justify-content: center;

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
    min-height: 0;
  }
`
