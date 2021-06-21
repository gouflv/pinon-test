import { rgba } from 'polished'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
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

  //#region PanelBox

  const [panelStyles, panelAPI] = useSpring(() => ({
    y: '100%',
    onRest: (result) => {
      if (needClose.current) {
        onHiden()
      } else {
        onShown()
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

  //#endregion

  //#region Wrapper

  const [wrapperStyles, wrapperAPI] = useSpring(() => ({
    backgroundColor: rgba('#000', 0)
  }))

  //#endregion

  //#region Motions

  const needClose = useRef(false)

  const show = useCallback(() => {
    needClose.current = false
    panelAPI.start({ y: '0px' })
    wrapperAPI.start({
      backgroundColor: rgba('#000', 0.5)
    })
  }, [panelAPI, wrapperAPI])

  const hide = useCallback(() => {
    needClose.current = true
    panelAPI.start({ y: `${window.screen.height}px` })
    wrapperAPI.start({
      backgroundColor: rgba('#000', 0)
    })
  }, [panelAPI, wrapperAPI])

  //#endregion

  //#region Open Control

  const [open, setOpen] = useState(visible)

  function onShown() {
    //
  }

  function onHiden() {
    setOpen(false)
    onClose()
  }

  useEffect(() => {
    if (visible) {
      setOpen(true)
      show()
    } else {
      hide()
    }
  }, [show, hide, visible])

  //#endregion

  if (!open) return null

  return createPortal(
    <StyledPopupPanelWrapper
      ref={wrapperRef}
      style={wrapperStyles}
      onClick={onWrapperClick}
    >
      <StyledPopupPanelBox height={height} style={panelStyles}>
        <div className='action-indicator' {...dragBinder()} />
        <div className='header'>{title}</div>
        <div className='body'>{props.children}</div>
      </StyledPopupPanelBox>
    </StyledPopupPanelWrapper>,
    document.body
  )
}
