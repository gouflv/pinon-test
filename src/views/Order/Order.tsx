import { FC } from 'react'
import { NavHeader, Page, PageContainer } from '../../components'
import { DeliveryPanel } from './delivery'
import { DeliveryEditProvider } from './delivery/useDeliveryEditContext'
import { OrderProvider } from './userOrderContext'

export const Order: FC = (props) => {
  return (
    <OrderProvider>
      <Page>
        <NavHeader title={'Order Summary'} />

        <PageContainer>
          <DeliveryEditProvider>
            <DeliveryPanel />
          </DeliveryEditProvider>
        </PageContainer>

        {/* Other Order Info */}
      </Page>
    </OrderProvider>
  )
}
