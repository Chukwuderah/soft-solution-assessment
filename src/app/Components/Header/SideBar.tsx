"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  LayoutGrid,
  User,
  Heart,
  Users,
  Newspaper,
  Eye,
  Settings,
  LogOut,
} from "lucide-react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="w-[5%] h-full p-4">
      {/* Hamburger Menu */}
      <button
        onClick={toggleSidebar}
        className="z-50 p-2 rounded-full md:p-0 md:rounded-none md:bg-transparent bg-black"
      >
        <Menu size={24} className="text-white md:text-black cursor-pointer" />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-full md:w-80 bg-white z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 shadow-lg md:rounded-r-xl`}
      >
        {/* Close Button */}
        <div className="flex justify-end p-4">
          <button onClick={toggleSidebar} className="cursor-pointer">
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col items-center gap-6 px-4 pb-8">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src="https://plus.unsplash.com/premium_photo-1683147627621-190cc667fd92?q=80&w=1470"
              alt="Avatar"
              width={80}
              height={80}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Username */}
          <h2 className="text-lg font-semibold">Temiloluwa</h2>

          {/* Nav Buttons */}
          <div className="flex flex-col w-[70%] mx-auto gap-2">
            <SidebarItem
              icon={<LayoutGrid size={18} />}
              label="Dashboard"
              active
            />
            <Link href="/profile" passHref>
              <SidebarItem icon={<User size={18} />} label="My Profile" />
            </Link>
            <SidebarItem icon={<Heart size={18} />} label="Favorites" />
            <SidebarItem icon={<Users size={18} />} label="My Mutuals" />
            <SidebarItem icon={<Newspaper size={18} />} label="My Subscribed" />
            <SidebarItem icon={<Eye size={18} />} label="Interested in me" />
            <SidebarItem icon={<Settings size={18} />} label="Settings" />
            <SidebarItem icon={<LogOut size={18} />} label="Logout" />
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) => {
  return (
    <button
      className={`flex items-center gap-6 px-4 py-2 rounded-md text-sm ${
        active ? "bg-red-500 text-white" : "text-black hover:bg-gray-100"
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

export default SideBar;
