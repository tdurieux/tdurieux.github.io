const { join, basename, relative } = require('path');
const moment = require('moment');
const glob = require('glob');
const { readFileSync } = require('fs');

const readTitleFromMd = path => {
  const lines = readFileSync(path, 'utf8').split('\n').map(l => l.trim());
  const headerLine = lines.find(l => /^title:.*$/.test(l));
  const match = headerLine.match(/^title:(.*)/);
  if (!match) return;
  return match[1].trim();
};
const generateProjectsSideBar = dir => {
  return projects = glob.sync('**/*.md', { cwd: join(__dirname, '..', dir) })
    .filter(p => basename(p) !== 'README.md')
    .map(p => {return basename(p, '.md')})
}
const generateBlogSideBar = dir => {
  const structure = {};
  const files = glob.sync('**/*.md', { cwd: join(__dirname, '..', dir) })
    .filter(p => basename(p) !== 'README.md')
    .map(p => {
      const [year, month, filename] = p.split('/');
      const day = basename(filename, '.md');
      return [year, month, day];
    }).forEach(([year, month, day]) => {
      structure[year] = { ...structure[year] };
      structure[year][month] = {
        ...structure[year][month],
        [day]: join(dir, year, month, day),
      };
    });
  
  const years = Object.keys(structure).sort().reverse();
  const recentYear = (year => {
    const months = Object.keys(structure[year]).sort().reverse();
    return months.map(month => {
      const days = Object.keys(structure[year][month]).sort().reverse();
      return {
        title: moment(`${year}-${month}`).format('YYYY MMM'),
        collapsable: false,
        children: days.map(day => {
          const url = join(dir, year, month, day);
          const date = moment(`${year}-${month}-${day}`).format('DD MMMM YYYY');
          return [url, date + ' - ' + readTitleFromMd(join(__dirname, '..', url + '.md'))]
        }),
      };
    });
  })(years[0]);

  return [...recentYear, ...years.slice(1).map(year => {
    const months = Object.keys(structure[year]).sort().reverse();
    return {
      title: year,
      collapsable: true,
      children: [].concat(...months.map(month => {
        const days = Object.keys(structure[year][month]).sort().reverse();
        return days.map(day => {
          const url = join(dir, year, month, day);
          const date = moment(`${year}-${month}-${day}`).format('DD MMMM YYYY');
          return [url, date + ' - ' + readTitleFromMd(join(__dirname, '..', url + '.md'))]
        });
      }))
    };
  })];
};

module.exports = {
  title: 'Thomas Durieux',
  description: 'Ph.D. student in software engineering, he focus on patch generation techniques to fix software in production.',
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: "180x180", href: `/apple-touch-icon.png` }],
    ['link', { rel: 'icon', type:"image/png", sizes: "32x32", href: `/favicon-32x32.png` }],
    ['link', { rel: 'icon', type:"image/png", sizes: "16x16", href: `/favicon-16x16.png` }],
    ['link', { rel: 'manifest', href: `/site.webmanifest` }],
    ['link', { rel: 'mask-icon', color: "#648fa8", href: `/safari-pinned-tab.svg` }],
    ['meta', { name: 'msapplication-TileColor', content: "#648fa8"}],
    ['meta', { name: 'theme-color', content: "#ffffff"}],
  ],
  themeConfig: {
    nav: [
      {
        text: 'Curriculum Vitae',
        link: '/'
      },
      {
        text: 'Research',
        link: '/research'
      },
      /*{
        text: 'Blog',
        link: '/blog/',
      },*/
      {
        text: 'Open-source Projects',
        link: '/projects/',
      }
    ],
    sidebar: {
      '/blog/': [
        ...generateBlogSideBar('/blog')
      ],
      '/cv/': [
        '',
      ],
      '/projects/': [
        {
          title: 'Projects',
          collapsable: false,
          children: generateProjectsSideBar('/projects'),
        }
      ],
    },
    sidebarDepth: 0,
    lastUpdated: 'Last Updated'
  },
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          const moment = require('moment')
          moment.locale(lang)
          // return moment(timestamp).fromNow()
          return moment(timestamp).format('DD/MM/YYYY')
        }
      }
    ],
    ['@vuepress/back-to-top'],
    ['@vuepress/google-analytics', {
      ga: 'UA-5954162-17'
    }]
  ],
  markdown: {
    config: md => md.use(require('markdown-it-deflist')),
  }
};