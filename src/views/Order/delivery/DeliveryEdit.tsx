import { FC, useCallback, useState } from 'react'
import { PopupPanel } from '../../../components'
import { DeliveryDateTime, SelectableDeliveryDateTime } from '../types'
import { DeliveryTimeSelector } from './DeliveryTimeSelector'
import { useDeliveryEdit } from './useDeliveryEdit'

export const DeliveryEdit: FC = (props) => {
  const { visible } = useDeliveryEdit()

  const [dateTimeList] = useState<SelectableDeliveryDateTime[]>([])

  const onChange = useCallback((val: DeliveryDateTime) => {
    console.log(val)
  }, [])

  return (
    <PopupPanel visible={visible} title={'Schedule a Delivery Time'}>
      <DeliveryTimeSelector items={dateTimeList} onChange={onChange} />
    </PopupPanel>
  )
}
