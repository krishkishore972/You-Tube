"use client";

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,

} from "@/components/ui/sidebar";
import { FlameIcon, HomeIcon, PlaySquareIcon } from "lucide-react";
import Link from "next/link";
import { useClerk,useAuth } from "@clerk/nextjs";


const items = [
  {
    title: "Home",
    icon: HomeIcon,
    url: "/",
  },
  {
    title: "Subcriptions",
    icon: PlaySquareIcon,
    url: "/feed/subscriptions",
    auth: true,
  },
  {
    title: "Trending",
    icon: FlameIcon,
    url: "/feed/trending",
  },
];

export const MainSection = () => {
  const clerk = useClerk();
  const { isSignedIn } = useAuth();


  return (
    <SidebarGroup>
      <SidebarGroupContent>
        <SidebarMenu>
            {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                    tooltip={item.title}
                    asChild
                    isActive = {false} // Change to at current pathName
                    onClick={(e) => {
                      if(item.auth && !isSignedIn){
                        e.preventDefault();
                        return clerk.openSignIn();
                    }}} // Change to navigate to the url
                    >
                        <Link href={item.url} className=" flex items-center gap-4">
                        <item.icon size={24} />
                        <span className=" text-sm">{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
};
