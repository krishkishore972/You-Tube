import { SidebarProvider } from "@/components/ui/sidebar";
import { HomeNavbar } from "../components/home-navbar";
import { HomeSidebar } from "../components/home-sidebar";

interface HomeLayoutProps {
  children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="">
        <HomeNavbar />
      </div>
      <div className="flex min-h-screen pt-[4rem] overflow-hidden">
        <HomeSidebar />
        <main className="flex-1 overflow-y-auto p-6 over">{children}</main>
      </div>
    </SidebarProvider>
  );
};
