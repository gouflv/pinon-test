import moment from 'moment'
import { FC, memo, useCallback, useMemo } from 'react'
import styled from 'styled-components'
import { px2vw } from '../../../styles/px2vw'
import { DeliveryDateTime, SelectableDeliveryDateTime } from '../types'

function dateFormat(date: Date) {
  const mo = moment(date)
  return ''
}

export const DeliveryTimeSelector: FC<{
  items: SelectableDeliveryDateTime[]
  value?: DeliveryDateTime
  onChange: (value: DeliveryDateTime) => void
}> = ({ items, value, onChange }) => {
  const dateItems = useMemo(() => {
    return items.map((dt) => dt.date)
  }, [items])

  const onMenuChange = useCallback((date: Date) => {}, [])

  return (
    <StyledDeliveryTimeSelectBox>
      <DateMenu
        items={dateItems}
        active={value?.date}
        onChange={onMenuChange}
      />
      <div className='time-check-list'></div>
    </StyledDeliveryTimeSelectBox>
  )
}

const DateMenu: FC<{
  items: Date[]
  active?: Date
  onChange: (date: Date) => void
}> = ({ items, active, ...rest }) => {
  return (
    <StyledDateMenu>
      <ol>
        {items.map((item, i) => (
          <DateMenuItem
            key={i}
            item={item}
            active={active === item}
            {...rest}
          />
        ))}
      </ol>
    </StyledDateMenu>
  )
}

const DateMenuItem: FC<{
  item: Date
  active?: boolean
  onChange: (date: Date) => void
}> = memo(({ item, active, onChange }) => {
  const onClick = useCallback(() => onChange(item), [item, onChange])
  return (
    <li className={active ? 'active' : ''} onClick={onClick}>
      {dateFormat(item)}
    </li>
  )
})

const StyledDateMenu = styled.div`
  background-color: #f4f4f4;

  ol {
    li {
      min-height: ${px2vw(69)};
    }
  }
`

const StyledDeliveryTimeSelectBox = styled.div`
  flex: 1;
  display: flex;

  .date-menu {
    flex: 0 0 ${px2vw(140)};
    min-height: 0;
    background-color: #f4f4f4;
  }

  .time-check-list {
    flex: 1;
    min-height: 0;
  }
`
