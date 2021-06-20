import { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useDrag } from 'react-use-gesture'
import { StyledPopupPanelBox, StyledPopupPanelWrapper } from './styled'

type PopupPanelProps = {
  visible: boolean
  title: string
  height?: string
  onClose?: () => void
}

export const PopupPanel: FC<PopupPanelProps> = (props) => {
  const { visible, title, height, onClose } = props

  const [transform, setTransform] = useState<[number, number]>([0, 0])

  const dragBinder = useDrag(
    ({ down, movement }) => {
      if (down) {
        setTransform(movement)
      } else {
        if (movement[1] < 50) {
          setTransform([0, 0])
        } else {
          if (typeof onClose === 'function') {
            onClose()
          }
        }
      }
    },
    {
      axis: 'y',
      bounds: { top: 0 }
    }
  )

  useEffect(() => {
    if (visible) {
      setTransform([0, 0])
    }
  }, [visible])

  if (!visible) return null

  return createPortal(
    <StyledPopupPanelWrapper>
      <StyledPopupPanelBox
        height={height}
        style={{
          transform: `translate3d(${transform[0]}px, ${transform[1]}px, 0)`
        }}
      >
        <div className='action-indicator' {...dragBinder()} />
        <div className='header'>{title}</div>
        <div className='body'>{props.children}</div>
      </StyledPopupPanelBox>
    </StyledPopupPanelWrapper>,
    document.body
  )
}
