import { useState } from "react";
import { Code, Award, GraduationCap } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

interface AdminSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const AdminSidebar = ({ activeTab, onTabChange }: AdminSidebarProps) => {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => onTabChange("projects")}
              isActive={activeTab === "projects"}
              tooltip="Projects"
            >
              <Code className="w-4 h-4 mr-2" />
              <span>Projects</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => onTabChange("certificates")}
              isActive={activeTab === "certificates"}
              tooltip="Certificates"
            >
              <Award className="w-4 h-4 mr-2" />
              <span>Certificates</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => onTabChange("education")}
              isActive={activeTab === "education"}
              tooltip="Education"
            >
              <GraduationCap className="w-4 h-4 mr-2" />
              <span>Education</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
};