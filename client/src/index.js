import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Tracker from "./pages/Tracker";
import Home from "./pages/Home";

const router = createBrowserRouter([
{
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/tracker",
      element: <Tracker />,
    },
  ]
},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
