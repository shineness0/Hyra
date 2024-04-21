"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Navbar
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className=""
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="pr-3 border-red-500 sm:hidden" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit text-primary-200">Hydra</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarBrand className="mr-96">
          <p className="font-bold text-inherit text-primary-200">Hydra</p>
        </NavbarBrand>
        <NavbarItem className="ml-24" isActive>
          <Link
            color="foreground"
            href="/"
            className="font-semibold text-primary-200"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" className="font-semibold">
            Our Teachings
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="font-semibold">
            About Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <button className="h-10 font-bold border rounded-md w-28 text-primary-200 border-primary-200 bg-none">
            Sign Up
          </button>
        </NavbarItem>
        <NavbarItem>
          <button className="h-10 font-bold text-white rounded-md w-28 bg-primary-200 bg-none">
            Login
          </button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
