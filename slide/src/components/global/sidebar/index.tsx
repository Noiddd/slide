"use client";

import { usePaths } from "@/hooks/user-nav";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  slug: string;
};

const Sidebar = ({ slug }: Props) => {
  const { page } = usePaths();
  const pathname = usePathname();

  const navItems = [ 
    { name: "Home", path: "/" },
    { name: "Contacts", path: "/contacts" },
    { name: "Automations", path: "/automations" },
    { name: "Integrations", path: "/integrations" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <div className="w-[250px] border-2 radial fixed left-0 lg:inline-block hidden bottom-0 top-0 m-3 rounded-3xl overflow-hidden bg-black">
      <div className="flex flex-col gap-y-5 w-full h-full p-3 bg-gray-">
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-bold text-white">Slide</span>
        </div>
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className={`px-4 py-2 rounded-lg transition-colors ${
                pathname === item.path
                  ? "bg-white text-black font-semibold"
                  : "text-gray-400 hover:text-white hover:bg-white/10"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
