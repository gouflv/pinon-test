import { FC } from "react";

export const Button: FC<{ onClick?: () => void }> = (props) => {
  return (
    <button type={"button"} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
