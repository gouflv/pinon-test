import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonsSizes: {
      normal: number;
      large: number;
      xl: number;
    };
    colors: {
      text: string;
      desc: string;
      disabled: string;
    };
    borderColor: {
      normal: string;
    };
    checkbox: {
      indicator: string;
    };
  }
}
