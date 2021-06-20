import { FC, useCallback } from 'react'
import { Button } from '../../components/Button'
import { Icon } from '../../components/Icon'
import { Panel } from '../../components/Panel'
import { Delivery } from '../../types/delivery'
import { StyledDeliveryItemBox, StyledMeta } from './styled'

export const DeliveryInfo: FC<{ delivery: Delivery }> = (props) => {
  const onEdit = useCallback(() => {}, [])

  return (
    <Panel title={'Delivery Information'}>
      <StyledDeliveryItemBox>
        <Icon name='time' className='icon' />
        <div className='content'>
          <StyledMeta>
            <div className='label'>Delivery time:</div>
            <div className='value'>10:00 PM - 10:20 PM on 6/10</div>
          </StyledMeta>
        </div>
        <div className='action'>
          <Button onClick={onEdit}>Edit</Button>
        </div>
      </StyledDeliveryItemBox>
    </Panel>
  )
}
