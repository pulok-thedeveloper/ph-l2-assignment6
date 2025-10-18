/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAdminAnalyticsQuery } from "@/redux/features/ride/rideApi";
import { DollarSign, Users, Car } from "lucide-react";

const Dashboard = () => {
  const { data, isLoading, isError } = useGetAdminAnalyticsQuery(undefined);

  if (isLoading) {
    return (
      <div className="grid gap-4 md:grid-cols-3 p-6">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-32 w-full rounded-xl" />
        ))}
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <div className="p-6 text-red-600 font-semibold">
        Failed to load analytics. Please try again later.
      </div>
    );
  }

  const { users, rides, earnings } = data.data;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>

      {/* USERS SECTION */}
      <section>
        <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <Users className="w-5 h-5" /> Users Overview
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Riders</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {users?.totalRiders}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Total Drivers</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {users?.totalDrivers}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Active Drivers</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-green-600">
              {users?.activeDrivers}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Suspended Drivers</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-red-600">
              {users?.suspendedDrivers}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* RIDES SECTION */}
      <section>
        <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <Car className="w-5 h-5" /> Ride Statistics
        </h2>
        <div className="grid gap-4 md:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle>Total Rides</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold">
              {rides?.totalRides}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Completed Rides</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-green-600">
              {rides?.completedRides}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cancelled Rides</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-red-600">
              {rides?.cancelledRides}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Today's Rides</CardTitle>
            </CardHeader>
            <CardContent className="text-2xl font-bold text-blue-600">
              {rides?.todaysRides}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* EARNINGS SECTION */}
      <section>
        <h2 className="text-xl font-semibold mb-3 flex items-center gap-2">
          <DollarSign className="w-5 h-5" /> Total Earnings
        </h2>
        <Card className="border-2 border-emerald-400">
          <CardHeader>
            <CardTitle>Total Earnings</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-emerald-600">
            ৳ {earnings?.totalEarnings?.toLocaleString("en-BD")}
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Dashboard;
