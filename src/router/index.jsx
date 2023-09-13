import { createBrowserRouter, Navigate } from "react-router-dom";

import { lazy } from "react";
// 路由懒加载
import lazyLoad from "./lazyLoad";

import Layout from "~/layout";
const Home = lazy(() => import("~/pages/Home"));
const About = lazy(() => import("~/pages/About"));

/**
 * @description
 */

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      {
        path: "home",
        element: lazyLoad(Home)
      },
      {
        path: "about",
        element: lazyLoad(About)
      },
      {
        path: "hotnews",
        element: lazyLoad(lazy(() => import("~/pages/HotNews")))
      }
    ]
  }
];

export default createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASE_URL
});
