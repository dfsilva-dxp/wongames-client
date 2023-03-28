import { InputHTMLAttributes, ReactNode } from "react";

export type TextFieldProps = {
  // eslint-disable-next-line no-unused-vars
  onInput?: (value: string) => void;
  label?: string;
  initialValue?: string;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  disabled?: boolean;
  error?: string;
} & InputHTMLAttributes<HTMLInputElement>;
