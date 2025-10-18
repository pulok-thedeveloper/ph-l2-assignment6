/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  useGetMyRidesQuery,
  useCancelRideMutation
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
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Loader2 } from "lucide-react";
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

const MyRides = () => {
  const { data, isLoading, refetch } = useGetMyRidesQuery();
  const [cancelRide, { isLoading: isCancelling }] = useCancelRideMutation();
  const [selectedRide, setSelectedRide] = useState<TRide | null>(null);

  const handleCancelRide = async () => {
    if (!selectedRide) return;
    try {
      await cancelRide(selectedRide._id).unwrap();
      toast.success("Ride cancelled successfully");
      setSelectedRide(null);
      await refetch();
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to cancel ride");
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-gray-500" />
      </div>
    );
  }

  const rides = data?.data || [];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6">My Rides</h2>

      {rides.length === 0 ? (
        <p className="text-gray-500 text-center">No rides found.</p>
      ) : (
        <div className="rounded-md border shadow-sm overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="text-left">Pickup</TableHead>
                <TableHead className="text-left">Destination</TableHead>
                <TableHead>Fare (৳)</TableHead>
                <TableHead>Distance (km)</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Requested At</TableHead>
                <TableHead className="text-center">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rides.map((ride) => (
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
                    {ride.status === "REQUESTED" ? (
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => setSelectedRide(ride)}
                            disabled={
                              isCancelling && selectedRide?._id === ride._id
                            }
                          >
                            {isCancelling &&
                            selectedRide?._id === ride._id ? (
                              <Loader2 className="w-4 h-4 animate-spin mr-1" />
                            ) : null}
                            Cancel
                          </Button>
                        </AlertDialogTrigger>
                        <AlertDialogContent>
                          <AlertDialogHeader>
                            <AlertDialogTitle>
                              Cancel this ride?
                            </AlertDialogTitle>
                            <AlertDialogDescription>
                              Are you sure you want to cancel your ride from{" "}
                              <b>{ride.pickupAddress}</b> to{" "}
                              <b>{ride.destinationAddress}</b>? This action
                              cannot be undone.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel
                              onClick={() => setSelectedRide(null)}
                            >
                              No
                            </AlertDialogCancel>
                            <AlertDialogAction
                              onClick={handleCancelRide}
                              disabled={isCancelling}
                            >
                              {isCancelling ? "Cancelling..." : "Yes, Cancel"}
                            </AlertDialogAction>
                          </AlertDialogFooter>
                        </AlertDialogContent>
                      </AlertDialog>
                    ) : (
                      <span className="text-gray-400 text-sm italic">—</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default MyRides;
