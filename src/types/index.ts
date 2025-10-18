export type { ISendOTP, ILogin, IVerifyOTP} from "./auth.type";
export type { TLocation, TRide} from "./ride.type";

export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: React.ComponentType;
  }[];
}

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}

export type TRole = "ADMIN" | "RIDER" | "DRIVER";
