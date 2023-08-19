import React from "react";
import "./App.css";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import CartPage from "./pages/CartPage";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Checkout from "./pages/Checkout";
import ProductDetailPage from "./pages/ProductDetailPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Home />),
  },
  {
    path: "/login",
    element: (<LoginPage />),
  },
  {
    path: "/signup",
    element: (<SignUpPage />),
  },
  {
    path: "/cart",
    element: (<CartPage />),
  },
  {
    path: "/checkout",
    element: (<Checkout />),
  },
  {
    path: "/product-detail",
    element: (<ProductDetailPage />),
  }


]);


function App() {
  return (
       <RouterProvider router={router} />
  );
}

export default App;
