import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Content */}
      <main className="flex-1 overflow-auto relative">
        {/* Mobile Toggle Button */}
        <div className="sm:hidden p-4">
          <Button variant="outline" onClick={() => setIsSidebarOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <div className="max-w-screen-xl mx-auto px-6 py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
