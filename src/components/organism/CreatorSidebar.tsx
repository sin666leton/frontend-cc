import { Link } from "react-router-dom";
import { SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "../../lib/shadcn/ui/sidebar";
import AppSidebar from "../molecules/AppSidebar";
import { LayoutDashboardIcon, PlayingCardsFanIcon, type LucideIcon } from "lucide-react";

export default function CreatorSidebar() {
    const menuItem: {title: string, Icon: LucideIcon, link: string}[] = [
        {
            title: "Dashboard",
            Icon: LayoutDashboardIcon,
            link: "/creator/dashboard"
        },
        {
            title: "Channel",
            Icon: PlayingCardsFanIcon,
            link: "/creator/channels"
        }
    ]

    return <AppSidebar>
        <SidebarContent>
            <SidebarGroup>
                <SidebarGroupLabel>Menu Navigasi</SidebarGroupLabel>

                <SidebarMenu>
                    {menuItem.map((item, index) => {
                        return <SidebarMenuItem key={index}>
                            <SidebarMenuButton render={<Link to={item.link}></Link>}>
                                <item.Icon/>    
                                <span>{item.title}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    })}
                    {/* <SidebarMenuItem>
                        <SidebarMenuButton render={<Link to="/users" />}>
                            <UserGroupIcon />
                            <span>Users</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton render={<Link to={'/categories'}></Link>}>
                            <PresentationIcon />
                            <span>Category</span>
                        </SidebarMenuButton>
                    </SidebarMenuItem> */}
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
    </AppSidebar>
}