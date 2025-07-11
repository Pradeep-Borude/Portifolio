"use client";
import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const Navbar = () => {
  const Navitems = ({ closeSidebar }) => {
    return (
      <ul
        className={`flex flex-col sm:flex-row gap-5.5 sm:gap-16 items-center sm:text-2xl text-[#1b1b1b] text-3xl sm:font-medium font-bold `}
      >
        <li className="hover:scale-115">
          <Link href="/" onClick={closeSidebar}>
            Home
          </Link>
        </li>
        <li className="hover:scale-115">
          <Link href="/about" onClick={closeSidebar}>
            About
          </Link>
        </li>
        <li className="hover:scale-105">
          <Link href="/Blog" onClick={closeSidebar}>
            Projects
          </Link>
        </li>
        <li className="sm:block hidden">
          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-[#1b1b1b] px-6 font-medium text-neutral-200 transition hover:scale-110">
            <a href="mailto:pradeepborude406@gmail.com">hello@Mr.pradeep</a>
            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
              <div className="relative h-full w-8 bg-white/20"></div>
            </div>
          </button>
        </li>
      </ul>
    );
  };

  const [isOpen, setisOpen] = useState(false);
  const sidebarRef = useRef();

  useEffect(() => {
    if (isOpen) {
      gsap.to(sidebarRef.current, {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(sidebarRef.current, {
        x: "100%",
        duration: 0.5,
        ease: "power2.in",
      });
    }
  }, [isOpen]);

  const closeSidebar = () => setisOpen(false);

  return (
    <nav className="sticky top-0 z-50 bg-white flex justify-between py-5 sm:py-0 px-10">
      <div className="flex font-bold items-center text-[#1b1b1b]">
        <h3>portfolio by</h3>
        <img
          className="h-24 w-24 hidden sm:block"
          src="/images/logo.png"
          alt=""
        />
        <a href="/" className="pl-1.5 sm:pl-0 italic font-medium">
          Mr.Pradeep
        </a>
      </div>

      <div className="flex items-center relative">
        <button
          onClick={() => setisOpen((prev) => !prev)}
          className="sm:hidden flex focus:outline-none"
        >
          <img
            className="w-10 h-10"
            src={isOpen ? "/svgs/close.svg" : "/svgs/menu.svg"}
            alt="menu"
          />
        </button>

        {/* navbar for pc */}
        <div className="sm:flex hidden">
          <Navitems />
        </div>

        {/* navbar for mobile */}
        <div
          ref={sidebarRef}
          className="fixed top-20 right-0 w-full h-screen bg-white border-l border-[#1b1b1b] sm:hidden z-20"
          style={{ transform: "translateX(100%)" }}
        >
          <Navitems closeSidebar={closeSidebar} />
          <div className=" w-full absolute right-0 flex flex-col items-center gap-5">
            <span className="h-[100px] w-[100px] border flex items-center">
              <img src="/images/logo.png" alt="" />
            </span>
            <a
              href="mailto:pradeepborude406@gmail.com"
              className="text-xl text-[#1b1b1b]"
            >
              Hello@Mr.pradeep
            </a>
            <address>Chhtrapati Sambhajinagar , Maharashtra</address>
            <div className="gap-3 flex flex-col">
              <a
                href="https://github.com/Pradeep-Borude"
                className="flex text-xl items-center "
              >
                <span>
                  <img
                    className="w-10 mx-1.5"
                    src="/images/github.jpg"
                    alt=""
                  />
                </span>
                <span>github</span>
              </a>
              <a href="" className="flex text-xl items-center">
                <span>
                  <img
                    className="w-10 mx-1.5"
                    src="/images/Twitter.jpg"
                    alt=""
                  />
                </span>
                <span>Twitter</span>
              </a>
              <a
                href="https://www.linkedin.com/in/pradeep-borude-7854422b3/"
                className="flex text-xl items-center"
              >
                <span>
                  <img
                    className="w-10 mx-1.5"
                    src="/images/linkedin.jpg"
                    alt=""
                  />
                </span>
                <span>LinkedIn</span>
              </a>
             
            </div>
            <p className="italic">&copy; created with ❤️ & 🍵 in India.</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
