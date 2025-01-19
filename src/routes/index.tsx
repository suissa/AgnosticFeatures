// src/routes/index.tsx
import { RouteObject } from "react-router-dom";
import Products from "../pages/Products";

export const routes: RouteObject[] = [
  {
    path: "/products",
    element: <Products />,
  },
];
