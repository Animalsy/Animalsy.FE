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
    element: <HeroPage key={document.location.href} />,
  },
  {
    path: "/services/",
    element: <ServicesPage type="services" key={document.location.href} />,
  },
  {
    path: "/services/:category",
    element: <ServicesPage type="services" key={document.location.href} />,
  },
  {
    path: "/services/:category/:subcategory",
    element: <ServicesPage type="services" key={document.location.href} />,
  },
  {
    path: "/specials/",
    element: <ServicesPage type="specials" key={document.location.href} />,
  },
  {
    path: "/specials/:category",
    element: <ServicesPage type="specials" key={document.location.href} />,
  },
  {
    path: "/specials/:category/:subcategory",
    element: <ServicesPage type="specials" key={document.location.href} />,
  },
  {
    path: "/vendors/:id",
    element: <Vendors key={document.location.href} />,
  },
  {
    path: "bookvisit/:vendorId/:serviceId",
    element: <BookAVisitPage key={document.location.href} />,
  },
  {
    path: "/profile",
    element: <ProfilePage key={document.location.href} />,
  },
  {
    path: "/*",
    element: <NotFound text="nothing" key={document.location.href} />,
  },
]);
export default rootRouter;
