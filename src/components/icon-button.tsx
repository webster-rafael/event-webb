import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={twMerge(
        "border border-white/10 rounded-md p-1.5",
        transparent ? "bg-black/20 hover:bg-blue-700" : "bg-white/10 hover:bg-white/20",
        props.disabled ? "opacity-50 hover:bg-white/10" : null
      )}
    />
  );
}
