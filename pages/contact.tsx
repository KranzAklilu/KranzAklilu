import gsap from "gsap";
import { useEffect, useRef } from "react";
import { NavigationAnimation } from "../helpers/NavigationAnimation";
const contact = () => {
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
    <div className="container">
      <span ref={openTrigger} onClick={handleClick} className="menu-trigger">
        <i ref={openTriggerTop} className="menu-trigger-bar top"></i>
        <i ref={openTriggerMiddle} className="menu-trigger-bar middle"></i>
        <i ref={openTriggerBottom} className="menu-trigger-bar bottom"></i>
      </span>
      <span ref={closeTrigger} onClick={handleClose} className="close-trigger">
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
  );
};

export default contact;
