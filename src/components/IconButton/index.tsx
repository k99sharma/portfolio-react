// imports
import { ReactNode } from "react";

// icon button component
export default function IconButton({ children }: { children: ReactNode }) {
  return (
    <div className="iconButton hover:bg-neutral-2 p-2 rounded-md">
      {children}
    </div>
  );
}
