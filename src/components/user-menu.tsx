import {
  LayoutDashboard,
  LogOutIcon,
  User,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IUser } from "@/types/user.type"
import { authApi, useLogoutMutation } from "@/redux/features/auth/authApi"
import { useAppDispatch } from "@/redux/hooks"
import { Link } from "react-router"

export default function UserMenu({user}:{user:IUser}) {
  const [logout] = useLogoutMutation()
  const dispatch = useAppDispatch()

  const getAvatar = (name: string): string => {
    const words = name.trim().split(/\s+/);
    const initials = words
      .slice(0, 2)
      .map(word => word.charAt(0).toUpperCase())
      .join('');
    return initials;
  }

  const handleLogout = async () => {
    await logout(undefined)
    dispatch(authApi.util.resetApiState())
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-auto p-0 hover:bg-transparent">
          <Avatar>
            <AvatarImage src="./avatar.jpg" alt="Profile image" />
            <AvatarFallback>{getAvatar(user.name)}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="max-w-64" align="end">
        <DropdownMenuLabel className="flex min-w-0 flex-col">
          <span className="text-foreground truncate text-sm font-medium">
            {user.name}
          </span>
          <span className="text-muted-foreground truncate text-xs font-normal">
            {user.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link className="flex items-center gap-2 w-full" to={`/${user.role.toLocaleLowerCase()}`}>
              <LayoutDashboard size={16} className="opacity-60" aria-hidden="true" />
              <span>Dashboard</span>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          <LogOutIcon size={16} className="opacity-60" aria-hidden="true" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
