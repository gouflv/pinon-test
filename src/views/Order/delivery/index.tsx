import { FC, useCallback } from 'react'
import { Button, Icon, Panel } from '../../../components'
import { dateRangeFormat } from '../../../utils/date'
import { DeliveryTime } from '../types'
import { DeliveryEdit } from './DeliveryEdit'
import { StyledDeliveryItemBox, StyledMeta } from './styled'
import { useDeliveryEdit } from './useDeliveryEdit'

export const DeliveryPanel: FC<{ delivery: DeliveryTime }> = ({ delivery }) => {
  const { onEdit } = useDeliveryEdit()

  const onEditClick = useCallback(() => onEdit(delivery), [onEdit, delivery])

  return (
    <Panel title={'Delivery Information'}>
      <StyledDeliveryItemBox>
        <Icon name='time' className='icon' />
        <div className='content'>
          <StyledMeta>
            <div className='label'>Delivery time:</div>
            <div className='value'>
              {dateRangeFormat(delivery.begin, delivery.end)}
            </div>
          </StyledMeta>
        </div>
        <div className='action'>
          <Button onClick={onEditClick}>Edit</Button>
        </div>
      </StyledDeliveryItemBox>

      <DeliveryEdit />
    </Panel>
  )
}
