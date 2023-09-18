const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Lucas Piera",
    image: "/avataars.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Drifter Developer",
    bio: "Blending the realms of critical thought and Novocaine.",
    email: "pieralukasz@gmail.com",
    linkedin: "lukasz-piera",
    github: "pieralukasz",
    // instagram: "",
  },
  projects: [
      {
        name: `piera-lukasz`,
        href: "https://github.com/pieralukasz",
      },
  ],
  // blog setting (required)
  blog: {
    title: "Lucas Piera",
    description: "welcome to my blog!",
    theme: "auto",
  },

  // CONFIG configration (required)
  link: "https://www.lucaspiera.com/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "ea07c15e-b232-4e73-b319-f94b3723e440", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
