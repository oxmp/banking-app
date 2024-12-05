"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { IHeaderProps } from "@/interfaces/components";

import { IcDashboard, IcHistory } from "../ui/icons";

import clsx from "clsx";

const Header: React.FC<IHeaderProps> = ({ children }) => {
  const pathname = usePathname();

  const routes = useMemo(() => [
    {
      icon: IcDashboard,
      name: "Home",
      href: "/",
      active: pathname === "/",
    },

    {
      icon: IcHistory,
      name: "History",
      href: "/history",
      active: pathname === "/history",
    },
  ], [pathname])

  return (
    <>
      <header className="w-full flex justify-between items-center py-[20px] px-[20px] lg:px-[40px] shadow-md bg-white">
        <div className="flex gap-[10px] lg:gap-[20px] items-center">
          <h1 className="text-base lg:text-3xl font-black">IManage</h1>
          <nav className="flex items-center gap-[5px] lg:gap-[15px]">
            {routes.map((route, index: number) => (
              <Link className={clsx("text-xs lg:text-2xl flex items-center gap-[2px] lg:gap-[10px] p-[5px] lg:p-[10px] hover:bg-green-400 hover:text-white", {
                "bg-green-400 text-white": route.active,
              })} key={index} href={route.href}>
                <route.icon
                  active={route.active}
                />
                {route.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center">
          <Image
            src={"/images/entriflay.avif"}
            alt="Avatar"
            width={20}
            height={20}
            className="rounded-full lg:w-[40px] lg:h-[40px]"
          />

          <span className="text-sm lg:text-xl ml-[10px]">Entriflay</span>
        </div>
      </header>

      <main>
        {children}
      </main>
    </>
  );
}

export default Header;