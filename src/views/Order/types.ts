export type Order = {
  deliveryTime: DeliveryTime
}

export type DeliveryTime = {
  begin: Date
  end: Date
}

export type SelectableDeliveryDateTime = {
  date: Date
  times: (DeliveryTime & {
    enable: boolean
  })[]
}
