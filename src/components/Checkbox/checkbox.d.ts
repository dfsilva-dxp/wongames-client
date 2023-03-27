import { InputHTMLAttributes } from "react";

export type CheckboxProps = {
  // eslint-disable-next-line no-unused-vars
  onCheck?: (status: boolean) => void;
  isChecked?: boolean;
  label?: string;
  labelFor?: string;
  labelColor?: "white" | "black";
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;
