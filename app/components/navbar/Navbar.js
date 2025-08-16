import React from "react";
import "./Navbar.css";
import logo from "./logo.png";
import cart from "./cart.png";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../../components/ui/button";

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

      <div>
        {" "}
        <Button className="bg-orange-600  font-semibold">
          <Image
            src={cart}
            alt="Site Logo"
            width={150}
            height={50}
            priority
            className="h-auto w-auto"
          />
          Cart
        </Button>
      </div>
    </div>
  );
}
