import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    fonsSizes: {
      normal: number
      large: number
      xl: number
    }
    colors: {
      text: string
      desc: string
      disabled: string
      error: string
    }
    borderColor: {
      normal: string
    }
    checkbox: {
      colors: {
        indicator: string
      }
    }
    button: {
      fontSize: {
        normal: number
      }
      padding: {
        x: number
        y: number
      }
    }
  }
}
