import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import Image from "next/image";
import Link from "next/link";

const links = [
  { name: "Our Dishes", link: "/menu" },
  { name: "How it Works", link: "/menu" },
];
export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="flex items-center font-semibold gap-10 w-80 ">
        <Link href="/" aria-label="Go to homepage">
          <Image
            src={logo}
            alt="Site Logo"
            width={150}
            height={50}
            priority
            className="h-auto w-auto"
          />
        </Link>
        {links.map((link) => (
          <Link key={link.name} href={"/"}>
            {link.name}
          </Link>
        ))}
      </div>
      <div>Cart</div>
    </div>
  );
}
