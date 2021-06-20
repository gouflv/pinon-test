import moment from 'moment'
import { FC, useState } from 'react'
import { PopupPanel } from '../../../components'
import { SelectableDeliveryDateTime } from '../types'
import { DeliveryTimeSelector } from './DeliveryTimeSelector'
import { useDeliveryEditContext } from './useDeliveryEditContext'

export const DeliveryEdit: FC = (props) => {
  const { visible, params, onEditSubmit, onClose } = useDeliveryEditContext()

  const [selectableDateTime] = useState<SelectableDeliveryDateTime[]>(
    // mock selectable date-time data
    Array.from({ length: 5 }).map((_, i) => {
      const date = moment().startOf('day').add(i, 'day').toDate()

      const times = Array.from({ length: 24 * 2 }).reduce<
        SelectableDeliveryDateTime['times']
      >((res, _, i) => {
        const begin = moment(date)
          .clone()
          .add(30 * i, 'minute')

        if (begin.hour() >= 8) {
          res.push({
            begin: begin.toDate(),
            end: moment(begin).clone().add(30, 'minute').toDate(),
            enable: Math.random() > 0.4
          })
        }

        return res
      }, [])

      return { date, times }
    })
  )

  return (
    <PopupPanel
      visible={visible}
      title={'Schedule a Delivery Time'}
      onClose={onClose}
    >
      <DeliveryTimeSelector
        items={selectableDateTime}
        value={params}
        onChange={onEditSubmit}
      />
    </PopupPanel>
  )
}
