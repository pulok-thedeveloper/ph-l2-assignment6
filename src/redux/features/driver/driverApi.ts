import { baseApi } from "@/redux/baseApi";
import { IResponse } from "@/types";
import { IUser } from "@/types/user.type";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEarnings: builder.query({
      query: () => ({
        url: "/drivers/earnings",
        method: "GET",
      }),
    }),
    setDriverAvailability: builder.mutation({
      query: ({body, driverId}) => ({
        url: `/drivers/availability/${driverId}`,
        method: "PATCH",
        data: body,
      }),
      invalidatesTags: ["Rides"],
    }),
    suspendDriver: builder.mutation<IResponse<IUser>, string>({
      query: (driverId) => ({
        url: `/drivers/suspend/${driverId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),
    approveDriver: builder.mutation<IResponse<IUser>, string>({
      query: (driverId) => ({
        url: `/drivers/approve/${driverId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useGetEarningsQuery,
  useSetDriverAvailabilityMutation,
  useSuspendDriverMutation,
  useApproveDriverMutation
} = driverApi;
