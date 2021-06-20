import constate from 'constate'
import moment from 'moment'
import { useState } from 'react'
import { DeliveryTime } from './types'

const [OrderProvider, userOrderContext] = constate(() => {
  const [delivery, setDelivery] = useState<DeliveryTime>({
    begin: moment().startOf('day').hour(8).minute(30).toDate(),
    end: moment().startOf('day').hour(9).minute(0).toDate()
  })

  function onDeliverySubmit(data: DeliveryTime) {
    setDelivery(data)
  }

  return {
    delivery,
    onDeliverySubmit
  }
})

OrderProvider.displayName = 'OrderProvider'

export { OrderProvider, userOrderContext }
