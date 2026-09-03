import { defineConfig } from "vitepress";

export default defineConfig({
  title: "CS:GO KZ Docs",
  description: "CS:GO Kreedz documentation",

  base: "/csgo-docs/",
  srcDir: "docs",

  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    nav: nav(),
    sidebar: sidebar(),

    socialLinks: [
      { icon: "github", link: "https://github.com/KZGlobalTeam/docs" },
      { icon: "discord", link: "https://discord.gg/csgokz" },
    ],

    editLink: {
      text: "View this page on GitHub",
      pattern: "https://github.com/KZGlobalTeam/csgo-docs/edit/master/docs/:path",
    },
  },
});

function nav() {
  return [
    { text: "Forums", link: "https://forum.global-kz.net" },
    { text: "Portal", link: "https://portal.global-api.com" },
  ];
}

function sidebar() {
  return [
    {
      text: "GOKZ guides",
      items: [
        { text: "Install GOKZ", link: "/guides/install-gokz" },
        { text: "Whitelisting for GOKZ", link: "/guides/global-gokz" },
      ],
    },
    {
      text: "KZTimer guides",
      items: [
        { text: "Install KZTimer", link: "/guides/install-kztimer" },
        { text: "Whitelisting for KZTimer", link: "/guides/global-kztimer" },
      ],
    },
    {
      text: "Uncategorized guides",
      items: [
        { text: "Useful plugins guide", link: "/guides/useful-plugins" },
      ],
    },
  ];
}
