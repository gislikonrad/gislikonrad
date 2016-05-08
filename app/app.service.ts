export class AppService {
  getContactInfo() {
    return [
      {
        id: 0,
        icon: 'globe',
        type: 'website',
        prefix: 'www.',
        suffix: '.com',
        url: 'http://www.gislikonrad.com'
      },
      {
        id: 1,
        icon: 'envelope-square',
        type: 'email',
        prefix: '',
        suffix: '@gmail.com',
        url: 'mailto:gislikonrad@gmail.com'
      },
      {
        id: 2,
        icon: 'twitter-square',
        type: 'twitter',
        prefix: '@',
        suffix: '',
        url: 'https://twitter.com/gislikonrad'
      },
      {
        id: 3,
        icon: 'github-square'
        type: 'github',
        prefix: 'github.com/',
        suffix: '',
        url: 'https://github.com/gislikonrad'
      },
      {
        id: 4,
        icon: 'linkedin-square',
        type: 'linkedin',
        prefix: 'linkedin.com/in/',
        suffix: '',
        url: 'https://linkedin.com/in/gislikonrad'
      },
      {
        id: 5,
        icon: 'facebook-square',
        type: 'facebook',
        prefix: 'facebook.com/',
        suffix: '',
        url: 'https://www.facebook.com/gislikonrad'
      },
      {
        id: 6,
        icon: 'reddit-square',
        type: 'reddit',
        prefix: '/u/',
        suffix: '',
        url: 'https://www.reddit.com/u/gislikonrad'
      }
    ];
  }

}
