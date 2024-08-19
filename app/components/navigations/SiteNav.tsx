"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { CiCirclePlus, CiSettings } from "react-icons/ci";
import { IoLibrary } from "react-icons/io5";
import { Logo } from "../global/Logo";

export const SiteNavigation: React.FC = () => {
  const logoutHandler = () => {
    signOut();
  };

  return (
    <header className="flex justify-evenly p-4 w-full fixed z-40 bg-secondaryBg backdrop-blur-md rounded-b-lg border-b top-0 items-center dark:border-b-zinc-800 shadow-lg">
      <nav className="flex items-center justify-evenly w-full">
        <Logo />
        <ul className="flex gap-8 tracking-widest justify-evenly">
          <li>
            <Link href="myworks/create" className="flex items-center gap-2">
              <CiCirclePlus className="w-6 h-6" />
              <span className="text-sm">Create</span>
            </Link>
          </li>
          <li>
            <Link href="/library" className="flex items-center gap-2">
              <IoLibrary className="w-6 h-6" />
              <span className="text-sm">Library</span>
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center gap-2">
              <CiSettings className="w-6 h-6" />
              <span className="text-sm">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
