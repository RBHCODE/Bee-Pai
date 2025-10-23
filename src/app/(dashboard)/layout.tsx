interface Props{
    children: React.ReactNode;
}


import { SidebarProvider } from "../../components/ui/sidebar";
import { DashboardSidebar } from "../../modules/dashboard/ui/components/dashboard-sidebar";

const Layout = ({ children }:Props) =>{
    return (
        <SidebarProvider>
            <main className="flex flex-col h-screen w-screen bg-muted">
                <DashboardSidebar />
             {children}
            </main>
        </SidebarProvider>
    )

}

export default Layout;