import Dashboard from "layouts/Dashboard/Dashboard.jsx";
import Login from "views/Login/Login.jsx";

const indexRoutes = [
	{
	    path: "/login",
	    component: Login
	},
	{ path: "/", component: Dashboard }
];

export default indexRoutes;
