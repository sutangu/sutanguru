import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Header from './components/header';
import tr from './helpers/translator';

import './main.scss';
import SocialNetworksStore from './stores/SocialNetworksStore';

interface LinkList {
  link: string;
  title: string;
}

@inject('SutanguStore', 'SocialNetworksStore')
@observer
class App extends Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      yandexPlaylists: [
        {
          link: 'https://music.yandex.ru/users/cu-real/playlists/1004',
          title: '7+',
        },
        {
          link: 'https://music.yandex.ru/users/cu-real/playlists/1019',
          title: 'Short Cool Songs and Melodies',
        },
        {
          link: 'https://music.yandex.ru/users/cu-real/playlists/1017',
          title: 'rap samples with originals',
        },
        {
          link: 'https://music.yandex.ru/users/cu-real/playlists/1015',
          title: 'wow-wow-wow',
        },
      ],
    };
  }
  // TODO <any, any> what?
  switchLang = (event: any): void => {
    localStorage.setItem('lang', event.currentTarget.value.toLowerCase());
    this.forceUpdate();
  };

  getLinkList = () => {
    const socials = SocialNetworksStore.allSocialNetworks();

    return socials.map((social) => (
      <li key={social.id} title={social.img.alt}>
        <a className={`social-icon ${social.classes}`} href={social.href} target="_blank" rel="noopener noreferrer">
          <img className={`icon ${social.img.addClass} `} src={social.img.src} alt={social.img.alt} height="25px" />
        </a>
        {social.label && <div className="letter">{social.label}</div>}
      </li>
    ));
  };

  public PGCOdeValue: string = '0785 6696 5507';
  PGCode = () => (
    <h4>
      Oh, if you playing too, my <strong>PokemonGO</strong> trainer code is: <strong>{this.PGCOdeValue}</strong>
    </h4>
  );

  render() {
    const referrerPage = document.referrer;
    console.log('referrerPage: ', referrerPage);
    const steamFrom = referrerPage.includes('steamcommunity.com');
    if (steamFrom) {
      // При этом, не нашёл возможности отследить переход юзера из десктопной версии стима
      console.log('from steam');
    }
    // @ts-ignore
    const { SutanguStore } = this.props;

    return (
      <React.Fragment>
        <Header switchLang={this.switchLang} />
        <main className="page" data-theme={SutanguStore.theme}>
          <span className="launch-expect">{tr('main.portal_launch_expect')}</span>
          <div className="wrap">
            <p className="intro">Here will be website 'bout sutangu.</p>
            <h1>{tr('main.sutangu')}</h1>
            <h2>
              {tr('main.subtitle')}
              <a href={`${tr('main.subtitle_ALS_link')}`} target="_blank" rel="noopener noreferrer">
                {tr('main.subtitle_ALS')}
              </a>
            </h2>
            <h3>{tr('main.h3')}</h3>

            <div className="email">
              <a href="mailto:me@sutangu.ru">me@sutangu.ru</a>
            </div>

            <a
              className="stackoverflow"
              href="https://stackoverflow.com/users/5266871/alexander-shtang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://stackoverflow.com/users/flair/5266871.png?theme=clean"
                width="208"
                height="58"
                alt="profile for Alexander Shtang at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
                title="profile for Alexander Shtang at Stack Overflow, Q&amp;A for professional and enthusiast programmers"
              />
            </a>

            <a href="https://myshows.me/Enclave88" className="myshows">
              <img src="https://u.myshows.me/u/23370.png" alt="https://myshows.me/Enclave88" />
            </a>

            <ul className="list">{this.getLinkList()}</ul>
            {steamFrom ? this.PGCode() : null}

            <ul className="yandex-music-pls">
              My Yandex.Music playlists list:
              {this.state.yandexPlaylists.map((playList) => (
                <li>
                  <a href={playList.link} dangerouslySetInnerHTML={{ __html: playList.title }} target="_blank" rel="noreferrer noopener" />
                </li>
              ))}
            </ul>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
