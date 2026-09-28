import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "destructive" | "icon";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

export function Button({ className = "", variant = "primary", type = "button", ...props }: ButtonProps) {
  return <button className={`ui-button ui-button--${variant} ${className}`} type={type} {...props} />;
}
