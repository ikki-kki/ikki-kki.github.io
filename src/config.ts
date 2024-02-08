// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.
import type { Site, SocialMediaObjects } from "./types";

export const SITE: Site = {
  siteUrl: "https://ikkikki.github.io/", // Always put "/" at the end of the URL
  author: "ikkikki",
  desc: "이끼끼 기술블로그",
  title: "이끼끼 기술블로그",
  ogImage: "images/ikkikki.webp",
  keywords:
    "기술 블로그, 개발 블로그, frontend, develop, blog, developer, javascript, react, typescript, web, programming, software, tech",
  postPerPage: 3
};

// The site uses iconify - you can find icons on https://iconify.design/.

export const SOCIALS: SocialMediaObjects = [
  {
    name: "Github",
    href: "https://github.com/JeongminSung/",
    icon: "ph:github-logo-duotone",
    title: `Follow ${SITE.author} on Github`,
    active: true
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/sung_jungman/",
    icon: "ph:instagram-logo-duotone",
    title: `Follow ${SITE.author} on Instagram`,
    active: true
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/%EC%A0%95%EB%AF%BC-%EC%84%B1-629a0120a/",
    icon: "ph:linkedin-logo-duotone",
    title: `Follow ${SITE.title} on LinkedIn`,
    active: true
  },
  {
    name: "Mail",
    href: "mailto:yourmail@gmail.com",
    title: `Send an email to ${SITE.title}`,
    icon: "",
    active: false
  }
];
