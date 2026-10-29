import { Link } from "react-router-dom";
import { SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../lib/shadcn/ui/sidebar";
import AppSidebar from "../molecules/AppSidebar";
import { LayoutDashboardIcon, PresentationIcon, UserGroupIcon, type LucideIcon } from "lucide-react";

export default function AdminSidebar() {
    const menuItem: {title: string, icon: LucideIcon, link: string}[] = [
        {
            title: "Dashboard",
            icon: LayoutDashboardIcon,
            link: "/dashboard"
        }
    ]

    return <AppSidebar>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Menu Navigasi</SidebarGroupLabel>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton render={<Link to={'/dashboard'}></Link>}>
                            <LayoutDashboardIcon />
                            <span>Dashboard</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton render={<Link to="/users" />}>
                                <UserGroupIcon />
                                <span>Users</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton render={<Link to={'/categories'}></Link>}>
                            <PresentationIcon />
                            <span>Category</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
    </AppSidebar>
}