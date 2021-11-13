import gsap from "gsap";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { NavigationAnimation } from "../../helpers/NavigationAnimation";

const NavBar = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const tlOpen = gsap.timeline({ paused: true });
  const tlClose = gsap.timeline({ paused: true });
  const openTrigger = useRef<HTMLElement>();
  const openTriggerTop = useRef<HTMLElement>();
  const openTriggerMiddle = useRef<HTMLElement>();
  const openTriggerBottom = useRef<HTMLElement>();
  const menu = useRef<HTMLUListElement>();
  const menuTop = useRef<HTMLElement>();
  const menuMiddle = useRef<HTMLElement>();
  const menuBottom = useRef<HTMLElement>();
  const closeTrigger = useRef<HTMLElement>();
  const closeTriggerLeft = useRef<HTMLElement>();
  const closeTriggerRight = useRef<HTMLElement>();

  useEffect(() => {
    NavigationAnimation({
      tlOpen,
      tlClose,
      openTriggerTop,
      openTrigger,
      openTriggerBottom,
      openTriggerMiddle,
      closeTrigger,
      closeTriggerLeft,
      closeTriggerRight,
      menu,
      menuBottom,
      menuMiddle,
      menuTop,
    });
  }, [openTrigger]);
  const handleClick = () => {
    if (tlOpen.progress() < 1) {
      tlOpen.play();
    } else {
      tlOpen.restart();
    }
  };
  const handleClose = () => {
    if (tlClose.progress() < 1) {
      tlClose.play();
    } else {
      tlClose.restart();
    }
  };

  return (
    <div className="w-full px-2 flex justify-between items-center text-sm font-light">
      <img src="../assets/svg/logo.svg" alt="YOo" style={{ width: 80 }} />
      <div className="overflow-hidden sm:hiden">
        <span ref={openTrigger} onClick={handleClick} className="menu-trigger">
          <i ref={openTriggerTop} className="menu-trigger-bar top"></i>
          <i ref={openTriggerMiddle} className="menu-trigger-bar middle"></i>
          <i ref={openTriggerBottom} className="menu-trigger-bar bottom"></i>
        </span>
        <span
          ref={closeTrigger}
          onClick={handleClose}
          className="close-trigger"
        >
          <i ref={closeTriggerLeft} className="close-trigger-bar left"></i>
          <i ref={closeTriggerRight} className="close-trigger-bar right"></i>
        </span>
        <div className="inner-container">
          <span ref={menuTop} className="menu-bg top"></span>
          <span ref={menuMiddle} className="menu-bg middle"></span>
          <span ref={menuBottom} className="menu-bg bottom"></span>
          <div className="menu-container">
            <ul ref={menu} className="menu">
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Create account</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ul className="sm:flex items-center space-x-4 hidden">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Resume</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hidden sm:block ">
        <span>
          <span className="font-bold">ENG |</span>
          <span> PL</span>
        </span>
        <span className="ml-2 border">
          <span>G </span>
          <span>L</span>
        </span>
      </div>
    </div>
  );
};

export default NavBar;
