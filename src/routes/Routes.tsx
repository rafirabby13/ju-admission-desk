import { createBrowserRouter } from "react-router";
import App from "../App";
import QuickLinks from "../components/QuickLinks";
import Feedback from "../components/Feedback";
import FAQSection from "../components/FAQSection";
import AskAi from "../components/AskAi";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "questions/faq",
        element: <FAQSection />,
      },
    ]
  },
  {
    path: "/quick-links",
    element: <QuickLinks />,
  },
  {
    path: "/feedback",
    element: <Feedback />,
  },
  {
    path: "/ask-ai",
    element: <AskAi />,
  },

]);