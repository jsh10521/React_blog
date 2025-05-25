import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact1 from "./routes/contact1";
import JavaScript from "./routes/javascript";
import "./app.css";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "contacts/:contactsId",
    element: <Contact1 />,
  },
  {
    path: "javascripts/:javascriptsId",
    element: <JavaScript />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router = {router} /> 
  </React.StrictMode>
);