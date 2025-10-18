/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useGetMyRidesQuery,
  useUpdateRideStatusMutation,
} from "@/redux/features/ride/rideApi";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Loader2, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { TRide } from "@/types";
import { RideStatus } from "@/types/ride.type";

const statusColor: Record<RideStatus, string> = {
  REQUESTED: "bg-yellow-100 text-yellow-800",
  ACCEPTED: "bg-blue-100 text-blue-800",
  PICKED_UP: "bg-purple-100 text-purple-800",
  IN_TRANSIT: "bg-indigo-100 text-indigo-800",
  COMPLETED: "bg-green-100 text-green-800",
  CANCELLED: "bg-red-100 text-red-700",
  REJECTED: "bg-gray-200 text-gray-700",
};

const allowedTransitions: Record<RideStatus, RideStatus[]> = {
  REQUESTED: ["ACCEPTED", "REJECTED"],
  ACCEPTED: ["PICKED_UP"],
  PICKED_UP: ["IN_TRANSIT"],
  IN_TRANSIT: ["COMPLETED"],
  COMPLETED: [],
  CANCELLED: [],
  REJECTED: [],
};

const MyRides = () => {
  const { data, isLoading, refetch } = useGetMyRidesQuery();
  const [updateRideStatus, { isLoading: isUpdating }] =
    useUpdateRideStatusMutation();
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const rides = data?.data || [];

  const handleStatusChange = async (rideId: string, status: RideStatus) => {
    try {
      setUpdatingId(rideId);
      await updateRideStatus({ rideId, status }).unwrap();
      toast.success(`Ride status updated to ${status}`);
      await refetch();
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to update ride status");
    } finally {
      setUpdatingId(null);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">My Rides</h2>

      {rides.length === 0 ? (
        <p className="text-gray-500 text-center">No rides assigned yet.</p>
      ) : (
        <div className="rounded-md border shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead>Pickup</TableHead>
                <TableHead>Destination</TableHead>
                <TableHead>Fare (৳)</TableHead>
                <TableHead>Distance (km)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Requested At</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rides.map((ride: TRide) => {
                const nextStatuses = allowedTransitions[ride.status];
                return (
                  <TableRow key={ride._id}>
                    <TableCell>{ride.pickupAddress}</TableCell>
                    <TableCell>{ride.destinationAddress}</TableCell>
                    <TableCell>{ride.fareTk}</TableCell>
                    <TableCell>{ride.distanceKm}</TableCell>
                    <TableCell>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          statusColor[ride.status]
                        }`}
                      >
                        {ride.status.replace("_", " ")}
                      </span>
                    </TableCell>
                    <TableCell>
                      {new Date(ride.requestedAt).toLocaleString("en-BD", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </TableCell>
                    <TableCell className="text-center">
                      {nextStatuses.length > 0 ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              disabled={isUpdating && updatingId === ride._id}
                            >
                              {isUpdating && updatingId === ride._id ? (
                                <Loader2 className="w-4 h-4 animate-spin" />
                              ) : (
                                <>
                                  Update
                                  <ChevronDown className="w-4 h-4 ml-1" />
                                </>
                              )}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            {nextStatuses.map((status) => (
                              <DropdownMenuItem
                                key={status}
                                onClick={() =>
                                  handleStatusChange(ride._id, status)
                                }
                              >
                                {status.replace("_", " ")}
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <span className="text-gray-400 text-sm italic">—</span>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default MyRides;
