import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Nutrition from "views/Nutrition/nutrition.jsx";
import Routine from "views/Routine/routines.jsx";
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
    path: "/nutrition",
    sidebarName: "Nutricion",
    navbarName: "Nutrition",
    icon: Favorite,
    component: Nutrition
  },
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
