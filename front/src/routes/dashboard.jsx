import DashboardPage from "views/Others/Dashboard/Dashboard.jsx";
import Nutrition from "views/Nutrition/Dashboard.jsx";
import Offers from "views/Offers/Dashboard.jsx";
import Routine from "views/Routine/Dashboard.jsx";

import {
  DirectionsRun,//for routine
  AttachMoney,//for oferts
  Favorite, //for nutrition
  Dashboard,
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/dashboard",
    sidebarName: "Dashboard",
    navbarName: "Material Dashboard",
    icon: Dashboard,
    component: DashboardPage
  },
  {
    path: "/routines",
    sidebarName: "Rutina del dia",
    navbarName: "routine",
    icon: DirectionsRun,
    component: Routine
  },
  {
    path: "/offers",
    sidebarName: "Ofertas",
    navbarName: "offers",
    icon: AttachMoney,
    component: Offers
  },
  {
    path: "/nutrition",
    sidebarName: "Nutricion",
    navbarName: "Nutrition",
    icon: Favorite,
    component: Routine
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
