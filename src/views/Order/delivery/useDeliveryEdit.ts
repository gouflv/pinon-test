import constate from 'constate'
import { useState } from 'react'
import { DeliveryTime } from '../types'

const [DeliveryEditProvider, useDeliveryEdit] = constate(() => {
  const [visible, setVisible] = useState(false)
  const [params, setParams] = useState<DeliveryTime>()

  function onEdit(data: DeliveryTime) {
    setParams(data)
    setVisible(true)
  }

  return {
    visible,
    params,
    onEdit
  }
})

DeliveryEditProvider.displayName = 'DeliveryEditProvider'

export { DeliveryEditProvider, useDeliveryEdit }
