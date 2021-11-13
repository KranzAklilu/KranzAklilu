import gsap, { Power2, Power4 } from "gsap";
import { MutableRefObject } from "react";

type NavigationAnimationProps = {
  tlOpen: gsap.core.Timeline;
  tlClose: gsap.core.Timeline;
  openTrigger: MutableRefObject<HTMLElement>;
  openTriggerTop: MutableRefObject<HTMLElement>;
  openTriggerMiddle: MutableRefObject<HTMLElement>;
  openTriggerBottom: MutableRefObject<HTMLElement>;
  menu: MutableRefObject<HTMLElement>;
  menuTop: MutableRefObject<HTMLElement>;
  menuMiddle: MutableRefObject<HTMLElement>;
  menuBottom: MutableRefObject<HTMLElement>;
  closeTrigger: MutableRefObject<HTMLElement>;
  closeTriggerLeft: MutableRefObject<HTMLElement>;
  closeTriggerRight: MutableRefObject<HTMLElement>;
};
type NavigationAnimationType = (props: NavigationAnimationProps) => {
  tlOpen: gsap.core.Timeline;
};

export const NavigationAnimation: NavigationAnimationType = ({
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
}) => ({
  tlOpen: tlOpen
    .add("preOpen")
    .to(
      openTriggerTop.current,
      0.4,
      {
        x: "+80px",
        y: "-80px",
        delay: 0.1,
        ease: Power4.easeIn,
        onComplete: function () {
          // closeTrigger.current.style.display = "block";
          closeTrigger.current.style.zIndex = "25";
        },
      },
      "preOpen"
    )
    .to(
      openTriggerMiddle.current,
      0.4,
      {
        x: "+=80px",
        y: "-=80px",
        ease: Power4.easeIn,
        onComplete: function () {
          openTrigger.current.style.visibility = "visible";
          // openTrigger.current.style.display = "none";
        },
      },
      "preOpen"
    )
    .to(
      openTriggerBottom.current,
      0.4,
      {
        x: "+=80px",
        y: "-=80px",
        delay: 0.2,
        ease: Power4.easeIn,
      },
      "preOpen"
    )
    .add("open", "-=0.4")
    .to(
      menuTop.current,
      0.8,
      {
        y: "150%",
        ease: Power4.easeInOut,
      },
      "open"
    )
    .to(
      menuMiddle.current,
      0.8,
      {
        scaleY: 1,
        ease: Power4.easeInOut,
      },
      "open"
    )
    .to(
      menuBottom.current,
      0.8,
      {
        y: "-150%",
        ease: Power4.easeInOut,
      },
      "open"
    )
    .fromTo(
      menu.current,
      0.6,
      {
        y: 30,
        opacity: 0,
        visibility: "hidden",
      },
      {
        y: 0,
        opacity: 1,
        visibility: "visible",
        ease: Power4.easeOut,
      },
      "-=0.2"
    )
    .add("preClose", "-=0.8")
    .to(
      closeTriggerLeft.current,
      0.8,
      {
        x: "-=100px",
        y: "+=100px",
        ease: Power4.easeOut,
      },
      "preClose"
    )
    .to(
      closeTriggerRight.current,
      0.8,
      {
        x: "+=100px",
        y: "+=100px",
        delay: 0.2,
        ease: Power4.easeOut,
      },
      "preClose"
    ),

  tlClose: tlClose
    .add("close")
    .to(
      menuTop.current,
      0.2,
      {
        backgroundColor: "#6295ca",
        ease: Power4.easeInOut,
        onComplete: function () {
          closeTrigger.current.style.zIndex = "5";
          // closeTrigger.current.style.display = "none";
          // openTrigger.current.style.display = "block";
          openTrigger.current.style.visibility = "visible";
        },
      },
      "close"
    )
    .to(
      menuMiddle.current,
      0.2,
      {
        backgroundColor: "#6295ca",
        ease: Power4.easeInOut,
      },
      "close"
    )
    .to(
      menuBottom.current,
      0.2,
      {
        backgroundColor: "#6295ca",
        ease: Power4.easeInOut,
      },
      "close"
    )
    .to(
      menu.current,
      0.6,
      {
        y: 20,
        opacity: 0,
        ease: Power4.easeOut,
        onComplete: function () {
          menu.current.style.visibility = "visible";
        },
      },
      "close"
    )
    .to(
      menuTop.current,
      0.8,
      {
        y: "-100%",
        ease: Power4.easeInOut,
        duration: "0.2",
      },
      "close"
    )
    .to(
      menuMiddle.current,
      0.8,
      {
        scaleY: 0,
        ease: Power4.easeInOut,
        duration: "0.2",
      },
      "close"
      // "+=0.2"
    )
    .to(
      menuBottom.current,
      0.8,
      {
        y: "25%",
        ease: Power4.easeInOut,
        onComplete: function () {
          menuTop.current.style.backgroundColor = "#000000";
          menuMiddle.current.style.backgroundColor = "#000000";
          menuBottom.current.style.backgroundColor = "#000000";
        },
        duration: "0.2",
      },
      "close"
    )
    .to(
      closeTriggerLeft.current,
      0.2,
      {
        x: "+=100px",
        y: "-=100px",
        ease: Power4.easeIn,
      },
      "close"
    )
    .to(
      closeTriggerRight.current,
      0.2,
      {
        x: "-=100px",
        y: "-=100px",
        delay: 0.1,
        ease: Power4.easeIn,
      },
      "close"
    )
    .to(
      openTriggerTop.current,
      1,
      {
        x: "-=80px",
        y: "+=80px",
        delay: 0.2,
        ease: Power4.easeOut,
      },
      "close"
    )
    .to(
      openTriggerMiddle.current,
      1,
      {
        x: "-=80px",
        y: "+=80px",
        ease: Power4.easeOut,
      },
      "close"
    )
    .to(
      openTriggerBottom.current,
      1,
      {
        x: "-=80px",
        y: "+=80px",
        delay: 0.1,
        ease: Power4.easeOut,
      },
      "close"
    ),
});
