module.exports = {
  page: {
    layout: 'default',
    toc: true
  },
  site: {
    // editSourceUrl: 'https://github.com/<git-org>/<git-repository>/tree/master/docs-src',
    title: 'Your Site Title',
    // url: 'https://<git-org>.github.io/<git-repository>/'
  },
  template: {
    name: 'default',
    cssFiles: [
      '/css/main.css'
    ],
    cssVars: {
      brandColor: '#00A288',
      brandColorLight: '#8BDBCD',
      brandColorDark: '#00382F'
    },
    favicon: '/favicon.png',
    finePrint: '<p>This is some mighty find print. Yes, some mighty fine print.</p>' +
      '<p><strong>NOTE:</strong> Book icon obtained under the <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">Creative Commons (Attribution 3.0 Unported)</a> license, created by <a href="https://www.iconfinder.com/laurareen">Laura Reen</a>. So, if you want to keep this icon you need to keep the attribution.</p>',
    footerLinks: [
      { title: 'Github', href: 'https://github.com/<git-org>/<git-repository>' }
    ]
  }
}