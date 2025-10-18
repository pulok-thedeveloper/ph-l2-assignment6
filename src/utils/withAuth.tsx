import { useGetUserInfoQuery } from "@/redux/features/auth/authApi";
import { TRole } from "@/types";
import { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component:ComponentType, requiredRole?: TRole) => {
    return function AuthWrapper() {
        const {data, isLoading} = useGetUserInfoQuery(null);

        if(!isLoading && !data?.data?.email){
            return <Navigate to="/login" replace />;
        }

        if(requiredRole && !isLoading && requiredRole !== data?.data?.role){
            return <Navigate to="/unauthorized" replace />;
        }

        return <Component />;
    }
}