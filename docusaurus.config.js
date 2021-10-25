// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

let booksInfo = [
  {
    "cover": "https://learning.oreilly.com/covers/urn:orm:book:9781492057604/400w/",
    "desc": "~",
    "bookLink": "/docs/wwdc/关于本专题",
    "readStartTime": "wwdc专辑",
    "readEndTime": "~",
    "isReading": true
  },
  {
    "cover": "https://learning.oreilly.com/covers/urn:orm:book:9781492057604/400w/",
    "desc": "2020年3月",
    "bookLink": "/docs/wwdc/关于本专题",
    "readStartTime": "学习开始:2021年10月25日",
    "readEndTime": "预计结束:2021年11月25日",
    "isReading": true
  },
  {
    "cover": "https://learning.oreilly.com/covers/urn:orm:book:9781492057604/400w/",
    "desc": "2020年3月",
    "bookLink": "/docs/wwdc/关于本专题",
    "readStartTime": "学习开始:2021年10月25日",
    "readEndTime": "预计结束:2021年11月25日",
    "isReading": true
  },
  {
    "cover": "https://learning.oreilly.com/covers/urn:orm:book:9781492057604/400w/",
    "desc": "2020年3月",
    "bookLink": "/docs/wwdc/关于本专题",
    "readStartTime": "学习开始:2021年10月25日",
    "readEndTime": "预计结束:2021年11月25日",
    "isReading": true
  }
]


/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
  title: 'Gx\'sBlog',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {       
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          blogSidebarTitle: "近期文章",
          blogSidebarCount: 8,
          // blogListComponent: require.resolve('./src/components/MyBlogListPage.tsx'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'GouXin',
        logo: {
          alt: 'My Site Logo',
          src: 'img/avator.jpg',
        },
        items: [           
          {to: "/", label: '近期文章', position: 'left', activeBaseRegex: "^/$"},          
          {to: '/archive', label: '日期归档', position: 'left'},          
          {to: '/tags', label: '所有标签', position: 'left'},          
          {to: '/reading', label: '书籍阅读', position: 'left'},          
          {to: '/aboutme', label: '关于我', position: 'left'},          
        ],
      },      
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        '@docusaurus/plugin-client-redirects',
        {
          redirects: [
            {
              to: '/archive', // string
              from: ['/blog'], // string | string[]
            },
          ],
        },
      ],
    ],
    customFields: {
      booksInfo: booksInfo
    }
};

module.exports = config;
