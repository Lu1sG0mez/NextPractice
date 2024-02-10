import { HomeFillIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "@/components";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const NavBar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex items-center" href="./">
        <HomeFillIcon className="mr-1" size={20} />
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((item) => (
        <ActiveLink key={item.path} {...item} />
      ))}
    </nav>
  );
};
