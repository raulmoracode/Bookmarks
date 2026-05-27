export const MainLinks = {
  site1: {
    title: "/raulmoracode",
    href: "https://raulmoracode.com",
  },
  site2: {
    title: "/github",
    href: "https://raulmoracode.com/github",
  },
  site3: {
    title: "/linkedin",
    href: "https://raulmoracode.com/linkedin",
  },
  site4: {
    title: "/twitter",
    href: "https://raulmoracode.com/twitter",
  },
  site5: {
    title: "/mail",
    href: "https://gmail.com",
  },
  site6: {
    title: "/leetcode",
    href: "https://raulmoracode.com/leetcode",
  },
  site7: {
    title: "/instagram",
    href: "https://raulmoracode.com/instagram",
  },
  site8: {
    title: "/youtube",
    href: "https://raulmoracode.com/youtube",
  },
  site9: {
    title: "/tiktok",
    href: "https://raulmoracode.com/tiktok",
  },
  site10: {
    title: "/pinterest",
    href: "https://raulmoracode.com/pinterest",
  },
  site11: {
    title: "/medium",
    href: "https://raulmoracode.com/medium",
  },
};

export const Mlinks = [...Object.values(MainLinks)].sort(
  (a, b) =>
    a.title.replace(/\W/g, "").length - b.title.replace(/\W/g, "").length,
);
