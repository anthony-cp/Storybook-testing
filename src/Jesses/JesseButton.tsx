import Spinner from "./Spinner";
import React from 'react'



/**
 * Standard HTML button element with custom styling, variants, loading state, and disabled state.
 * 
 * Standard HTML button element accepts text as a child, but we accept it as a `text` prop instead
 * to improve code readability.
 * 
 * Standard HTML button element has a default `type` of `submit`, which is generally not desired
 * for forms with multiple buttons. We set the default `type` to `button`, highlighting the special
 * function of a submit button.
 * 
 * @param text Button text displayed.
 *
 * @param type Button type. Defaults to `button`.
 *
 * @param variant Button variant (main style). Defaults to `primary`.
 *
 * @param loading Button loading state. Defaults to `false`.
 *
 * @param disabled Button disabled state. Defaults to `false`.
 */ 
const Button: React.FC<{
  text: string;
  type?: "button" | "submit";
  variant?: "primary" | "affirm" | "delete" | "subtle-delete" | "subtle";
  loading?: boolean;
  disabled?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  text,
  type="button",
  variant="primary",
  loading=false,
  disabled=false,
  ...props
}) => {
  return (
    <button
      type={type}
      className={`
        relative
        min-w-[80px] py-[6.5px] px-[18.5px]
        rounded

        hover:opacity-[0.9]

        ${(variant === "primary") && "bg-[var(--bg-primary)]"}

        ${(variant === "affirm") && "bg-[var(--bg-affirm)]"}

        ${(variant === "delete") && "bg-[var(--bg-alert)]"}

        ${(variant === "subtle-delete") && "bg-transparent"}

        ${(variant === "subtle") && "bg-[var(--bg-subtle)]"}

        ${(loading || disabled) && (`
          opacity-[0.15] grayscale-[15%]
          pointer-events-none
        `)}
      `}
      {...props}
    >
      {/* On loading, text visibility is set to hidden, not unrendered, to maintain button dimensions */}
      <span
        className={`
          text-[15px] text-[var(--fg-contrast)] font-medium
          whitespace-nowrap
          select-none

          ${(variant === "subtle-delete") && "text-[14.5px] text-[var(--fg-alert)]"}

          ${loading && "invisible"}
        `}
      >
        {text}
      </span>
      {loading && <Spinner />}
    </button>
  );
}

export default Button;