import { Social } from '../interfaces/social';
import image from '../images/images64';
import lastfm from '../images/last-fm-logo.svg';
import psn from '../images/psn.png';
import telegram from '../images/telegram.svg';

export default class SocialNetworksStore {
  private static socialNetworks: Social[] = [
    {
      id: 1,
      img: {
        src: image.steam,
        alt: 'steam',
      },
      href: 'https://steamcommunity.com/id/sutangu/',
    },
    {
      id: 2,
      img: {
        src: psn,
        alt: 'psn',
      },
      href: 'https://my.playstation.com/profile/cu-real',
    },
    {
      id: 3,
      img: {
        src: psn,
        alt: 'psn profiles',
      },
      href: 'https://psnprofiles.com/cu-real',
      label: 'pr',
    },
    {
      id: 4,
      img: {
        src: image.goodreads,
        alt: 'goodreads',
      },
      href: 'https://www.goodreads.com/user/show/7471677-alexander-shtang',
    },
    /*{
      id: 4,
      img: {
        addClass: 'white-icon',
        src: playkey,
        alt: 'playkey'
      }
      href: 'https://welcome.playkey.net/lp/referral?ref=8305807',
    },*/
    {
      id: 5,
      classes: 'waka',
      img: {
        src: image.wakatime,
        alt: 'wakatime',
      },
      href: 'https://wakatime.com/@sutangu',
    },
    {
      id: 6,
      classes: 'github',
      img: {
        src: image.github,
        alt: 'github',
      },
      href: 'https://github.com/sutangu',
    },
    {
      id: 7,
      classes: 'lastfm',
      img: {
        src: lastfm,
        alt: 'lastfm',
      },
      href: 'https://www.last.fm/ru/user/Cu-Real',
    },
    {
      id: 8,
      classes: 'telegram',
      img: {
        src: telegram,
        alt: 'telegram-own',
      },
      href: 'https://t.me/sutangu',
    },
    {
      id: 9,
      classes: 'telegram -channel',
      img: {
        src: telegram,
        alt: 'telegram-channel',
      },
      href: 'https://t.me/whatreadnotread',
      label: 'ch',
    },
  ];

  static allSocialNetworks(): Social[] {
    return this.socialNetworks;
  }
}
