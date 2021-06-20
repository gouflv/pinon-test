export type Order = {
  deliveryTime: DeliveryTime
}

export type DeliveryTime = {
  begin: Date
  end: Date
}

export type DeliveryDateTime = {
  date: Date
  time: DeliveryTime
}

export type SelectableDeliveryDateTime = {
  date: Date
  times: (DeliveryTime & {
    enable: boolean
  })[]
}
