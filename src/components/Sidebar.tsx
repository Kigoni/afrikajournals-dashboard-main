// import { NavLink } from "react-router-dom";
// import { cn } from "@/lib/utils";
// import {
//   LayoutDashboard,
//   BookOpen,
//   FileText,
//   List,
//   ListOrdered,
//   User,
//   Menu,
//   X,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";

// interface SidebarProps {
//   className?: string;
// }

// const navItems = [
//   {
//     title: "Dashboard",
//     href: "/",
//     icon: LayoutDashboard,
//   },
//   {
//     title: "Submit Journal",
//     href: "/submit-journal",
//     icon: BookOpen,
//   },
//   {
//     title: "Submit Article",
//     href: "/submit-article",
//     icon: FileText,
//   },
//   {
//     title: "Your Journals",
//     href: "/journals",
//     icon: List,
//   },
//   {
//     title: "Your Articles",
//     href: "/articles",
//     icon: ListOrdered,
//   },
//   {
//     title: "Profile",
//     href: "/profile",
//     icon: User,
//   },
// ];

// export function Sidebar({ className }: SidebarProps) {
//   const [isCollapsed, setIsCollapsed] = useState(false);

//   return (
//     <div
//       className={cn(
//         "flex flex-col bg-gradient-surface border-r border-border shadow-card transition-all duration-300",
//         isCollapsed ? "w-16" : "w-64",
//         className
//       )}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 border-b border-border">
//         {!isCollapsed && (
//           <div className="flex items-center space-x-2">
//             <div className="rounded-lg overflow-hidden flex items-center justify-center bg-white shadow-sm p-1 sm:p-1.5 md:p-2">
//               <img
//                 src="/logo.png"
//                 alt="Afrika Journals Logo"
//                 className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
//               />
//             </div>
//             <span className="font-bold text-lg text-foreground">
//               Afrika Journals
//             </span>
//           </div>
//         )}
//         <Button
//           variant="ghost"
//           size="sm"
//           onClick={() => setIsCollapsed(!isCollapsed)}
//           className="h-8 w-8 p-0"
//         >
//           {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
//         </Button>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 p-4 space-y-2">
//         {navItems.map((item) => (
//           <NavLink
//             key={item.href}
//             to={item.href}
//             className={({ isActive }) =>
//               cn(
//                 "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 group",
//                 isActive
//                   ? "bg-gradient-primary text-primary-foreground shadow-elegant"
//                   : "hover:bg-secondary hover:text-secondary-foreground",
//                 isCollapsed && "justify-center"
//               )
//             }
//           >
//             <item.icon
//               className={cn(
//                 "h-5 w-5 transition-transform group-hover:scale-110",
//                 isCollapsed ? "h-6 w-6" : ""
//               )}
//             />
//             {!isCollapsed && (
//               <span className="font-medium">{item.title}</span>
//             )}
//           </NavLink>
//         ))}
//       </nav>

//       {/* Footer */}
//       <div className="p-4 border-t border-border">
//         {!isCollapsed && (
//           <div className="text-xs text-muted-foreground text-center">
//             © 2024 Afrika Journals Portal
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  BookOpen,
  FileText,
  List,
  ListOrdered,
  User,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { title: "Dashboard", href: "/", icon: LayoutDashboard },
  { title: "Submit Journal", href: "/submit-journal", icon: BookOpen },
  { title: "Submit Article", href: "/submit-article", icon: FileText },
  { title: "Your Journals", href: "/journals", icon: List },
  { title: "Your Articles", href: "/articles", icon: ListOrdered },
  { title: "Profile", href: "/profile", icon: User },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden sm:flex flex-col w-64 bg-gradient-surface border-r border-border shadow-card">
        <Header />
        <Navigation onClose={() => {}} />
        <Footer />
      </div>

      {/* Mobile Overlay Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex sm:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

          {/* Sidebar Panel */}
          <div className="relative z-10 w-64 bg-gradient-surface shadow-lg flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="font-bold text-lg">Afrika Journals</span>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            <Navigation onClose={onClose} />
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

function Header() {
  return (
    <div className="flex items-center space-x-2 p-4 border-b border-border">
      <div className="rounded overflow-hidden bg-white p-1 shadow-sm">
        <img src="/logo.png" alt="Logo" className="h-8 w-auto object-contain" />
      </div>
      <span className="font-bold text-lg text-foreground">Afrika Journals</span>
    </div>
  );
}

function Navigation({ onClose }: { onClose: () => void }) {
  return (
    <nav className="flex-1 p-4 space-y-2">
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          className={({ isActive }) =>
            cn(
              "flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200",
              isActive
                ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                : "hover:bg-secondary hover:text-secondary-foreground"
            )
          }
          onClick={onClose}
        >
          <item.icon className="h-5 w-5" />
          <span className="font-medium">{item.title}</span>
        </NavLink>
      ))}
    </nav>
  );
}

function Footer() {
  return (
    <div className="p-4 border-t border-border text-xs text-muted-foreground text-center">
      © 2024 Afrika Journals Portal
    </div>
  );
}
