import { FC, useCallback } from 'react'
import { Button, Icon, Panel } from '../../../components'
import { dateRangeFormat } from '../../../utils/date'
import { userOrderContext } from '../userOrderContext'
import { DeliveryEdit } from './DeliveryEdit'
import { StyledDeliveryItemBox, StyledMeta } from './styled'
import { useDeliveryEditContext } from './useDeliveryEditContext'

export const DeliveryPanel: FC = (props) => {
  const { delivery } = userOrderContext()
  const { onEdit } = useDeliveryEditContext()

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
