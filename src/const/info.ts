export const MainLinks = {
  site1: {
    title: "/raulmoracode",
    href: "https://raulmoracode.com",
  },
  site2: {
    title: "/links",
    href: "https://raulmoracode.com/links",
  },
};

export const Mlinks = [...Object.values(MainLinks)].sort(
  (a, b) =>
    a.title.replace(/\W/g, "").length - b.title.replace(/\W/g, "").length,
);
