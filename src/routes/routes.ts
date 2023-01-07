import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-Lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path: string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name: string
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLaout" */ '../01-Lazyload/layout/LazyLayout'));

export const routes: Route[] = [
  {
    path: '/lazylayout/*',
    to: '/lazylayout/',
    Component: LazyLayout,
    name: 'LazyLayout - Dashboard',
  },
  {
    path: 'no-lazy',
    to: '/no-lazy',
    Component: NoLazy,
    name: 'No Lazy',
  },
];