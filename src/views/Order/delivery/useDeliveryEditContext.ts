import constate from 'constate'
import { useState } from 'react'
import { DeliveryTime } from '../types'
import { userOrderContext } from '../useOrder'

const [DeliveryEditProvider, useDeliveryEditContext] = constate(() => {
  const { onDeliverySubmit } = userOrderContext()

  const [visible, setVisible] = useState(false)
  const [params, setParams] = useState<DeliveryTime>()

  function onEdit(data: DeliveryTime) {
    setParams(data)
    setVisible(true)
  }

  function onEditSubmit(data: DeliveryTime) {
    onDeliverySubmit(data)
    setVisible(false)
  }

  return {
    visible,
    params,
    onEdit,
    onEditSubmit
  }
})

DeliveryEditProvider.displayName = 'DeliveryEditProvider'

export { DeliveryEditProvider, useDeliveryEditContext }
