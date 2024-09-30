import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://kranz.build",
  author: "Kranz Aklilu",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Kranz Aklilu",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
};

export const LOCALE = ["en-EN"]; // set to [] to use the environment default

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/kranzaklilu",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Fiverr",
    href: "https://www.fiverr.com/kranzaklilu",
    linkTitle: `${SITE.title} on Fiverr`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: false,
  },
  {
    name: "Mail",
    href: "kranz.aklilu@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  {
    name: "Telegram",
    href: "https://t.me/kranzak",
    linkTitle: `${SITE.title} on Telegram`,
    active: true,
  },
  {
    name: "WhatsApp",
    href: "",
    linkTitle: `${SITE.title} on WhatsApp`,
    active: false,
  },
];
