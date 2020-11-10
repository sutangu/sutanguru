import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from './components/header'
import './main.scss';
import tr from './helpers/translator';
import { Social } from './interfaces/social';

import image from './images/images64';
import telegram from './images/telegram.svg'
import lastfm from './images/last-fm-logo.svg'
import playkey from './images/playkey.svg'

const socials: Social[] = [
  {
    href: 'https://steamcommunity.com/id/sutangu/',
    img: {
      src: image.steam,
      alt: 'steam'
    }
  },
  {
    href: 'https://welcome.playkey.net/lp/referral?ref=8305807',
    img: {
      addClass: 'white-icon',
      src: playkey,
      alt: 'playkey'
    }
  },
  {
    href: 'https://wakatime.com/@sutangu',
    img: {
      src: image.wakatime,
      alt: 'wakatime'
    }
  },
  {
    href: 'https://github.com/sutangu',
    img: {
      src: image.github,
      alt: 'github'
    }
  },
  {
    classes: 'lastfm',
    href: 'https://www.last.fm/ru/user/Cu-Real',
    img: {
      src: lastfm,
      alt: 'lastfm'
    }
  },
  {
    classes: 'telegram',
    href: 'https://t.me/sutangu',
    img: {
      src: telegram,
      alt: 'telegram-own'
    }
  },
  {
    classes: 'telegram -channel',
    label: 'ch',
    href: 'https://t.me/whatreadnotread',
    img: {
      src: telegram,
      alt: 'telegram-channel'
    }
  },
];

@inject('SutanguStore')
@observer
class App extends Component {
  switchLang = (event: any) => {
    localStorage.setItem('lang', event.currentTarget.value.toLowerCase());
    this.forceUpdate();
  };

  getLinkList = () => {
    return socials.map(social => (
      <li>
        <a
          className={ `social-icon ${ social.classes }` }
          href={ social.href }
          target='_blank'
          rel="noopener noreferrer"
        >
          <img
            className={ `icon ${ social.img.addClass } ` }
            src={ social.img.src }
            alt={ social.img.alt }
            height='25px'
          />
        </a>
        { social.label && <div className="letter">{ social.label }</div> }
      </li>
    ));
  };

  render() {
    // @ts-ignore
    const { SutanguStore } = this.props;

    // TODO: удалить. тестил получение данных из node-scrapper
    // fetch('http://localhost:3030/api/myshows')
    //   .then(response => {
    //     debugger;
    //     return response.json();
    //   })
    //   .then(json => {
    //     console.log(json);
    //     debugger;
    //   })

    return (
      <React.Fragment>
        <Header switchLang={ this.switchLang }/>
        <main className="page" data-theme={ SutanguStore.theme }>
          <span className="launch-expect">{ tr('main.portal_launch_expect') }</span>
          <div className="wrap">
            <h1>{ tr('main.sutangu') }</h1>
            <h2>{ tr('main.subtitle') } <a href="https://www.artlebedev.ru/sutangu/">{ tr('main.subtitle_ALS') }</a></h2>
            <h3>{ tr('main.h3') }</h3>

            <div className='email'>
              <a href="mailto:me@sutangu.ru">me@sutangu.ru</a>
            </div>

            <a href="https://stackoverflow.com/users/5266871/alexander-shtang" target='_blank'
               rel="noopener noreferrer">
              <img src="https://stackoverflow.com/users/flair/5266871.png?theme=clean" width="208" height="58"
                   alt="profile for Alexander Shtang at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                   title="profile for Alexander Shtang at Stack Overflow, Q&amp;A for professional and enthusiast programmers"/>
            </a>

            <p className="intro">
              Here will be website 'bout sutangu.
            </p>

            <a href="https://myshows.me/Enclave88">
              <img src="https://u.myshows.me/u/23370.png" alt='https://myshows.me/Enclave88'/>
            </a>

            <ul className='list'>
              { this.getLinkList() }
            </ul>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
