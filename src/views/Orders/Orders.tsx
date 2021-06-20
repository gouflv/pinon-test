import moment from 'moment'
import { FC, useState } from 'react'
import { NavHeader } from '../../components/NavHeader'
import { Page } from '../../components/Page'
import { PageContainer } from '../../components/PageContainer'
import { Delivery } from '../../types/delivery'
import { DeliveryInfo } from './DeliveryInfo'

export const Order: FC = (props) => {
  const [delivery] = useState<Delivery>({
    timeBegin: moment().hour(8).minute(30).second(0).toDate(),
    timeEnd: moment().hour(10).minute(30).second(0).toDate()
  })

  return (
    <Page>
      <NavHeader title={'Order Summary'} />
      <PageContainer>
        <DeliveryInfo delivery={delivery} />
      </PageContainer>
    </Page>
  )
}
