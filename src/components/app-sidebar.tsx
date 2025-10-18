import * as React from "react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import Logo from "@/assets/images/logo.svg";
import { Link, NavLink } from "react-router-dom"
import { getSidebarItems } from "@/utils/getSidebarItems"
import { useGetUserInfoQuery } from "@/redux/features/auth/authApi"
import { TRole } from "@/types";



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const {data: userData} = useGetUserInfoQuery(null)
  const data = {
    navMain: getSidebarItems(userData?.data?.role as TRole),
  }
  return (
    <Sidebar id="sidebar" {...props}>
      <SidebarHeader>
        <Link to="/" className="text-primary hover:text-primary/90">
            <img src={Logo} alt="logo" className="h-10" />
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url}>{item.title}</NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
