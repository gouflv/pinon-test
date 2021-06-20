import moment from 'moment'
import { FC, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { DeliveryTime, SelectableDeliveryDateTime } from '../types'
import { isSameDay, isSameTime } from '../utils'
import {
  StyledDateMenu,
  StyledDeliveryTimeSelectBox,
  StyledTimeCheckListBox
} from './styled'

function dateFormat(date: Date) {
  const mo = moment(date)
  let dayName = mo.format('dddd')
  if (mo.isSame(moment(), 'day')) dayName = 'Today'
  if (mo.isSame(moment().add(1, 'day'), 'day')) dayName = 'Tomorrow'
  return `${dayName} ${mo.format('D/M')}`
}

export const DeliveryTimeSelector: FC<{
  items: SelectableDeliveryDateTime[]
  value?: DeliveryTime
  onChange: (value: DeliveryTime) => void
}> = ({ items, value, onChange }) => {
  const [currentDate, setCurrentDate] = useState<Date>()

  useEffect(() => {
    if (!value) return
    setCurrentDate(moment(value.begin).startOf('day').toDate())
  }, [value])

  //#region DateMenu

  const dateMenuItems = useMemo(() => {
    return items.map((dt) => dt.date)
  }, [items])

  const onMenuChange = useCallback((data: Date) => setCurrentDate(data), [])

  //#endregion

  //#region TimeCheckList

  const timeCheckListItems = useMemo<
    SelectableDeliveryDateTime['times']
  >(() => {
    if (!value) return []
    const matchedItem = items.find((item) => isSameDay(item.date, value.begin))
    return matchedItem?.times || []
  }, [items, value])

  //#endregion

  return (
    <StyledDeliveryTimeSelectBox>
      <DateMenu
        items={dateMenuItems}
        value={currentDate}
        onChange={onMenuChange}
      />
      <TimeCheckList
        items={timeCheckListItems}
        value={value}
        onChange={onChange}
      />
    </StyledDeliveryTimeSelectBox>
  )
}

const DateMenu: FC<{
  items: Date[]
  value?: Date
  onChange: (data: Date) => void
}> = ({ items = [], value, ...rest }) => {
  return (
    <StyledDateMenu>
      <ol>
        {items.map((item, i) => (
          <DateMenuItem
            key={i}
            data={item}
            active={value && isSameDay(value, item)}
            {...rest}
          />
        ))}
      </ol>
    </StyledDateMenu>
  )
}

const DateMenuItem: FC<{
  data: Date
  active?: boolean
  onChange: (data: Date) => void
}> = memo(({ data, active, onChange }) => {
  const onClick = useCallback(() => onChange(data), [data, onChange])
  return (
    <li className={active ? 'active' : ''} onClick={onClick}>
      {dateFormat(data)}
    </li>
  )
})

const TimeCheckList: FC<{
  items: SelectableDeliveryDateTime['times']
  value?: DeliveryTime
  onChange: (data: DeliveryTime) => void
}> = ({ items, value, ...rest }) => {
  return (
    <StyledTimeCheckListBox>
      <ol>
        {items.map((item, i) => (
          <TimeCheckListItem
            key={i}
            data={item}
            active={!!value && isSameTime(item.begin, value.begin)}
            {...rest}
          />
        ))}
      </ol>
    </StyledTimeCheckListBox>
  )
}

const TimeCheckListItem: FC<{
  data: DeliveryTime
  active: boolean
  onChange: (data: DeliveryTime) => void
}> = ({ data, active, onChange }) => {
  const onClick = useCallback(() => onChange(data), [data, onChange])

  return (
    <li className={active ? 'active' : ''} onClick={onClick}>
      <i className='checkbox' />
      <div className='content'>
        {moment(data.begin).format('H:mm A')}-
        {moment(data.end).format('H:mm A')}
      </div>
    </li>
  )
}
