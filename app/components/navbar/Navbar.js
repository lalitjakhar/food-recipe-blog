"use client";
import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`${styles.navbarcontainer} z-50`}>
      <div className="max-w-[1440px] m-auto">
        <nav className="bg-transparent">
          <div className="flex items-center justify-between p-4">
            <div className="navbarlogocontainer flex items-center">
              <Link href="/" draggable={false}>
                <div className={styles.navbar_logo}>
                  <Image
                    src={"/assets/foodcompanylogo.svg"}
                    alt="food-blogs-logo"
                    layout="fill"
                    draggable={false}
                  />
                </div>
              </Link>
            </div>
            <button
              className={`${styles.navbartogglerbtn} ${
                expanded ? styles.navbartogglerbtnExpanded : ""
              }`}
              aria-controls="navbarScroll"
              onClick={() => setExpanded(!expanded)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              id="navbarScroll"
              className={`w-100 absolute top-full left-0 px-3 pb-3 md:static md:px-0 md:pb-0 md:flex-row items-center justify-around flex-0 flex-col ${
                expanded ? "flex" : "hidden"
              } md:flex`}
            >
              <div className="md:m-auto md:flex md:items-center md:mt-0 md:mb-0 gap-[10px] min-[991px]:gap-[32px] items-start mt-2.5 mb-2.5">
                <Link
                  href="/"
                  className={`${styles.navlinks} ${
                    pathname === "/" ? styles.selected : ""
                  }`}
                  onClick={() => handleLinkClick("/Home")}
                  draggable={false}
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  draggable={false}
                  className={`${styles.navlinks} ${
                    pathname === "/about-us" ? styles.selected : ""
                  }`}
                  onClick={() => handleLinkClick("/about-us")}
                >
                  About Us
                </Link>
                <Link
                  href="/blogs"
                  draggable={false}
                  className={`${styles.navlinks} ${
                    pathname === "/blogs" ? styles.selected : ""
                  }`}
                  onClick={() => handleLinkClick("/blogs")}
                >
                  Blogs
                </Link>
                <Link
                  href="/orders"
                  draggable={false}
                  className={`${styles.navlinks} ${
                    pathname === "/orders" ? styles.selected : ""
                  }`}
                  onClick={() => handleLinkClick("/orders")}
                >
                  Orders
                </Link>
                <Link
                  href="/contact-us"
                  draggable={false}
                  className={`${styles.navlinks} ${
                    pathname === "/contact-us" ? styles.selected : ""
                  }`}
                  onClick={() => handleLinkClick("/contact-us")}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
