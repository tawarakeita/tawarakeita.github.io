"use client";

import { usePathname } from "next/navigation";
import HeaderClient from "./HeaderClient";
import { NavBreadcrumb } from "@/components/nav-breadcrumb";

export default function LayoutShell({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <HeaderClient />
      <main className={`min-h-screen flex flex-col ${isHomePage ? "pt-0" : "pt-16"}`}>
        <NavBreadcrumb />
        <div className="flex-1 flex flex-col">{children}</div>
      </main>
    </>
  );
}
