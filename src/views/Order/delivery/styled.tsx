import styled from 'styled-components'
import { px2vw } from '../../../styles/px2vw'

export const StyledDeliveryItemBox = styled.div`
  display: flex;
  align-items: center;
  padding: ${px2vw(15)};
  background-color: #fff;
  border-radius: ${px2vw(4)};

  .icon {
    flex: 0 0 auto;
    margin-right: ${px2vw(20)};
    width: ${px2vw(20)};
    height: ${px2vw(20)};
  }

  .content {
    flex: 1;
  }

  .action {
    flex: 0 0 auto;
    margin-left: ${px2vw(10)};
  }
`

export const StyledMeta = styled.div`
  .label {
    margin-bottom: ${px2vw(2)};
    color: ${({ theme }) => theme.colors.desc};
  }

  .value {
  }
`

export const StyledDateMenu = styled.div`
  background-color: #f4f4f4;

  ol {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      padding: ${px2vw(20)} ${px2vw(15)};

      &.active {
        background-color: #fff;
      }
    }
  }
`

export const StyledTimeCheckListBox = styled.div`
  flex: 1;
  padding-top: ${px2vw(10)};
  ol {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: flex;
      align-items: center;
      padding: ${px2vw(15)} 0 ${px2vw(15)} ${px2vw(25)};

      .checkbox {
        flex-shrink: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: ${px2vw(15)};
        width: ${px2vw(18)};
        height: ${px2vw(18)};
        border: 1px solid ${({ theme }) => theme.borderColor.normal};
        border-radius: 100%;

        &::after {
          display: none;
          content: '';
          width: ${px2vw(12)};
          height: ${px2vw(12)};
          background-color: ${({ theme }) => theme.checkbox.colors.indicator};
          border-radius: 100%;
        }
      }

      .content {
        flex: 1;

        .extend {
          position: absolute;
          color: ${({ theme }) => theme.colors.error};
        }
      }

      &.active {
        .checkbox::after {
          display: block;
        }
      }

      &.disabled {
        color: ${({ theme }) => theme.colors.disabled};

        .checkbox {
          border-color: ${({ theme }) => theme.colors.disabled};
        }
      }
    }
  }
`

export const StyledDeliveryTimeSelectBox = styled.div`
  flex: 1;
  display: flex;
  min-height: 0;

  ${StyledDateMenu} {
    flex: 0 0 ${px2vw(140)};
    min-height: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #f4f4f4;
  }

  ${StyledTimeCheckListBox} {
    flex: 1;
    min-height: 0;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
    background-color: #fff;
  }
`
