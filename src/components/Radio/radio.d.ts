import { InputHTMLAttributes } from "react";

type RadioValue = string | ReadonlyArray<string> | number;

export type RadioProps = {
  // eslint-disable-next-line no-unused-vars
  onCheck?: (value: RadioValue) => void;
  label?: string;
  labelFor?: string;
  labelColor?: "white" | "black";
  value?: RadioValue;
} & InputHTMLAttributes<HTMLInputElement>;
