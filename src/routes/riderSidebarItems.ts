import MyRides from "@/pages/Rider/MyRides";
import RideRequest from "@/pages/Rider/RideRequest";
import { ISidebarItem } from "@/types";

export const riderSidebarItems: ISidebarItem[] = [
  {
    title: "Rides",
    items: [
      {
        title: "Ride Request",
        url: "/rider/ride-request",
        component: RideRequest,
      },
      {
        title: "My Rides",
        url: "/rider/my-rides",
        component: MyRides,
      },
    ],
  },
];