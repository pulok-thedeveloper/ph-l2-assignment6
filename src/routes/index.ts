import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { roles } from "@/constants/role";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Unauthorized from "@/pages/Unauthorized";
import Verify from "@/pages/Verify";
import { TRole } from "@/types";
import { generateRoutes } from "@/utils/generateRoutes";
import { withAuth } from "@/utils/withAuth";
import { createBrowserRouter } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import Dashboard from "@/pages/Admin/Dashboard";
import RiderRides from "@/pages/Rider/MyRides";
import DriverRides from "@/pages/Driver/MyRides";
import { riderSidebarItems } from "./riderSidebarItems";
import { driverSidebarItems } from "./driverSidebarItems";
import Home from "@/pages/home/Home";
import About from "@/pages/about/About";
import Features from "@/pages/features/Features";
import Contact from "@/pages/Contact";
import Faq from "@/pages/Faq";
import Profile from "@/pages/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/features",
        Component: Features,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/faq",
        Component: Faq,
      },
      {
        path: "/profile",
        Component: withAuth(Profile),
      },
    ],
  },
  {
    path: "/admin",
    Component: withAuth(DashboardLayout, roles.admin as TRole),
    children: [
      {
        index: true,
        Component: Dashboard,
      },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    path: "/rider",
    Component: withAuth(DashboardLayout, roles.rider as TRole),
    children: [
      {
        index: true,
        Component: RiderRides,
      },
      ...generateRoutes(riderSidebarItems),
    ],
  },
  {
    path: "/driver",
    Component: withAuth(DashboardLayout, roles.driver as TRole),
    children: [
      {
        index: true,
        Component: DriverRides,
      },
      ...generateRoutes(driverSidebarItems),
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/verify",
    Component: Verify,
  },
  {
    path: "/unauthorized",
    Component: Unauthorized,
  },
]);

export default router;