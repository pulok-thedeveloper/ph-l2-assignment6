/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { useGetEarningsQuery } from "@/redux/features/driver/driverApi";

const MyEarnings = () => {
  const { data, isLoading } = useGetEarningsQuery(undefined);

  const totalEarnings = data?.data?.totalEarnings ?? 0;
  const earningsHistory = data?.data?.earningsHistory ?? [];

  return (
    <div className="p-6 space-y-6">
      {/* Summary Card */}
      <Card className="shadow-sm border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Total Earnings
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex items-center gap-2 text-gray-500">
              <Loader2 className="animate-spin w-4 h-4" /> Loading...
            </div>
          ) : (
            <h2 className="text-3xl font-bold text-green-600">
              ৳ {totalEarnings.toFixed(2)}
            </h2>
          )}
        </CardContent>
      </Card>

      {/* Table */}
      <Card className="shadow-sm border">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Earnings History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Pickup</TableHead>
                  <TableHead>Destination</TableHead>
                  <TableHead>Distance (km)</TableHead>
                  <TableHead>Fare (Tk)</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading ? (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center py-6 text-gray-500"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Loader2 className="animate-spin w-4 h-4" />
                        Loading earnings...
                      </div>
                    </TableCell>
                  </TableRow>
                ) : earningsHistory.length ? (
                  earningsHistory.map((e: any, i: number) => (
                    <TableRow key={i}>
                      <TableCell>{e.pickupAddress}</TableCell>
                      <TableCell>{e.destinationAddress}</TableCell>
                      <TableCell>{e.distanceKm?.toFixed(1)}</TableCell>
                      <TableCell>{e.earning}</TableCell>
                      <TableCell>
                        {new Date(e.completedAt).toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={5}
                      className="text-center py-6 text-gray-500"
                    >
                      No earnings yet.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyEarnings;
