// imports
import { ReactNode } from "react";

// layout prop types
export type LayoutPropType = {
    children: ReactNode;
}

// nav link types
export type NavLinkType = {
    label: string;
    path: string;
    isLink: boolean;
}