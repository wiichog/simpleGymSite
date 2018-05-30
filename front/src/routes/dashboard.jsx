import DashboardPage from "views/Dashboard/Dashboard.jsx";
import Routine from "views/Routine/routines.jsx";
import login from "views/login/login.jsx";

import {
  DirectionsRun,
  Dashboard,
  People,
} from "@material-ui/icons";

const dashboardRoutes = [
  {
    path: "/login",
    sidebarName: "Log In",
    navbarName: "Log In",
    icon: People,
    component: login
  },
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
  { redirect: true, path: "/", to: "/dashboard", navbarName: "Redirect" }
];

export default dashboardRoutes;
