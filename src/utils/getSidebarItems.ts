import { roles } from "@/constants/role";
import { adminSidebarItems } from "@/routes/adminSidebarItems";
import { driverSidebarItems } from "@/routes/driverSidebarItems";
import { riderSidebarItems } from "@/routes/riderSidebarItems";
import { TRole } from "@/types";

export const getSidebarItems = (role: TRole) => {
  switch (role) {
    case roles.admin:
      return [...adminSidebarItems];

    case roles.rider:
      return [...riderSidebarItems];

    case roles.driver:
      return [...driverSidebarItems];

    default:
      return [];
  }
};
