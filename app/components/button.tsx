import React from "react";

// inheritum öll props sem venjulegur html button tekur
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export function Button({
  children,
  className,
  disabled,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`cursor-pointer bg-sky-500 text-white py-2 px-4 rounded hover:bg-sky-600 transition-colors mt-auto disabled:hover:bg-sky-500 disabled:cursor-default ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
