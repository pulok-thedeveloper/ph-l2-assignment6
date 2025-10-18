import Dashboard from "@/pages/Admin/Dashboard";
import DriverRequests from "@/pages/Admin/DriverRequests";
import Users from "@/pages/Admin/Users";
import { ISidebarItem } from "@/types";

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        component: Dashboard,
      },
    ],
  },
  {
    title: "User Management",
    items: [
      {
        title: "Users",
        url: "/admin/users",
        component: Users,
      },
      {
        title: "Driver Requests",
        url: "/admin/driver-requests",
        component: DriverRequests,
      },
    ],
  },
];
