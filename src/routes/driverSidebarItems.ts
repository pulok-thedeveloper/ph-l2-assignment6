import AvailableRides from "@/pages/Driver/AvailableRides";
import MyEarnings from "@/pages/Driver/MyEarnings";
import MyRides from "@/pages/Driver/MyRides";
import { ISidebarItem } from "@/types";

export const driverSidebarItems: ISidebarItem[] = [
  {
    title: "Rides",
    items: [
      {
        title: "Available Rides",
        url: "/driver/available-rides",
        component: AvailableRides,
      },
      {
        title: "My Rides",
        url: "/driver/my-rides",
        component: MyRides,
      },
      {
        title: "My Earnings",
        url: "/driver/my-earnings",
        component: MyEarnings,
      },
    ],
  },
];