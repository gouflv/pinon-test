import { FC, useCallback, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useSpring } from 'react-spring'
import { useDrag } from 'react-use-gesture'
import { StyledPopupPanelBox, StyledPopupPanelWrapper } from './styled'

type PopupPanelProps = {
  visible: boolean
  title: string
  height?: string
  onClose: () => void
}

export const PopupPanel: FC<PopupPanelProps> = (props) => {
  const { visible, title, height, onClose } = props

  const wrapperRef = useRef<HTMLDivElement | null>(null)

  function onWrapperClick(e: any) {
    if (e.target === wrapperRef.current) {
      hide()
    }
  }

  // PanelBox
  const [panelStyles, panelAPI] = useSpring(() => ({
    y: '100%',
    onRest: (result) => {
      if (result.value.y === '100%') {
        onClose()
      }
    }
  }))

  const dragBinder = useDrag(
    ({ down, movement }) => {
      if (down) {
        panelAPI.set({ y: `${movement[1]}px` })
      } else {
        if (movement[1] < 50) {
          // resume position
          panelAPI.start({ y: '0px' })
        } else {
          hide()
        }
      }
    },
    {
      axis: 'y',
      bounds: { top: 0 }
    }
  )

  const show = useCallback(() => {
    panelAPI.start({ y: '0px' })
  }, [panelAPI])

  const hide = useCallback(() => {
    panelAPI.start({ y: '100%' })
  }, [panelAPI])

  useEffect(() => {
    if (visible) {
      show()
    }
  }, [show, visible])

  if (!visible) return null

  return createPortal(
    <StyledPopupPanelWrapper ref={wrapperRef} onClick={onWrapperClick}>
      <StyledPopupPanelBox height={height} style={panelStyles}>
        <div className='action-indicator' {...dragBinder()} />
        <div className='header'>{title}</div>
        <div className='body'>{props.children}</div>
      </StyledPopupPanelBox>
    </StyledPopupPanelWrapper>,
    document.body
  )
}
