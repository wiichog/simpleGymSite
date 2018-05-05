import DashboardPage from "views/Others/Dashboard/Dashboard.jsx";
import Nutrition from "views/Nutrition/Dashboard.jsx";
import Offers from "views/Offers/Dashboard.jsx";
import Routine from "views/Routine/Dashboard.jsx";

import {
  DirectionsRun,
  PriorityHigh,
  Favorite, 
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
    sidebarName: "Rutina",
    navbarName: "routine",
    icon: DirectionsRun,
    component: Routine
  },
  {
    path: "/information",
    sidebarName: "Informacion",
    navbarName: "Todo tipo de informacion",
    icon: PriorityHigh,
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
