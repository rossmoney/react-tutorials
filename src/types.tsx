import { JSX } from "react/jsx-runtime";

export type LinksCategories = Array<{
  category: string;
  entries: Array<{
    href: string;
    text: string;
    icon: JSX.Element;
  }>;
}>;

export type LinksSimple = Array<{
  href: string;
  text: string;
  icon: JSX.Element;
}>;
