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
    path: "/services/",
    element: <ServicesPage type="services" />,
  },
  {
    path: "/services/:category",
    element: <ServicesPage type="services" />,
  },
  {
    path: "/services/:category/:subcategory",
    element: <ServicesPage type="services" />,
  },
  {
    path: "/specials/",
    element: <ServicesPage type="specials" />,
  },
  {
    path: "/specials/:category",
    element: <ServicesPage type="specials" />,
  },
  {
    path: "/specials/:category/:subcategory",
    element: <ServicesPage type="specials" />,
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
