"use client";

import Link from "next/link";
import { CiCirclePlus, CiSettings } from "react-icons/ci";
import { IoLibrary } from "react-icons/io5";
import { LogoutButton } from "../global/Buttons";
import { Logo } from "../global/Logo";

export const SiteNavigation: React.FC = () => {
  return (
    <header className="flex justify-between p-4 w-full fixed z-40  backdrop-blur-md rounded-b-lg border-b top-0 items-center dark:border-b-zinc-800 shadow-lg">
      <Logo />
      <nav className="md:flex items-center justify-evenly w-full">
        <ul className="flex justify-center gap-8  tracking-widest md:justify-evenly">
          <li>
            <Link
              href="myworks/create"
              className="flex items-center gap-2"
              aria-label="create"
            >
              <CiCirclePlus className="sm:w-6 sm:h-6 h-5 w-5" />
              <span className="text-sm  hidden md:block">Create</span>
            </Link>
          </li>
          <li>
            <Link
              href="/library"
              className="flex items-center gap-2"
              aria-label="library"
            >
              <IoLibrary className="sm:w-6 sm:h-6 h-5 w-5" />
              <span className="text-sm  hidden md:block">Library</span>
            </Link>
          </li>
          <li>
            <Link
              href="/settings"
              className="flex items-center gap-2"
              aria-label="settings"
            >
              <CiSettings className="sm:w-6 sm:h-6 h-5 w-5" />
              <span className="text-sm hidden md:block">Settings</span>
            </Link>
          </li>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};
