import moment from 'moment'
import { FC, useCallback, useState } from 'react'
import { PopupPanel } from '../../../components'
import { DeliveryTime, SelectableDeliveryDateTime } from '../types'
import { DeliveryTimeSelector } from './DeliveryTimeSelector'
import { useDeliveryEdit } from './useDeliveryEdit'

export const DeliveryEdit: FC = (props) => {
  const { visible, params } = useDeliveryEdit()

  const [selectableDateTime] = useState<SelectableDeliveryDateTime[]>(
    // initial selectable date-time data
    Array.from({ length: 10 }).map((_, i) => {
      const date = moment().startOf('day').add(i, 'day').toDate()

      const times = Array.from({ length: 24 * 2 }).map<
        SelectableDeliveryDateTime['times'][number]
      >((_, i) => {
        const begin = moment(date)
          .clone()
          .add(30 * i, 'minute')

        return {
          begin: begin.toDate(),
          end: moment(begin).clone().add(30, 'minute').toDate(),
          enable: true
        }
      })

      return { date, times }
    })
  )

  const onChange = useCallback((val: DeliveryTime) => {
    console.log(val)
  }, [])

  return (
    <PopupPanel visible={visible} title={'Schedule a Delivery Time'}>
      <DeliveryTimeSelector
        items={selectableDateTime}
        value={params}
        onChange={onChange}
      />
    </PopupPanel>
  )
}
