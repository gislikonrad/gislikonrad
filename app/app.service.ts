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
      // {
      //   id: 4,
      //   icon: 'stack-overflow'
      //   type: 'stackoverflow',
      //   prefix: 'stackoverflow.com/users/411122/',
      //   suffix: '',
      //   url: 'http://stackoverflow.com/users/411122/gislikonrad'
      // },
      {
        id: 5,
        icon: 'linkedin-square',
        type: 'linkedin',
        prefix: 'linkedin.com/in/',
        suffix: '',
        url: 'https://linkedin.com/in/gislikonrad'
      },
      {
        id: 6,
        icon: 'facebook-square',
        type: 'facebook',
        prefix: 'facebook.com/',
        suffix: '',
        url: 'https://www.facebook.com/gislikonrad'
      },
      {
        id: 7,
        icon: 'reddit-square',
        type: 'reddit',
        prefix: '/u/',
        suffix: '',
        url: 'https://www.reddit.com/u/gislikonrad'
      },
      {
        id: 8,
        icon: 'instagram',
        type: 'instagram',
        prefix: 'instagram.com/',
        suffix: '',
        url: 'https://www.instagram.com/gislikonrad'
      },
      // {
      //   id:9,
      //   icon: 'steam-square',
      //   type: 'steam',
      //   prefix: 'steamcommunity.com/id/',
      //   suffix: '',
      //   url: 'http://steamcommunity.com/id/gislikonrad'
      // }
    ];
  }

}
