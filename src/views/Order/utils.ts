import moment from 'moment'

export const isSameDay = (a: Date, b: Date) =>
  moment(a).isSame(moment(b), 'day')

export const isSameTime = (a: Date, b: Date) =>
  moment(a).isSame(moment(b), 'minute')
