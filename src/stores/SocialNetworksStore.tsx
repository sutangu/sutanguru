import { Social } from '../interfaces/social';
import image from '../images/images64';
import psn from '../images/psn.png';
import lastfm from '../images/last-fm-logo.svg';
import telegram from '../images/telegram.svg';

export default class SocialNetworksStore {
  private static socialNetworks: Social[] = [
    {
      id: 1,
      href: 'https://steamcommunity.com/id/sutangu/',
      img: {
        src: image.steam,
        alt: 'steam'
      }
    },
    {
      id: 2,
      href: 'https://my.playstation.com/profile/cu-real',
      img: {
        src: psn,
        alt: 'psn'
      }
    },
    {
      id: 3,
      href: 'https://psnprofiles.com/cu-real',
      label: 'pr',
      img: {
        src: psn,
        alt: 'psn profiles'
      }
    },
    {
      id: 4,
      href: 'https://www.goodreads.com/user/show/7471677-alexander-shtang',
      img: {
        src: image.goodreads,
        alt: 'goodreads'
      }
    },
    /*{
      id: 4,
      href: 'https://welcome.playkey.net/lp/referral?ref=8305807',
      img: {
        addClass: 'white-icon',
        src: playkey,
        alt: 'playkey'
      }
    },*/
    {
      id: 5,
      classes: 'waka',
      href: 'https://wakatime.com/@sutangu',
      img: {
        src: image.wakatime,
        alt: 'wakatime'
      }
    },
    {
      id: 6,
      classes: 'github',
      href: 'https://github.com/sutangu',
      img: {
        src: image.github,
        alt: 'github'
      }
    },
    {
      id: 7,
      classes: 'lastfm',
      href: 'https://www.last.fm/ru/user/Cu-Real',
      img: {
        src: lastfm,
        alt: 'lastfm'
      }
    },
    {
      id: 8,
      classes: 'telegram',
      href: 'https://t.me/sutangu',
      img: {
        src: telegram,
        alt: 'telegram-own'
      }
    },
    {
      id: 9,
      classes: 'telegram -channel',
      label: 'ch',
      href: 'https://t.me/whatreadnotread',
      img: {
        src: telegram,
        alt: 'telegram-channel'
      }
    },
  ];

  static allSocialNetworks(): Social[] {
    return this.socialNetworks;
  }
}
