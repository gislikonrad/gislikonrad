export class AppService {
  getContactInfo() {
    return [
      {
        icon: 'globe',
        type: 'website',
        prefix: 'www.',
        suffix: '.com',
        url: 'http://www.gislikonrad.com'
      },
      {
        icon: 'envelope-square',
        type: 'email',
        prefix: '',
        suffix: '@gmail.com',
        url: 'mailto:gislikonrad@gmail.com'
      },
      {
        icon: 'twitter-square',
        type: 'twitter',
        prefix: '@',
        suffix: '',
        url: 'https://twitter.com/gislikonrad'
      },
      {
        icon: 'github-square'
        type: 'github',
        prefix: 'github.com/',
        suffix: '',
        url: 'https://github.com/gislikonrad'
      },
      // {
      //   icon: 'stack-overflow'
      //   type: 'stackoverflow',
      //   prefix: 'stackoverflow.com/users/411122/',
      //   suffix: '',
      //   url: 'http://stackoverflow.com/users/411122/gislikonrad'
      // },
      {
        icon: 'linkedin-square',
        type: 'linkedin',
        prefix: 'linkedin.com/in/',
        suffix: '',
        url: 'https://linkedin.com/in/gislikonrad'
      },
      {
        icon: 'facebook-square',
        type: 'facebook',
        prefix: 'facebook.com/',
        suffix: '',
        url: 'https://www.facebook.com/gislikonrad'
      },
      {
        icon: 'reddit-square',
        type: 'reddit',
        prefix: '/u/',
        suffix: '',
        url: 'https://www.reddit.com/u/gislikonrad'
      },
      {
        icon: 'instagram',
        type: 'instagram',
        prefix: 'instagram.com/',
        suffix: '',
        url: 'https://www.instagram.com/gislikonrad'
      },
      // {
      //   icon: 'steam-square',
      //   type: 'steam',
      //   prefix: 'steamcommunity.com/id/',
      //   suffix: '',
      //   url: 'http://steamcommunity.com/id/gislikonrad'
      // }
    ];
  }

}
