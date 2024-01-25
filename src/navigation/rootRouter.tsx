import { createBrowserRouter } from "react-router-dom";
import { HeroPage } from "../pages/HeroPage";
import PageTemplate from "../pages/pageTemplate";
import { ServicesPage } from "../pages/ServicesPage";

const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroPage />,
  },
  {
    path: "/services",
    element: <ServicesPage />,
  },

  {
    path: "/*",
    element: (
      <PageTemplate>
        <div>notFound</div>
      </PageTemplate>
    ),
  },
]);
export default rootRouter;
