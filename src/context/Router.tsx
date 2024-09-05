import { Routes } from "./../Routes";
import { RouterProvider as ReactRouterProvider } from "react-router-dom";

export const RouterProvider = () => {
  return <ReactRouterProvider router={Routes()} />;
};
