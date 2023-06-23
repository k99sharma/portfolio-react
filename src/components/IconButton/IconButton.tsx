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
      className="iconButton hover:bg-slate-200 md:p-1 hover:rounded-md"
    >
      {children}
    </button>
  );
}
