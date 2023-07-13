// imports
import { ReactNode } from "react";

// layout prop types
export type LayoutPropType = {
    children: ReactNode;
}

// nav link types
export type LinkType = {
    label: string;
    path: string;
    isLink: boolean;
    icon?:string
}

// blog type
export type BlogType = {
    slug: string;
    title: string;
    brief: string;
    coverImage: string;
    dateAdded: string;
}

// blog container prop type
export type BlogContainerPropType = {
    blogs: BlogType[];
    error?: boolean;
}