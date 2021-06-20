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
