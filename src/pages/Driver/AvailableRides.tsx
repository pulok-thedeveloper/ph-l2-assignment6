/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { TRide } from "@/types";
import { RideStatus } from "@/types/ride.type";
import {
  useGetAvailableRidesQuery,
  useUpdateRideStatusMutation
} from "@/redux/features/ride/rideApi";
import { useGetUserInfoQuery } from "@/redux/features/auth/authApi";
import { useSetDriverAvailabilityMutation } from "@/redux/features/driver/driverApi";

// Status color mapping
const statusColors: Record<RideStatus, string> = {
  REQUESTED: "bg-blue-100 text-blue-800",
  ACCEPTED: "bg-green-100 text-green-800",
  PICKED_UP: "bg-yellow-100 text-yellow-800",
  IN_TRANSIT: "bg-purple-100 text-purple-800",
  COMPLETED: "bg-gray-200 text-gray-700",
  CANCELLED: "bg-red-100 text-red-800",
  REJECTED: "bg-orange-100 text-orange-800",
};

const AvailableRides = () => {
  const { data: userData, isLoading: userLoading, refetch: refetchUser } = useGetUserInfoQuery(null);
  const [setDriverAvailability] = useSetDriverAvailabilityMutation();
  const [updateRideStatus] = useUpdateRideStatusMutation();

  const driver = userData?.data;
  const driverId = driver?._id;
  const isOnline = driver?.driverProfile?.isOnline ?? false;

  const {
    data: ridesData,
    isLoading: ridesLoading,
    refetch: refetchRides,
  } = useGetAvailableRidesQuery(undefined, { skip: !isOnline });

  const [selectedRide, setSelectedRide] = useState<TRide | null>(null);
  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleToggleAvailability = async () => {
    if (!driverId) return;
    try {
      await setDriverAvailability({ driverId, isOnline: !isOnline }).unwrap();
      toast.success(`You are now ${!isOnline ? "Online" : "Offline"}`);
      await refetchUser();
    } catch (error: any) {
        console.log(error)
      toast.error(error?.data?.message || "Failed to update availability");
    }
  };

  const handleAcceptRide = async () => {
    if (!selectedRide) return;

    try {
      await updateRideStatus({
        rideId: selectedRide._id,
        status: "ACCEPTED",
      }).unwrap();

      toast.success("Ride accepted successfully!");
      setConfirmOpen(false);
      refetchRides();
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update ride status");
    }
  };

  useEffect(() => {
    if (isOnline) refetchRides();
  }, [isOnline, refetchRides]);

  const rides = ridesData?.data ?? [];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Available Ride Requests</h2>

        {/* Online/Offline Indicator + Toggle */}
        {!userLoading && driver && (
          <div className="flex items-center gap-3">
            <span
              className={`flex items-center gap-1 text-sm font-medium px-3 py-1 rounded-full ${
                isOnline ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${
                  isOnline ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
              {isOnline ? "Online" : "Offline"}
            </span>

            <Button
              onClick={handleToggleAvailability}
              variant="outline"
              className={`border ${
                isOnline
                  ? "border-red-400 text-red-600 hover:bg-red-50"
                  : "border-green-400 text-green-600 hover:bg-green-50"
              }`}
            >
              {isOnline ? "Go Offline" : "Go Online"}
            </Button>
          </div>
        )}
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Pickup</TableHead>
              <TableHead>Destination</TableHead>
              <TableHead>Distance (km)</TableHead>
              <TableHead>Fare (Tk)</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Requested At</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {ridesLoading ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                  Loading available rides...
                </TableCell>
              </TableRow>
            ) : !isOnline ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                  You are offline. Go online to view available rides.
                </TableCell>
              </TableRow>
            ) : rides.length ? (
              rides.map((ride: TRide) => (
                <TableRow key={ride._id}>
                  <TableCell>{ride.pickupAddress}</TableCell>
                  <TableCell>{ride.destinationAddress}</TableCell>
                  <TableCell>{ride.distanceKm.toFixed(1)}</TableCell>
                  <TableCell>{ride.fareTk}</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        statusColors[ride.status]
                      }`}
                    >
                      {ride.status.replace("_", " ")}
                    </span>
                  </TableCell>
                  <TableCell>
                    {new Date(ride.requestedAt).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Button
                      disabled={!isOnline}
                      onClick={() => {
                        setSelectedRide(ride);
                        setConfirmOpen(true);
                      }}
                      className="bg-green-600 hover:bg-green-700 text-white"
                    >
                      Accept
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6 text-gray-500">
                  No available rides at the moment.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Accept Ride</DialogTitle>
          </DialogHeader>
          <p>
            Are you sure you want to accept this ride from{" "}
            <strong>{selectedRide?.pickupAddress}</strong> to{" "}
            <strong>{selectedRide?.destinationAddress}</strong>?
          </p>
          <DialogFooter className="mt-4">
            <Button variant="outline" onClick={() => setConfirmOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={handleAcceptRide}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AvailableRides;
