export type TLocation = {
  lat: number;
  long: number;
};

export type RideStatus =
  | "REQUESTED"
  | "ACCEPTED"
  | "PICKED_UP"
  | "IN_TRANSIT"
  | "COMPLETED"
  | "CANCELLED"
  | "REJECTED";

export type TRide = {
  _id: string;
  rider: string;
  driver: string | null;
  fareTk: number;
  distanceKm: number;
  pickupAddress: string;
  pickupLocation: TLocation;
  destinationAddress: string;
  destinationLocation: TLocation;
  status: RideStatus;
  requestedAt: string;
  createdAt: string;
  updatedAt: string;
  cancelledAt?: string;
};
