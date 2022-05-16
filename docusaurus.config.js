// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const bookConfig = require('./readingbookConfig');



/** @type {import('@docusaurus/types').Config} */
const config = {
  i18n: {
    defaultLocale: 'zh-cn',
    locales: ['zh-cn'],
  },
  title: 'Gx\'sBlog',
  tagline: 'Dinosaurs are cool',
  url: 'https://gouxin.fun',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'xing-ou', // Usually your GitHub org/user name.
  projectName: 'GxBlog', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {       
          sidebarPath: require.resolve('./sidebars.js'),          
          editUrl: 'https://github.com/xing-ou/GxBlog',
        },
        blog: {
          showReadingTime: true,
          routeBasePath: "/",
          blogSidebarTitle: "近期文章",
          blogSidebarCount: 10,                    
          editUrl:'https://github.com/xing-ou/GxBlog',
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
        additionalLanguages: ['swift', 'objectivec', 'dart']
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
      booksInfo: bookConfig.booksInfo
    }
};

module.exports = config;
