// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// Change here to customise config

// Name of the Github Repo
const workshopName = 'swiftui-atlas-sync-app-workshop';

// Main page config
const title = "SwiftUI Atlas Sync App Workshop";
const tagLine = "Learn how to build an iOS app using SwiftUI and storing your data in MongoDB using Atlas Device Sync";
const startButtonTitle = "Get Started 📲";

// Main Page Features
const featureList = [
  {
    title: "A 100% Swift/SwiftUI app",
    illustration: "img/Technical_SOFTWARE_Search(1)_Spot_BS_SpringGreen.png",
    description: `
        Built using the SwiftUI framework
    `,
  },
  {
    title: "Store your data in the cloud using Atlas Device Sync",
    illustration:
      "img/Technical_SOFTWARE_SearchDocuments_Spot_BS_SpringGreen.png",
    description: `
        We'll store our data in a MongoDB Cluster using Atlas Device Sync
    `,
  },
  {
    title: "Learn how to configure and use App Services",
    illustration: "img/Technical_SOFTWARE_SearchBar_Spot_BS_SpringGreen.png",
    description: `
        With App services you can bring you mobile app's data to the cloud.
    `,
  },
];

// UTM stuff

const utmAdvocateName = `diego.freniche`;
const utmWorkshopName = 'ios_swiftui_realm_workshop'

const utmParams = `utm_campaign=devrel&utm_source=workshop&utm_medium=cta&utm_content=${utmWorkshopName}&utm_term=${utmAdvocateName}`;

// Footer links (probably no need to change them)

const footerLinks = [
  {
    label: 'Try MongoDB Atlas',
    href: `https://www.mongodb.com/try?${utmParams}`,
  },
  {
    label: 'Forums',
    href: `https://www.mongodb.com/community/forums/${utmParams}`,
  },
  {
    label: 'Developer Center',
    href: `https://www.mongodb.com/developer/${utmParams}`,
  },
  {
    label: 'MongoDB University',
    href: `https://learn.mongodb.com/${utmParams}`,
  },
  {
    label: `© ${new Date().getFullYear()} MongoDB, Inc.`,
    href: "#",
  },
];

///////////////////////////////////////////////////////////////////////////////
// DON'T CHANGE ANYTHING BELOW UNLESS YOU KNOW WHAT YOU'RE DOING             //
///////////////////////////////////////////////////////////////////////////////

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `${title}`,
  tagline: `${tagLine}`,
  url: `https://${workshopName}.github.io`,
  baseUrl: `/${workshopName}/`,
  projectName: "mongodb-developer.github.io",
  organizationName: "mongodb-developer",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  customFields: {
    startButtonTitle: `${startButtonTitle}`,
    featureList: featureList,
  },
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `https://github.com/mongodb-developer/${workshopName}/blob/main`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-ZJ28V71VTQ",
          anonymizeIP: true,
        },
      }),
    ],
  ],
  plugins: [require.resolve("@cmfcmf/docusaurus-search-local")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        logo: {
          alt: `${title}`,
          src: "img/logo.svg",
          srcDark: "img/logo-dark.svg",
          className: "navbar-logo",
          width: "135px",
          height: "100%",
        },
        items: [
          {
            href: `https://github.com/mongodb-developer/${workshopName}`,
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: footerLinks,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["powershell", "swift", "kotlin"],
      },
    }),
};

module.exports = config;
