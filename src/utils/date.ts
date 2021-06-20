import moment from 'moment'

type dateRangeFormatOptions = {
  dateFormat: string
  timeFormat: string
}

export const dateRangeFormat = (
  begin: Date,
  end: Date,
  options?: dateRangeFormatOptions
) => {
  options = Object.assign(options || {}, {
    dateFormat: 'D/M',
    timeFormat: 'HH:mm'
  })

  const momentBegin = moment(begin)
  const momentEnd = moment(end)

  const strDate = momentBegin.format(options.dateFormat)
  const strBegin = momentBegin.format(options.timeFormat)
  const strEnd = momentEnd.format(options.timeFormat)

  return `${strBegin} - ${strEnd} on ${strDate}`
}
