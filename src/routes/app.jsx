import Dashboard from 'views/Dashboard/Dashboard';
import UserProfile from 'views/UserProfile/UserProfile';
import TableList from 'views/TableList/TableList';
import Typography from 'views/Typography/Typography';
import Icons from 'views/Icons/Icons';
import Maps from 'views/Maps/Maps';
import Notifications from 'views/Notifications/Notifications';
import Upgrade from 'views/Upgrade/Upgrade';

const appRoutes = [
    { path: "/dashboard", name: "Overview", icon: "pe-7s-graph", component: Dashboard },
    { path: "/maps", name: "Maps", icon: "pe-7s-map-marker", component: Maps },
    { path: "/user", name: "Users", icon: "pe-7s-user", component: UserProfile },
    { path: "/bikes", name: "Bicycles", icon: "pe-7s-bicycle", component: TableList },
    // { path: "/typography", name: "Typography", icon: "pe-7s-news-paper", component: Typography },
    // { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
    //
    // { path: "/notifications", name: "Notifications", icon: "pe-7s-bell", component: Notifications },
    { redirect: true, path:"/", to:"/dashboard", name: "Dashboard" }
];

export default appRoutes;
