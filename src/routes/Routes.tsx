import { createBrowserRouter } from "react-router";
import App from "../App";
import QuickLinks from "../components/QuickLinks";
import Feedback from "../components/Feedback";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/quick-links",
    element: <QuickLinks/>,
  },
  {
    path: "/feedback",
    element: <Feedback/>,
  },
]);