import React from "react";
import Footer from "./components/footer";
import "./App.css";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import DefaultPage from "./pages/DefaultPage";
import Navbar from "./components/navbar";
import Products from "./pages/Products";
import Templates from "./pages/Templates";
import Pricing from "./pages/Pricing";
import Learn from "./pages/Learn";
import Marketplace from "./pages/Marketplace";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const r = React;
const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <DefaultPage /> },
      { path: "/products", element: <Products /> },
      { path: "/templates", element: <Templates /> },
      { path: "/marketplace", element: <Marketplace /> },
      { path: "/learn", element: <Learn /> },
      { path: "/pricing", element: <Pricing /> },
    ],
  },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
]);

export default function App() {
  console.log(r);
  return <RouterProvider router={router} />;
}
