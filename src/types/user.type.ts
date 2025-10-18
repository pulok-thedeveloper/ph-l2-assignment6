export enum Role {
  RIDER = "RIDER",
  DRIVER = "DRIVER",
  ADMIN = "ADMIN",
}

export interface IAuthProvider {
  provider: "google" | "credentials";
  providerId: string;
}

export enum IsActive {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
  BLOCKED = "BLOCKED",
}

export interface IEarnings {
  ride: string;
  earning: number;
}

export interface IDriverProfile {
  isApproved: boolean;
  isSuspended: boolean;
  isOnline: boolean;
  earnings: IEarnings[];
  currentRide?: string | null;
  rating: number;
  ratingCount: number;
}

export interface IUser {
  _id?: string;
  name: string;
  email: string;
  password?: string;
  phone?: string;
  picture?: string;
  isDeleted?: boolean;
  isActive?: IsActive;
  isVerified?: boolean;
  role: Role;
  auths: IAuthProvider[];
  driverProfile?: IDriverProfile | null;
}
