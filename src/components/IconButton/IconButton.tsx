// importing components
import { ReactNode } from "react";

// icon button component
type IconButtonPropType = {
  children: ReactNode;
};

export default function IconButton({ children }: IconButtonPropType) {
  return (
    <button
      role="button"
      type="button"
      className="iconButton hover:bg-zinc-200 md:p-2 hover:rounded-md"
    >
      {children}
    </button>
  );
}
