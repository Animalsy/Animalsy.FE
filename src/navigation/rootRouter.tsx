import { createBrowserRouter } from "react-router-dom";
import { HeroPage } from "../pages/HeroPage";
import { ServicesPage } from "../pages/ServicesPage";
import Vendors from "../pages/Vendors";
import NotFound from "../pages/NotFound";
import BookAVisitPage from "../pages/BookAVisitPage";
import { ProfilePage } from "../pages/ProfilePage";

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
    path: "/vendors/:id",
    element: <Vendors />,
  },
  {
    path: "bookvisit/:vendorId/:serviceId",
    element: <BookAVisitPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/*",
    element: <NotFound text="nothing" />,
  },
]);
export default rootRouter;
