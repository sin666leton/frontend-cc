import { Outlet } from "react-router-dom";
import { SidebarProvider } from "../../lib/shadcn/ui/sidebar";
import AppNavbar from "../molecules/AppNavbar";
import CreatorSidebar from "../organism/CreatorSidebar";

export default function CreatorLayout() {
    return (
        <SidebarProvider>
            <CreatorSidebar />
            <main className="flex flex-col justify-between w-full px-6 py-4 min-h-screen">
                <div className="flex-1 w-full space-y-6">
                    <AppNavbar />
                    <Outlet />
                </div>
                <footer className="text-center mt-auto shrink-0">
                    <small className="text-gray-500">&copy; {new Date().getFullYear()} Develop by Ahmad Zidan</small>
                </footer>
            </main>
        </SidebarProvider>
    )
}