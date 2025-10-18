import { baseApi } from "@/redux/baseApi";
import { IResponse, TRide } from "@/types";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    requestRide: builder.mutation({
      query: (body) => ({
        url: "/ride/request",
        method: "POST",
        data: body,
      }),
      invalidatesTags: ["Rides"],
    }),

    getAvailableRides: builder.query<{ data: TRide[] }, void>({
      query: () => ({
        url: "/ride/available",
        method: "GET",
      }),
      providesTags: ["Rides"],
    }),

    getMyRides: builder.query<IResponse<TRide[]>, void>({
      query: () => ({
        url: "/ride/my",
        method: "GET",
      }),
      providesTags: ["Rides"],
    }),

    cancelRide: builder.mutation<TRide, string>({
      query: (rideId) => ({
        url: `/ride/cancel/${rideId}`,
        method: "POST",
      }),
      invalidatesTags: ["Rides"],
    }),
    updateRideStatus: builder.mutation({
      query: ({ rideId, status }) => ({
        url: `/ride/status/${rideId}`,
        method: "POST",
        data: { status },
      }),
      invalidatesTags: ["Rides"],
    }),

    getAdminAnalytics: builder.query({
      query: () => ({
        url: "/admin/analytics",
        method: "GET",
      })
    }),
  }),
});

export const {
  useRequestRideMutation,
  useGetMyRidesQuery,
  useCancelRideMutation,
  useUpdateRideStatusMutation,
  useGetAvailableRidesQuery,
  useGetAdminAnalyticsQuery
} = rideApi;
