import { baseApi } from "@/redux/baseApi";
import { ILogin, IResponse, ISendOTP, IVerifyOTP } from "@/types";
import { IUser } from "@/types/user.type";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<IResponse<null>, ILogin>({
      query: (userInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: userInfo,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["USER"],
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),
    sendOTP: builder.mutation<IResponse<null>, ISendOTP>({
      query: (userInfo) => ({
        url: "/otp/send",
        method: "POST",
        data: userInfo,
      }),
    }),
    verifyOTP: builder.mutation<IResponse<null>, IVerifyOTP>({
      query: (userInfo) => ({
        url: "/otp/verify",
        method: "POST",
        data: userInfo,
      }),
    }),
    getUserInfo: builder.query<IResponse<IUser>, null>({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),
    getAllUsers: builder.query<IResponse<IUser[]>, void>({
      query: () => ({
        url: "/user/all-users",
        method: "GET",
      }),
      providesTags: ["USER"],
    }),

    updateUserStatus: builder.mutation<
      IResponse<IUser>,
      { userId: string; isActive: "ACTIVE" | "BLOCKED" }
    >({
      query: ({ userId, isActive }) => ({
        url: `/user/${userId}`,
        method: "PATCH",
        data: { isActive },
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useSendOTPMutation,
  useVerifyOTPMutation,
  useGetUserInfoQuery,
  useGetAllUsersQuery,
  useUpdateUserStatusMutation
} = authApi;
