import moment from 'moment'
import { FC, useState } from 'react'
import { NavHeader, Page, PageContainer } from '../../components'
import { DeliveryPanel } from './delivery'
import { DeliveryEditProvider } from './delivery/useDeliveryEdit'
import { DeliveryTime } from './types'

export const Order: FC = (props) => {
  const [delivery] = useState<DeliveryTime>({
    begin: moment().startOf('day').hour(8).minute(30).toDate(),
    end: moment().startOf('day').hour(9).minute(0).toDate()
  })

  return (
    <Page>
      <NavHeader title={'Order Summary'} />

      <PageContainer>
        <DeliveryEditProvider>
          <DeliveryPanel delivery={delivery} />
        </DeliveryEditProvider>
      </PageContainer>

      {/* Other Order Info */}
    </Page>
  )
}
