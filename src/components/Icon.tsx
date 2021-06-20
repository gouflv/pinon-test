import { FC } from 'react'
import { ReactComponent as Time } from '../assets/time.svg'

export const Icon: FC<{ name: string; className?: string }> = (props) => {
  const { name, ...rest } = props
  if (name === 'time') return <Time {...rest} />
  return null
}
