import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Outlet } from "react-router"
import UserMenu from "../user-menu"
import { useGetUserInfoQuery } from "@/redux/features/auth/authApi"

const DashboardLayout = () => {
  const {data} = useGetUserInfoQuery(null)
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
          </div>
          {
             data?.data?.email &&
            <UserMenu user={data?.data}/>
          }
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

export default DashboardLayout
